#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Kindly Enter Your Name"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Raven", "Ikonic", "Striker"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Raven") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run To Save Your Life!!!"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            // console.log(`${chalk.red(num)}`);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.blue(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.blue(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.blue.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drank Health Portion Now Your Fuel
            is ${p1.fuel}`));
        }
        ;
        if (ask.option == "Run To Save Your Life!!!") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
        ;
    }
    ;
    if (opponent.select == "Ikonic") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run To Save Your Life!!!"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            // console.log(`${chalk.red(num)}`);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.blue(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.blue(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.blue.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drank Health Portion Now Your Fuel
            is ${p1.fuel}`));
        }
        ;
        if (ask.option == "Run To Save Your Life!!!") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
        ;
    }
    ;
    if (opponent.select == "Striker") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run To Save Your Life!!!"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            // console.log(`${chalk.red(num)}`);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.blue(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.blue(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.blue.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drank Health Portion Now Your Fuel
            is ${p1.fuel}`));
        }
        ;
        if (ask.option == "Run To Save Your Life!!!") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
        ;
    }
    ;
} while (true);
