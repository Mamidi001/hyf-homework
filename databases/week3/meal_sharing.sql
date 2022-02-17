CREATE DATABASE hyf_lesson3
    DEFAULT CHARACTER SET = 'utf8mb4';
    use hyf_lesson3;
    CREATE TABLE `meal` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `location` VARCHAR(255) NULL,
  `when` DATETIME,
  `max_reservations` INT(10) NOT NULL,
  `price` DECIMAL NOT NULL,
  `created_date` DATE NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `reservation`(
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(10) NOT NULL,
  `created_date`DATE NULL,
  `phone_number`VARCHAR(20) NULL,
  `contact_name`VARCHAR(20) NOT NULL,
  `email`VARCHAR(30) NOT NULL,
  `meal_id`int(10) UNSIGNED NOT NULL,
  CONSTRAINT `FK_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON 
  DELETE CASCADE ON UPDATE CASCADE
  )ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
  CREATE TABLE `review`(
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `stars`int NOT NULL,
   `meal_id`int(10) UNSIGNED NOT NULL,
   `created_date`DATE NULL,
  CONSTRAINT `FK_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON 
  DELETE CASCADE ON UPDATE CASCADE
  )ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
INSERT INTO
meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES('pizza', 'nice', 'glostrup', '2022-01-20', '10','70','2022-02-11'),
('pasta', 'yummy', 'cph', '2021-01-20', '20','60','2021-04-21'),
('lasgna', 'nice', 'fredriksberg', '2021-04-22', '20','90','2022-02-11'),
('Tiramisu', 'delecious', 'italy', '2022-01-20', '10','70','2022-02-11');
INSERT INTO
reservation(`number_of_guests`, `created_date`, `phone_number`,`contact_name`, `email`, `meal_id`)
VALUES('15', '2022-02-15', '87234393', 'amrit','amrit@gmail.com','2'),
('25', '2022-02-16', '8724567993', 'chunmei','chunmei@gmail.com','3');
INSERT INTO review (`title`, `description`,`stars`,`meal_id`,`created_date`)
VALUES ('bestever','creamy pasta but i dnt like ','3','2','2022-02-12'),
('defenitely recommended','for coffee lovers','5','4','2022-02-11'),
('notrecommended','not satisfied to my taste buds ','1','2','2022-02-10');

----Get all meals
SELECT*
FROM meal;

--Add a new meal
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES('salad', 'not_good', 'roskilde', '2022-01-2', '30','50','2022-02-1'),
('rød grød med fløde',
    'delicious food',
    'copenhagen',
    '2022-10-20 06:54:16',
    10,
    159.00,
    '2021-10-15 07:45:16');

--Get a meal with any id, fx 1
SELECT meal.title FROM meal WHERE id=4;

--Update a meal with any id, fx 1.
UPDATE meal SET meal.title = 'greenSalad' WHERE meal.id = 9;
UPDATE meal SET meal.id = 5  WHERE meal.id = 9;
--Update any attribute fx the title or multiple attributes
UPDATE meal set title = 'øko salad',
description = 'fresh and hand plucked'
WHERE id = 5;

--Delete a reservation with any id, fx 1
DELETE FROM meal WHERE id=5;
--reservation
--get all reservation
SELECT *
FROM reservation;
--add a new reservation
INSERT INTO
reservation
VALUES(4,10,'2022-02-17',456789,'asdf','asdf@gmail.com',2);

--get a reservation with any id, fx 1
SELECT
id, contact_name, email, number_of_guests
FROM
reservation
WHERE id = 3;
--update a reservation with any id
UPDATE reservation SET contact_name = 'zeff' WHERE id = 6;



--Additional queries
--Get meals that has a price smaller than a specific price fx 90

SELECT price, meal.title from meal WHERE price<70;

--Get meals that still has available reservations
--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE
title LIKE '%rød grøn med%';

--Get meals that has been created between two dates
SELECT * from meal
WHERE created_date >=2022-02-10 and 2022-02-15;

--Get only specific number of meals fx return only 5 meals
SELECT * from meal limit 2;

--Get the meals that have good reviews
SELECT  meal.title,review.stars from meal join review on meal.id = review.meal_id
WHERE review.stars = 5;

--Get reservations for a specific meal sorted by created_date
SELECT meal.title, reservation.created_date from meal
JOIN reservation ON meal.created_date = reservation.created_date
WHERE  ORDER BY created_date;

--Sort all meals by average number of stars in the reviews
SELECT * FROM review
WHERE stars > (SELECT AVG(stars) FROM review);