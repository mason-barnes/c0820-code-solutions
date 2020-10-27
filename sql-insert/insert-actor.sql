insert into "actors" ("firstName", "lastName")
values ('Mason', 'Barnes')
returning "firstName",
          "lastName";
