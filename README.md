# bamazon app
Week-12 Node.js and MySQL Assignment 


The Bamazon app will take in orders from customers and deplete stock from the store's inventory.


How to Start:

    1. Clone the repo. 
    2. Run command npm install in GitBash or Terminal. 
    3. Run command node bamazonCustomer.js


Running bamazonCustomer.js will display all of the items available for sale followed
by a question 'Enter the ID of the product you want to buy' 

![Screenshot_1](images/Screenshot_1.png)


User enters the product ID# and hits enter 

![Screenshot_2](images/Screenshot_2.png)

A second question asks the user 'How many units do you want to buy?' User enters the number of units they would like to purchase. If it's more than what's in stock, the user will be notified 'Insufficient Quantity! and then the prompts reset.


![Screenshot_3](images/Screenshot_3.png)

...and then the prompts reset and you can enter the Id and qty again or shop for something different.

![Screenshot_4](images/Screenshot_4.png)

Issues: 
    Can't get the function to complete the purchase, update the SQL database to reflect the remaining qty, and display the total cost of     their purchase. 
    When the user enters in a qty thats less than what's in stock I recieve an error 'ER_BAD_FIELD_ERROR: Unknown column 'NaN' in 'field     list' 

![Screenshot_5](images/Screenshot_5.png)



Tech Used: 

    1. Node.js 
    2. MySQL Workbench 
    3. Node_Modules: inquirer, mysql 

Built With: 

    VS Code 

Authors: 

    Ryan Fogle 
