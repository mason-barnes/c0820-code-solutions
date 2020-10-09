const books = [{
  isbn: '9780553418026',
  title: 'The Martian',
  author: 'Andy Weir'
},
{
  isbn: '9780060935467',
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee'
},
{
  isbn: '9780439023528',
  title: 'The Hunger Games (Book 1)',
  author: 'Suzanne Collins'
}];

console.log(typeof books, books);

const stringified = JSON.stringify(books);

console.log(typeof stringified, stringified);

const student = '{"id":12345,"name":"Mason Barnes"}';

console.log(typeof student, student);

const parsed = JSON.parse(student);

console.log(typeof parsed, parsed);
