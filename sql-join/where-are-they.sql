SELECT "line1", "cities"."name", "district"
FROM "addresses"
JOIN "cities" using ("cityId");
