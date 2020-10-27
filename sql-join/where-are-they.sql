select "a"."line1" as "address",
       "c"."name" as "city",
       "a"."district",
       "countries"."name" as "country"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" using ("countryId");
