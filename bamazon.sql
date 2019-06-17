-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;
-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

CREATE TABLE products (
  -- Makes an numeric column called "item_id" (unique id for each product) 
  item_id INTEGER(10), 
  -- Makes a string column called "product_name" --
  product_name VARCHAR(30),
  -- Makes a sting column called "department_name" --
  department_name VARCHAR(30),
  -- Make a decimal column called "price" -- 
  price DECIMAL(10, 2) NULL,  
  -- Makes a numeric column called "stock_quantity" --
  stock_quantity INT NULL, 
  PRIMARY KEY (item_id)
);

USE bamazon_db;
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0010, "snare drum", "music", 554.99, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0011, "coffee mug", "kitchen", 9.99, 125);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0012, "baseball hat", "clothing accessories", 19.99, 250);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0013, "phone case", "phone accessories", 14.95, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0014, "wig", "costume", 44.95, 75);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0015, "shower towel", "bathroom", 22.95, 150);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0016, "travel bag", "travel cases", 39.95, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0017, "ice tray", "kitchen", 4.99, 800);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0018, "socks", "clothing", 14.95, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0019, "drum sticks", "music", 17.99, 750);