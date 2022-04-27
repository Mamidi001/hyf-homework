databases-week1

-- get the table
SELECT * 
FROM task;

--how many tasks are in the task table
SELECT COUNT(id) 
FROM task;

-- count of do not have valid due date

SELECT COUNT(id)
FROM task
WHERE due_date IS NULL;

--all the tasks that are marked as done
SELECT title, 
status.name
FROM task JOIN status on task.status_id = status.id 
WHERE status.name LIKE "%done%";

-- all the tasks that are not marked as done
SELECT title, 
status.name
FROM task JOIN status on task.status_id = status.id 
WHERE status.name NOT LIKE "%done%";

--sorted with the most recently created first
SELECT task.created 
FROM task
ORDER BY task.created DESC;


--Get all the tasks, sorted with the most recently created first
SELECT title, created 
FROM task
ORDER BY created DESC;
-- single most recently created task
SELECT title, created 
FROM task
ORDER BY created DESC
LIMIT 1;

--Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date 
FROM task 
WHERE title LIKE'%database%' OR description LIKE "%database%";

--Get the title and status (as text) of all tasks
SELECT 
  task.title ,
  status.name
FROM
  task
  JOIN status ON status.id = task.status_id ;

  --Get the name of each status, along with a count of how many tasks have that status
SELECT name, COUNT(task.id)
FROM status
JOIN task ON status.id = task.status_id
GROUP BY status.name;

--Get the names of all statuses, sorted by the status with most tasks first
SELECT name, COUNT(task.id) 
FROM status
JOIN task ON status.id= task.status_id
GROUP BY status.name
ORDER BY  COUNT(task.id) DESC;


