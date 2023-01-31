UPDATE "films"
SET "rating" = 'G'
WHERE "rating" = 'NC-17'
RETURNING *;
