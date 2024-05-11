import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 50000 //DOLLAR
let myPin = 301
let pinAnswer = await inquirer.prompt([{
    name: "pin",
    type: "number",
    message: "Enter your pin:"
}]);


if (pinAnswer.pin == myPin) {
    let operationAnswer = await inquirer.prompt(
        [
            {
                name: "operations",
                type: "list",
                message: "Plese select you operation:",
                choices: ["fast cash","withdraw", "check your balance","deposit cash" ]

            }

        ]
    );
    if (operationAnswer.operations == "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "ENTER YOUR AMOUNT:"

                }

            ]
        );

    console.log("YOUR REMAINING BALANCE IS:", myBalance - amountAns.amount);
    
    if (myBalance < amountAns.amount) {
        console.log(chalk.red(" insufficient balance! "))
    }
    }
 else if (operationAnswer.operations == "check your balance") {
        console.log(` Your balance is: ${myBalance} `)
    } else if (operationAnswer.operations == "fast cash") {
        let answersFastCash = await inquirer.prompt([{
            name: "fastCashAmount",
            type: "list",
            message: "ENTER YOUR FASTCASH AMOUNT:",
            choices: [5000,10000,15000,20000,2500]
        }]);

        console.log("Your remaining balance is:", myBalance - answersFastCash.fastCashAmount)
    }else if(operationAnswer.operations == "deposit cash"){
        let answerDepositAmount = await inquirer.prompt([{
              name:"depositAmount",
              type:"number",
              message:"Enter deposit amount"
        }]);
        console.log(chalk.green("My new balance is:", myBalance + answerDepositAmount.depositAmount));
    }

     else {
        console.log(chalk.red(" Incorrect pincode ! "));
    }
};
