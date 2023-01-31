UPDATE "actors"
set "firstName" = 'Baby',
"lastName" = 'Yoda'
WHERE "actorId" = 15;
RETURNING *;
