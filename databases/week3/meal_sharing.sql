CREATE DATABASE hyf_lesson3
    DEFAULT CHARACTER SET = 'utf8mb4';
    use hyf_lesson3;
    CREATE TABLE `meal` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `location` VARCHAR(255) NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` INT(10) NOT NULL,
  `price` DECIMAL(7,2) NOT NULL,
  `created_date` DATE NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `reservation`(
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(10) NOT NULL,
  `created_date`DATE NOT NULL,
  `phone_number`VARCHAR(20) NOT NULL,
  `contact_name`VARCHAR(20) NOT NULL,
  `email`VARCHAR(30) NOT NULL,
  `meal_id`int(10) UNSIGNED NOT NULL,
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON 
  DELETE CASCADE ON UPDATE CASCADE
  )ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
  CREATE TABLE `review`(
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `stars`int(10) NOT NULL,
   `meal_id`int(10) UNSIGNED NOT NULL,
   `created_date`DATE NULL,
   FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON 
  DELETE CASCADE ON UPDATE CASCADE
  )ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
INSERT INTO
meal (
  `title`,
 `description`, 
 `location`, 
 `when`, 
 `max_reservations`, 
 `price`, 
 `created_date`)
VALUES(
  'pizza',
 'nice with yummy cheese', 
 'glostrup', 
 '2022-01-20', 
 10,
 79,
 '2022-02-11'
 ),
('pasta',
 'yummy with tomato sauce', 
 'cph', 
 '2021-01-20', 
 20,
 60,
 '2021-04-21'
 ),
('lasgna',
 'creamy and nice',
  'fredriksberg', 
  '2021-04-22', 
  20,
  90,
  '2022-02-11'
  ),
('Tiramisu', 
'delecious', 
'italy', 
'2022-01-20', 
10,
70,
'2022-02-11'
),
('icecream', 
'loved', 
'valby', 
'2022-02-20', 
10,
70.5,
'2022-02-13'
);
UPDATE 
meal 
SET 
meal.title = 'greenSalad' 
WHERE 
meal.id = 9;
UPDATE meal
 SET 
 meal.id = 5  
 WHERE 
 meal.id = 9;
--Update any attribute fx the title or multiple attributes
UPDATE 
meal 
SET 
title = 'øko salad',
description = 'fresh and hand plucked'
WHERE id = 5;
INSERT INTO
reservation(
`number_of_guests`, 
`created_date`, 
`phone_number`,
`contact_name`, 
`email`,
 `meal_id`
 )
VALUES(
  15,
 '2022-02-15', 
 '87234393', 
 'amrit',
 'amrit@gmail.com',
 2
 ),
(25, 
'2022-02-16', 
'8724567993', 
'chunmei',
'chunmei@gmail.com',
3
),(
  5, 
'2022-02-17', 
'8724567393', 
'suman',
'suman@gmail.com',
3),(
10, 
'2022-02-18', 
'9824567993', 
'qais',
'qais@gmail.com',
1),
(
  20, 
'2022-02-19', 
'8735567993', 
'anas',
'anas@gmail.com',
5),
(
  18, 
'2022-02-20', 
'8724560965', 
'vahab',
'vahab@gmail.com',
4),
(3, 
'2022-02-21', 
'57869690', 
'marie',
'marie@gmail.com',
3),
;
INSERT INTO review (`title`, `description`,`stars`,`meal_id`,`created_date`)
VALUES (
'bestever',
'creamy pasta but i dnt like ',
3,
2,
'2022-02-12'
),(
'defenitely recommended',
'for coffee lovers',
5,
4,
'2022-02-11'
),
('notrecommended',
'not satisfied to my taste buds ',
1,
2,
'2022-02-13'
),
(
'notrecommended',
'not sgood ',
2,
3,
'2022-02-14'),
(
'superb',
'fully satisfied ',
4,
2,
'2022-02-17';

----Get all meals
SELECT*
FROM meal;

--Add a new meal
INSERT INTO meal (
  `title`, 
  `description`, 
  `location`, 
  `when`, 
  `max_reservations`, 
  `price`, 
  `created_date`
  )
VALUES(
  'salad', 
  'not_good', 
  'roskilde', 
  '2022-01-2', 
  30,
  50,
  '2022-02-1'
  ),
    (
      'rød grød med fløde',
    'delicious food',
    'copenhagen',
    '2022-10-20 06:54:16',
    10,
    159.00,
    '2021-10-15 07:45:16');

--Get a meal with any id, fx 1
SELECT title FROM meal WHERE id=4;

--Update a meal with any id, fx 1.
UPDATE
meal
SET
title= "cake"
where id = 1;

--Delete a reservation with any id, fx 1
DELETE FROM meal WHERE id=5;
--reservation
--get all reservation
SELECT *
FROM reservation;
--add a new reservation
INSERT INTO
reservation(
  number_of_guests,
  created_date,
  phone_number,
  contact_name,
  email,
  meal_id
)
VALUES(
  4,
  '2022-02-17',
  456789,
  'daniel',
  'daniel@gmail.com',
  2);

--get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id= 1;
--update a reservation with any id
UPDATE 
reservation 
SET 
contact_name = 'zeff' WHERE id = 7;

-- Delete a reservation with any id, fx 1
DELETE FROM
  reservation
WHERE
  id = 8;
  -- review table
  -- Get all reviews
 SELECT
  *
FROM
  review;
-- Add a new review
INSERT INTO
  review(title, description, stars, meal_id, created_date)
VALUES
  (
    "tiramisu",
    "creamy and sweet",
    4,
    4,
    "2021-02-01",
    
  );
-- Get a review with any id, fx 1
SELECT
  *
FROM
  review
WHERE
  id = 5;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  review
SET
  stars = 5
WHERE
  id = 3;
-- Delete a review with any id, fx 1
DELETE FROM
  review
WHERE
  id = 5;
--Additional queries
--Get meals that has a price smaller than a specific price fx 90

SELECT * FROM meal WHERE price < 70;

--Get meals that still has available reservations
select
  meal.title,
  meal.max_reservations,
  SUM(reservation.number_of_guests) as "Total guests",
  (
    meal.max_reservations - SUM(reservation.number_of_guests)
  ) as Available
FROM
  meal
  JOIN reservation ON reservation.meal_id = meal.id 
GROUP BY
  reservation.meal_id
  HAVING
  meal.max_reservations - sum(reservation.number_of_guests)>0;
  SELECT
  meal_id,
  number_of_guests
  FROM
  reservation
  WHERE
  meal_id=2;

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT title
FROM meal
WHERE
title LIKE '%rød grøn med%';

--Get meals that has been created between two dates
SELECT * from meal
WHERE created_date > "2022-02-10" AND created_date < "2022-02-15";

--Get only specific number of meals fx return only 5 meals
SELECT title from meal limit 2;

--Get the meals that have good reviews
SELECT  meal.title FROM meal JOIN review ON review.meal_id = meal.id 
WHERE stars = 5;

--Get reservations for a specific meal sorted by created_date
SELECT meal.title, meal.id, reservation.created_date FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE meal_id = 5 ORDER BY reservation.created_date;

--Sort all meals by average number of stars in the reviews
SELECT meal.title,round(AVG(review.stars)) FROM meal
JOIN review ON meal.id= review.meal_id
GROUP BY
meal.title
ORDER BY
round(AVG(review.stars));
