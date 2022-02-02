SELECT * -- get the table
FROM task;
SELECT COUNT(title) --how many tasks are in the task table
FROM task;
SELECT COUNT(id) -- count of do not have valid date
FROM task
WHERE due_date is NULL;
SELECT task.title, --all the tasks that are marked as done
status.name
FROM task JOIN status on task.status_id = status.id 
WHERE status.name LIKE'Done';
SELECT task.title, -- all the tasks that are not marked as done
status.name
FROM task JOIN status on task.status_id <> status.id 
WHERE NOT status.name LIKE'Done';
SELECT task.created --sorted with the most recently created first
FROM task
ORDER BY task.created DESC;
SELECT title, task.created -- single most recently created task
FROM task
ORDER BY created DESC
LIMIT 1;
SELECT title, due_date --Get the title and due date of all tasks where the title or description contains database
FROM task 
WHERE title LIKE'%DATABASE%' OR description LIKE'% DATABASE%';
SELECT --Get the title and status (as text) of all tasks
  task.title ,
  status.name
FROM
  task
  JOIN status ON task.status_id = status.id;
SELECT status.name, COUNT(task.id)--Get the name of each status, along with a count of how many tasks have that status
FROM status
JOIN task ON status.id = task.status_id
GROUP BY status.name;
SELECT status.name, COUNT(task.id) --Get the names of all statuses, sorted by the status with most tasks first
FROM task
INNER JOIN status ON status_id= task.status_id
GROUP BY status.name
ORDER BY status.name, COUNT(task.id) ASC;
