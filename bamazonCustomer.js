// node application 

var mysql = require("mysql"); 
var inquirer = require("inquirer"); 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "calvinKool2020$",
    database: "bamazon_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId); 
    displayItems(); 
  });

//Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

// Display All Items inside Database and sell an item to customer

var displayItems = function() {
  connection.query('SELECT * FROM products', function(err, res){
    if (err) throw err; 

      for (var i = 0; i < res.length; i++) {
        console.log("Product ID: " + res[i].item_id + "\t" + "Product Name: " + res[i].product_name + "\t" + "Department Name: " + res[i].department_name + "\t" + "Price: " + res[i].price + "\t" + "Stock Quantity: " + res[i].stock_quantity + "\n"); 
      }
}); 

// function askQuestions(length) {
//   inquirer 
//   .prompt([
//     {
//       type: "input", 
//       name: "purcase_item_id", 
//       message: "Enter the Id of the product you would like to buy? 'Press C to Exit'"
//     }
//   ])

// }






// The app should then prompt users with two messages.



// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.



// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.



// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.



// However, if your store does have enough of the product, you should fulfill the customer's order.


// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
}