const express = require('express');
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/grades', (req, res, next) => {
  const sql = `
  select *
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  if (req.body.name === undefined || req.body.course === undefined || req.body.grade === undefined) {
    return res.status(400).json({ error: 'Name, Course, and Grade are required' });
  } else if (req.body.grade <= 0) {
    return res.status(400).json({
      error: 'grade must be a positive integer'
    });
  } else {
    const text = 'INSERT INTO grades(name, course, grade) VALUES($1, $2, $3) RETURNING *';
    const values = [req.body.name, req.body.course, req.body.grade];
    db
      .query(text, values)
      .then(result => {
        res.status(201).send(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  if (req.params.gradeId <= 0) {
    return res.status(400).send({ error: 'gradeId must be a positive integer' });
  } else if (req.body.grade <= 0 || req.body.grade > 100) {
    return res.status(400).send({ error: 'grade must be a positive integer 1-100' });
  } else {
    const text = `UPDATE "grades" SET "grade" = ${req.body.grade} WHERE "gradeId" = ${req.params.gradeId} RETURNING *`;
    db.query(text)
      .then(result => {
        if (result.rows[0] === undefined) {
          return res.status(404).send({ error: 'gradeId does not exist in database' });
        } else {
          res.status(200).send(result.rows[0]);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  if (req.params.gradeId <= 0) {
    return res.status(400).send({ error: 'gradeId must be a positive integer' });
  } else {
    const text = `DELETE FROM "grades" WHERE "gradeId" = ${req.params.gradeId} RETURNING *`;
    // const sql = `
    //   delete from "grades"
    //   where "gradeId" = ${req.params.gradeId}
    //   returning *
    //   `;
    db.query(text)
      .then(result => {
        if (result.rows[0] === undefined) {
          return res.status(404).send({ error: 'gradeId does not exist in database' });
        } else {
          res.status(204).send(result.rows);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
