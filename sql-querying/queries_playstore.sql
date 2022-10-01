-- Comments in SQL Start with dash-dash --
-- 1
SELECT app_name FROM analytics WHERE id = '1880';
-- 2
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';
-- 3
SELECT category, count(app_name) FROM analytics GROUP BY category;
-- 4
SELECT app_name, reviews FROM analytics ORDER BY reviews DESC LIMIT 5;
-- 5
SELECT app_name, reviews FROM analytics WHERE rating >= 4.8 ORDER BY reviews DESC LIMIT 1;
-- 6
SELECT category, avg(rating) FROM analytics GROUP BY category ORDER BY avg(rating) DESC;
-- 7
SELECT app_name, price, rating FROM analytics WHERE rating <= 3 ORDER BY price DESC LIMIT 1;
-- 8
SELECT app_name FROM analytics WHERE min_installs < 51 AND RATING IS NOT NULL ORDER BY rating DESC LIMIT 1;
-- 9
SELECT app_name FROM analytics WHERE reviews > 10000 AND RATING < 3;
-- 10
SELECT app_name, reviews FROM analytics WHERE price BETWEEN .10 AND 1 ORDER BY reviews DESC LIMIT 10;
-- 11
SELECT app_name FROM analytics WHERE last_updated = (SELECT MIN(last_updated) FROM analytics);
-- 12
SELECT app_name, price FROM analytics WHERE price = (SELECT MAX(price) FROM analytics);
-- 13
SELECT count(reviews) AS "Review Total" FROM analytics;
-- 14
SELECT category, count(app_name) FROM analytics GROUP BY category HAVING count(app_name) > 300;
-- 15
SELECT app_name, reviews, min_installs, min_installs/reviews FROM analytics WHERE min_installs > 100000 ORDER BY min_installs/reviews DESC LIMIT 1;
