use hyf_lesson2;
SELECT *
FROM task;
SELECT*
from status;

--part 1

--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES("shopping", 'by a car', now(), now(),now(),'2');

--Change the title of a task
UPDATE task
SET title = 'cancel shopping'
WHERE id = 36;

--Change a task due date
update task
SET due_date = '2022-02-10'
WHERE id = 36;

--Change a task status
update task
SET status_id = '2'
WHERE id = 36;

--Mark a task as complete
update task
SET status_id = '3'
WHERE id = 36;

--mark status is done without id

SELECT 
count(task.id), user.name, status.name
FROM
status
join task ON status_id = task.status_id
 JOIN user_task on task.id = user_task.task_id
  JOIN user ON user.id = user_task.user_id
WHERE
  status.name = "Done"
GROUP BY
  user.name;

--Delete a task
DELETE FROM task
WHERE id =36;

--More Queries
  --part3
  --Get all the tasks assigned to users whose email ends in @spotify.com
  use hyf_lesson2;
  SELECT task.title, user.email
  FROM task
  JOIN user_task ON task.id = user_task.task_id
  JOIN user ON user_task.user_id = user.id
  WHERE user.email LIKE'%@spotify.com';

--Get all the tasks for 'Donald Duck' with status 'Not started'
-- somehow it is not showing any output
use hyf_lesson2;
SELECT task.title,user.name AS user, status.name as status 
FROM task
JOIN status ON task.status_id = status.id 
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id 
WHERE user.name ='Donald Duck' AND status.name = 'Not started';

--Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT task.title, task.created, user.name
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' AND MONTH(created)=09;
--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc.
SELECT COUNT(task.title), MONTH(created)
FROM task
GROUP BY MONTH(created);
