-- write your queries here
-- 1
SELECT * FROM owners FULL JOIN vehicles ON owners.id = vehicles.owner_id;
-- 2
SELECT first_name, last_name, count(*) FROM vehicles FULL JOIN owners o ON o.id = vehicles.owner_id GROUP BY o.id ORDER BY o.first_name ASC;
-- 3
SELECT first_name, last_name, avg(v.price), count(*) FROM vehicles v FULL JOIN owners o ON o.id = v.owner_id GROUP BY o.id HAVING avg(v.price) > 10000 AND count(*) > 1 ORDER BY o.first_name DESC;
