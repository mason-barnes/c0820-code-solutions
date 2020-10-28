select count("cities") as "citiesPerCountry",
       "countries"."name"
  from "countries"
  join "cities" using ("countryId")
  group by "countryId";
