---
title: "code-sql"
tags:
- all-post
enableToc: false
---

SQL is the programming language used with databases


## Summary

```sql

-- functions
REPEAT('@', 10) UPPER() LOWER()
CURDATE() DAY(CURDATE()) NOW()
LENGHT('str') CHARACTER_LENGHT('str') CHAR_LENGHT('str')
CONCAT('Hello '. 'world')
REVERSE('abc') -- result: cba
REPLACE('Hi my name is Firman', 'Firman', 'Azka') -- replace 'Firman' with 'Azka'
LTRIM('    Azka      ') -- remove all spaces on the left
RTRIM('    Azka      ') -- remove all spaces on the right
TRIM('    Azka      ') -- remove all spaces on the left and right
POSITION('Azka' in 'My name is Azka') -- result: 12
ASCII('a') -- result: ascii value of a, let say 97

-- aggregate
SUM() MAX() MIN() AVG() COUNT(*) COUNT(col)

SELECT * DISTINCT COUNT(col) (10-5) AS
FROM table_name
GROUP BY col1, col2
HAVING condition
ORDER BY col DESC
LIMIT 5 OFFSET 2

WHERE BETWEEN, IN ('a', 'b'), NOT IN ('a', 'b'), IS NULL, IS NOT NULL, ABS()

```

### Schema

```sql
-- add new rows
INSERT INTO table_name
VALUES (val1, val2)
-- update row data
UPDATE table_name
SET column = value_or_expr,
	other_col = value_or_expr
WHERE condition -- specified the row here
-- deleting rows
DELETE FROM table_name
WHERE condition

-- creating table
CREATE TABLE IF NOT EXISTS table_name (
	column1 DataType TableConstraint DEFAULT default_val,
	column2 DataType TableConstraint DEFAULT default_val
)
-- example
CREATE TABLE movies ( 
	id INTEGER PRIMARY KEY, 
	title TEXT, 
	director TEXT, 
	year INTEGER, 
	length_minutes INTEGER 
)
-- data type
INTEGER, BOOLEAN, FLOAT, DOUBLE, REAL
CHARACTER(num_chars), VARCHAR(num_chars), TEXT
DATE, DATETIME
BLOB
-- constraint
PRIMARY KEY
AUTOINCREMENT
UNIQUE
NOT NULL
CHECK (expression)
FOREIGN KEY
```

Data types:
- `BOOLEAN` (0/1)
- `REAL` (4 bytes / 7 digits precision)
- `FLOAT` (8 bytes / 15 places after decimal)
- `DOUBLE` similar to `FLOAT` but it allows for much larger numbers
- `BLOB` store binary data

Constraint:
- `AUTOINCREMENT`: The value is automatically filled in and incremented with each row insertion
- `UNIQUE`: Values in the column should be unique. It doesn't have to be a key for a row in the table
- `CHECK (expression)`: check that value is positive or greater then or started with certain prefix


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


## MySQL

### Explore Databases

```mysql
show databases;

use database_name;
show tables;
select * from city;
describe city;
```


### Create  a Table

```mysql
create database database_name;
create table table_name (Name varchar(25), Age int, Gender char(1), tanggal date, salary float)

insert into table_name
values("Azka", 22, "M", "2022-03-12", 7000000)
```


## Reference

- https://www.codecademy.com/learn
