-- Create database

DROP DATABASE IF EXISTS ice_dude;
CREATE DATABASE ice_dude;
USE ice_dude;

-- Creating new tables

-- Table for Users
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Phone INT NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL
);

-- Table for Ice Cream item 
CREATE TABLE IceCream (
    IceCreamID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    IceCreamCategoryID INT NOT NULL,
    IceCreamName VARCHAR(255) NOT NULL,
    IceCreamDescription VARCHAR(255) NOT NULL,
    IceCreamPrice DECIMAL(8, 2) NOT NULL,
    PRIMARY KEY (IceCreamID),
    FOREIGN KEY (IceCreamCategoryID) REFERENCES IceCreamCategory(IceCreamCategoryID);
    -- TODO: add image file
);


-- Table for Ice Cream Category
CREATE TABLE IceCreamCategory (
    IceCreamCategoryID INT PRIMARY KEY AUTO_INCREMENT,
    IceCreamCategoryName VARCHAR(255) NOT NULL,
    IceCreamCategoryDescription VARCHAR(255) NOT NULL
);


-- Table for Orders
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    UserID INT,
    OrderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Table for Cart
CREATE TABLE Cart (
    CartID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    OrderID INT NOT NULL,
    IceCreamID INT NOT NULL,
    Quantity INT NOT NULL,
    CONSTRAINT positive_quantity CHECK (Quantity > 0),
    PRIMARY KEY (CartID),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (IceCreamID) REFERENCES IceCream(IceCreamID)
);

-- Ice Cream Comments
CREATE TABLE IceCream_Comments (
    CommentID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    IceCreamID INT,
    Comment VARCHAR(255) NOT NULL,
    CommentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (IceCreamID) REFERENCES IceCream(IceCreamID)
); 



-- Adding mock database data

-- Mock data for IceCreamCategory
INSERT INTO IceCreamCategory (IceCreamCategoryName, IceCreamCategoryDescription)
VALUES 
('Ice Cream Cone', 'Mmmmm.. Coney Ice Cream'), 
('Ice Cream Stick', 'Mmmmm.. Ice Cream Stick'), 
('Ice Cream Cup', 'Mmmmm.. Ice Cream Cup'), 
('Ice Cream Sandwich', 'Mmmmm.. Ice Cream Sandwich'), 
('Ice Cream Bar', 'Mmmmm.. Ice Cream Bar');

-- Mock data for Users
-- Note: You need to replace 'username' and 'password' with the actual columns in your Users table
INSERT INTO Users (username, password)
VALUES 
('user1', 'password1'), 
('user2', 'password2');

-- Mock data for Orders
INSERT INTO Orders (UserID)
SELECT UserID FROM Users;

-- Mock data for IceCream
-- Note: You need to replace 'IceCreamName', 'IceCreamDescription', and 'IceCreamCategoryID' with the actual columns in your IceCream table
INSERT INTO IceCream (IceCreamName, IceCreamDescription, IceCreamPrice, IceCreamCategoryID)
VALUES 
('Blueberry Ice Cream', 'Ice Cream with blueberry taste', 2.80, 1), 
('Carrot Ice Cream', 'Mmmm... Carrot Ice', 2.90,  2);

-- Mock data for Cart
INSERT INTO Cart (OrderID, IceCreamID, Quantity)
SELECT OrderID, IceCreamID, 1 FROM Orders, IceCream;

-- Mock data for IceCream_Comments
-- Note: You need to replace 'CommentText' with the actual column in your IceCream_Comments table
INSERT INTO IceCream_Comments (UserID, IceCreamID, CommentText)
SELECT UserID, IceCreamID, 'This is a comment' FROM Users, IceCream;



-- Querying data

-- Query data
-- Get all ice creams in a specific category
SELECT * FROM IceCream WHERE IceCreamCategoryID = 1;

-- Update data
-- Update the price of a specific ice cream
UPDATE IceCream SET IceCreamPrice = 6.99 WHERE IceCreamID = 1;

-- Delete data
-- Delete a specific ice cream
DELETE FROM IceCream WHERE IceCreamID = 1;