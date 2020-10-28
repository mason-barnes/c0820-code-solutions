select "c"."firstName",
       "c"."lastName",
       sum("amount") as "totalAmount"
  from "payments"
  join "customers" as "c" using ("customerId")
  join "rentals" using ("rentalId")
  group by "c"."firstName",
           "c"."lastName"
  order by "totalAmount" desc;
