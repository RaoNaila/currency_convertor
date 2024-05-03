#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from"chalk"
console.log(chalk.red.bold("============ select your currency ==========="));

//variable

const currency:any = {

    USD:1,//base currency
    PKR:280,
    SR :77,
    EUR:0.91,
    INR:74.57,

};
let userAnswer = await inquirer.prompt(
    [
        {
            name:"from",
            message:"which currency you want to convert",
            type:"list",
            choices:["USD","PKR","SR","EUR","INR"] 
        },
        {
            name:"to",
            message:"select in which you want to convert",
            type:"list",
            choices:["USD","PKR","SR","EUR","INR"] 
        },
        {
            name:"amount",
            message:"Enter your amount",
            type:"number",
        }
    ]
);
let fromamount=currency[userAnswer.from];
let toamount=currency[userAnswer.to];
let amount =userAnswer.amount;
let baseAmount=amount/fromamount;
let convertedAmoount=baseAmount*toamount;
console.log(Math.round(convertedAmoount));



