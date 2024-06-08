#! /usr/bin/env node
import inquirer from "inquirer";

let c_Value : {[key:string] : number}={
    PKR :278.40,
    UAE :3.67,
    USD :1,
}
let ans = await inquirer.prompt([{
    type:"list",
    name:"from",
    message:"converting from",
    choices:["PKR","UAE","USD"]

},
{
    type:"list",
    name:"to",
    message:"converting to",
    choices:["PKR","UAE","USD"]

},
{
    type:"number",
    name:"amount",
    message:"Your amount to convert"
}

])

console.log(c_Value[ans.to]/ c_Value[ans.from]*ans.amount);
