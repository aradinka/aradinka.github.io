---
title: "code-sql"
tags:
- all-post
enableToc: false
---

## Manipulation

### Create a table with column constraints

```sql
CREATE TABLE table_name (
	-- Uniquely identify the row
	id INTEGER PRIMARY KEY,
	
	-- Columns have a different value for every row 
	name TEXT UNIQUE
	
	-- Columns must have a value
	grade INTEGER NOT NULL
	
	-- Assigns a default value when no value is specified
	age INTEGER DEFAULT 10
);
```

### `INSERT` statement

```sql
-- Insert into columns in order
INSERT INTO table_name
VALUES (value1, value2);

-- Insert into columns by name
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

### `ALTER TABLE` statement

```sql
-- Modify the columns of an existing table
-- When combined with ADD clause, it used to add a new column
ALTER TABLE table_name
ADD column_name datatype;
```

### `DELETE` statement

```sql
-- Delete records (rows) in table
-- WHERE clause specifies which records that should be deleted
-- If WHERE clause omitted, all records will be deleted
DELETE FROM table_name
WHERE some_column = some_value;
```

### `UPDATE` statement

```sql
-- Edit records (rows) in table
-- It includes a SET clause that indicate the column to edit
-- and a WHERE clause for specifying the records
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE some_column = some_value;
```


## Reference

- https://www.codecademy.com/learn