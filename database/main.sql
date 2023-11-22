-- Create database

DROP DATABASE IF EXISTS ice_dude;
CREATE DATABASE ice_dude;
USE ice_dude;

-- Tables

-- Table for Users
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Phone INT NOT NULL,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Address VARCHAR(255),
    CONSTRAINT unique_username UNIQUE (Username),
    CONSTRAINT unique_email UNIQUE (Email)
);

-- Table for Ice Cream item 
CREATE TABLE IceCream (
    IceCreamID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    IceCreamCategoryID INT NOT NULL,
    IceCreamName VARCHAR(255) NOT NULL,
    Price DECIMAL(8, 2) NOT NULL
    -- TODO: add image file
);


-- Table for Ice Cream Category
CREATE TABLE IceCreamCategory (
    IceCreamCategoryID INT PRIMARY KEY AUTO_INCREMENT,
    IceCreamCategoryName VARCHAR(255) NOT NULL,
    IceCreamCategoryDescription VARCHAR(255) NOT NULL
    -- TODO: add image file
);


-- Table for Orders
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    UserID INT,
    OrderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Table for Cart
CREATE TABLE Cart (
    CartID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    OrderID INT NOT NULL,
    IceCreamID INT NOT NULL,
    Quantity INT NOT NULL,
    CONSTRAINT positive_quantity CHECK (Quantity > 0),
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