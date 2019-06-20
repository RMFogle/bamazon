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
      askQuestions(); 
}); 

// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
var askQuestions = function() {
  inquirer
  .prompt([
    {
      name: "productID", 
      type: "input", 
      message: "Enter the Id of the product you want to buy",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true; 
        }
        return false; 
      }
    }, {
      name: "productQuantity",
      type: "input", 
      message: "How many units do you want to buy?", 
      validate: function(value) {
        if (isNaN(value) === false) {
          return true; 
        }
        return false; 
      }
    }]).then(function(answer) {

      // Parses through database for desired product. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
      var query = "Select stock_quantity, price, department_name, product_name FROM products WHERE ?"; 
      connection.query(query, { item_id: answer.productID}, function(err, res) { 

        if (err) throw err; 

        var available_stock = res[0].stock_quantity; 
        var price_per_unit = res[0].price; 

        // Checks inventory 

        if (available_stock >= answer.productQuantity) {

          // Processes request to finish purchase 

          finishPurchase(available_stock, price_per_unit, answer.productID, answer.productQuantity); 

        } else {
                  console.log("Insufficient quantity!")

                  askQuestions(); 

        }
      }); 
    }); 
}; 

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
var finishPurchase = function(availableStock, price, selectedProductID, selectedProductQuantity) {
    // Update stock qty after purchase is finished 
    var updateStock = availableStock - selectedProductQuantity; 
    // Calculates total price for purchase 
    var totalPrice = price * selectedProductQuantity; 
    // updates stock qty on the mysql database 
    var query = "UPDATE products SET ? WHERE ?"; 
    connection.query(query, [{
      stock_quantity: updateStock
    }, {
      item_id: selectedProductID 
    }], function(err, res) {

            if (err) throw err; 
            console.log("Your purchase is complete!"); 

            console.log("Your total amount is: " + totalPrice); 

    }); 
}; 

}