var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');
// instantiate
var table = new Table({
    head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Quantity']
  , colWidths: [10, 10, 10, 10, 10]
});

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"",
	database:"bamazon",

})

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
	displayTable();
});


var displayTable = function(){
	connection.query("SELECT * FROM products", function(err,res){
		for (var i=0; i<res.length; i++){
			table.push(
	 				[res[i].item_id, 
	 				res[i].product_name, 
	 				res[i].department_name, 
	 				res[i].price, 
	 				res[i].stock_quantity]
				);
		}
	
	console.log(table.toString());

	promptCustomer(res);

			
	})
}


var promptCustomer = function(res){
	inquirer.prompt([{
		type:'input',
		name:'choice',
		message:'What product would you like to buy? Enter product name.'
	}]).then(function(answer){
		for (var i=0; i<res.length; i++){
			if(res[i].product_name==answer.choice){
				var product=answer.choice;
				var id=i;
				//console.log(i);
				inquirer.prompt({
					type:'input',
					name:'quantity',
					message:'How many ' + product + ' would you like?'
				}).then(function(answer){
					console.log("You said you want to buy " + answer.quantity + " of the " + product);
					var query = connection.query(
						"UPDATE products SET ? WHERE ?",
						[
							{
								stock_quantity: res[id].stock_quantity-answer.quantity
							},
							{
								item_id: id+1
							}
						],
						function(err,res) {
							if (err) throw err;
							console.log("Items Purchased!!!");
							displayTable(res);
							console.log("=============================================================================")
							
						});
					//displayTable(res);

				})

			}
		}
	})

}









