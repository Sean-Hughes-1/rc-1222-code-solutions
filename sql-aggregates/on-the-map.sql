SELECT
  "countries"."name" AS "country",
  COUNT("cities"."cityId") AS "city_count"
FROM
  "cities"
  JOIN "countries" USING ("countryId")
GROUP BY
  "countries"."name";
