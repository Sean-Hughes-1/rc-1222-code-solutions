select "customer"."firstName",
        "customer"."lastName",
    sum("payments"."amount") as "totalSpent"
    from "customers" as "customer"
    join "rentals" using ("customerId")
    join "payments" using ("rentalId")
    group by "customer"."firstName", "customer"."lastName"
    order by "totalSpent" desc;
