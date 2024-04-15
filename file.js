import inquirer from "inquirer";
let totalBalance = 10000;
const pinNumber = 1133;
let pinEnter = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number: ",
        type: "number",
    }
]);
//console.log(pinEnter.pin)
if (pinEnter.pin === pinNumber) {
    let atmQuestions = await inquirer.prompt([
        {
            name: "accountType",
            message: "Select your account type: ",
            type: "list",
            choices: [
                "current account",
                "saving account",
                "default"
            ]
        },
        {
            name: "transMethod",
            message: "select your transcation method: ",
            type: "list",
            choices: [
                "cash withdrawal",
                "fast cash",
                "check balance"
            ]
        }
    ]);
    if (atmQuestions.transMethod === "cash withdrawal") {
        let cashwithdrawalAmount = await inquirer.prompt([
            {
                name: "withdrawal",
                message: "Enter amount to withdraw:",
                type: "number",
            }
        ]);
        //Greater than or equal to operator
        if (totalBalance >= cashwithdrawalAmount.withdrawal) {
            totalBalance -= cashwithdrawalAmount.withdrawal;
            console.log(`your total balacne is: ${totalBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    if (atmQuestions.transMethod === "check balance") {
        console.log(`your total balacne is: ${totalBalance}`);
    }
    else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select amount to withdraw: ",
                type: "list",
                choices: [
                    "2000", "3000",
                    "10000", "5000",
                ]
            }
        ]);
        if (totalBalance >= fastCashAmount.fastcash) {
            totalBalance -= fastCashAmount.fastcash;
            console.log(`Your total balance is: ${totalBalance}`);
        }
        else {
            console.log("Insufficeint balance");
        }
    }
}
