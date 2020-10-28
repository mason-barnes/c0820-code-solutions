select "c"."name",
       count("c"."name")
  from "actors"
  join "castMembers" using ("actorId")
  join "filmCategory" using ("filmId")
  join "categories" as "c" using ("categoryId")
  where "firstName" = 'Lisa'
  group by "c"."name";
