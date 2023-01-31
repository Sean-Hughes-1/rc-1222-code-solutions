SELECT "amount",
"firstName",
"lastName"
FROM "payments"
JOIN "customers" using ("customerId")
ORDER BY "amount" DESC
LIMIT 10;
