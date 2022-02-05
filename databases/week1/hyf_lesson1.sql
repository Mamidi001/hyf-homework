
-- get the table
SELECT * 
FROM task;

--how many tasks are in the task table
SELECT COUNT(title) 
FROM task
WHERE due_date is NULL;

-- count of do not have valid date
FROM task
SELECT COUNT(id) 
WHERE due_date is NULL;

--all the tasks that are marked as done
SELECT task.title, 
status.name
FROM task JOIN status on task.status_id = status.id 
WHERE status.name LIKE'Done';

-- all the tasks that are not marked as done
SELECT task.title, 
status.name
FROM task JOIN status on task.status_id <> status.id 
WHERE status.name NOT LIKE'Done';

--sorted with the most recently created first
SELECT task.created 
FROM task
ORDER BY task.created DESC;

-- single most recently created task
SELECT title, task.created 
FROM task
ORDER BY created DESC
LIMIT 1;

--Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date 
FROM task 
WHERE title LIKE'%DATABASE%' OR description LIKE'% DATABASE%';

--Get the title and status (as text) of all tasks
SELECT 
  task.title ,
  status.name
FROM
  task
  JOIN status ON task.status_id = status.id;

  --Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.id)
FROM status
JOIN task ON status.id = task.status_id
GROUP BY status.name;

--Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.id) 
FROM task
INNER JOIN status ON status.id= task.status_id
GROUP BY status_id
ORDER BY status_id, COUNT(task.id) DESC;
