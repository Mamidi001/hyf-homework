use school;
CREATE DATABASE school
    DEFAULT CHARACTER SET = 'utf8mb4';
    use school;
    CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begin_date` DATETIME,
  `end_date` DATETIME 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `Class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_Class` FOREIGN KEY (`Class_id`) REFERENCES `Class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE INDEX student_name ON Student(name);
ALTER TABLE
Class
Add
status ENUM('not-started', 'ongoing', 'finished');

insert into Class (name,begin_date, end_date, status) 
values ('swetha', '2022-02-23', '2020-04-20', 'done'),
('chunmei', '2020-01-10', '2021-01-10', 'processing'),
('suman', '2021-02-20', '2022-02-22','not started');
UPDATE Class
SET end_date= '2022-12-23' WHERE id = 1;
SELECT*
FROM Student;
INSERT INTO Student(name, email, phone,class_id)
VALUES('anas', 'anas@gmail.com', '1111', 1),
('amrit', 'amrit@gmail.com', '2222', 5),
('asma', 'asma@gmail.com', '3333', 3),
('negar', 'negar@gmail.com', '4444', 4);
UPDATE Student
SET email= 'negar001@gmail.com' WHERE Class_id = 4;


