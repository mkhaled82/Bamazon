
CREATE DATABASE bamazon;
USE bamazon;


CREATE TABLE products (
  item_id int(11) NOT NULL AUTO_INCREMENT,
  product_name varchar(45) NOT NULL,
  department_name varchar(45) NOT NULL,
  price decimal(10,4) NOT NULL,
  stock_quantity int(10) NOT NULL,
  PRIMARY KEY (item_id)
  );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Milk", "Dairy", 3.99, 359);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Eggs", "Dairy", 2.85, 478);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Ground Beef", "Meats", 5.99, 275);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Apples", "Produce", 1.20, 285);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Carrots", "Produce", 1.15, 140);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Ice Cream", "Frozen", 4.99, 590);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Bagels", "Bakery", 2.69, 280);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Cookies", "Bakery", 1.99, 190;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Shrimp", "Seafood", 8.99, 65);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Tilapia", "Seafood", 6.99, 90);

