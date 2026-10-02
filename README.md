
# SpendWise - JavaScript Foundation

SpendWise is a simple budget and expense tracking application built using HTML, CSS, and JavaScript.

The project demonstrates fundamental JavaScript concepts including variables, data types, user input, calculations, functions, and displaying results in the browser console.

## Project Purpose

The purpose of SpendWise is to help users calculate their remaining budget after entering their total budget and expenses.

The application uses JavaScript to collect information from the user, perform calculations, and display the results.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## JavaScript Concepts Implemented

### 1. Variables

The application uses variables to store important budgeting information.


let budget = 0;
let expenses = 0;
let remainingBalance = 0;


The `budget` variable stores the user's total budget.

The `expenses` variable stores the user's total expenses.

The `remainingBalance` variable stores the amount remaining after expenses have been deducted from the budget.

### 2. User Input

SpendWise collects information from the user using JavaScript's `prompt()` function.


let budgetInput = prompt("Enter your monthly budget in KES:");
```

The user is asked to enter their monthly budget and total expenses.

Since values collected using `prompt()` are strings, they are converted into numbers using `Number()`.


budget = Number(budgetInput);
expenses = Number(expensesInput);


### 3. Calculations

SpendWise calculates the remaining balance by subtracting expenses from the budget.

remainingBalance = calculateBalance(budget, expenses);

The calculation is:

Remaining Balance = Budget - Expenses

For example
Budget = KES 50,000
Expenses = KES 15,000

Remaining Balance = 50,000 - 15,000
Remaining Balance = KES 35,000


### 4. Functions

Functions are used to organize the JavaScript code and make the application easier to manage.

The main budget calculation function is:


function calculateBalance(budget, expenses) {
    return budget - expenses;
}

This function receives the budget and expenses as parameters and returns the remaining balance.

The project also uses a function called `formatCurrency()` to format amounts as Kenyan Shillings.

function formatCurrency(amount) {
    return "KES " + amount.toLocaleString();
}

The `startSpendWise()` function controls the main application process.

It:

1. Collects the user's budget.
2. Collects the user's expenses.
3. Converts the input into numbers.
4. Validates the input.
5. Calculates the remaining balance.
6. Displays the results.

### 5. Console Output

The calculated results are displayed in the browser console.

Example:

========== SpendWise ==========
Monthly Budget: KES 50,000
Total Expenses: KES 15,000
Remaining Balance: KES 35,000
===============================
```

To view the console:

1. Open the SpendWise webpage.
2. Right-click anywhere on the page.
3. Select "Inspect".
4. Open the "Console" tab.

## How to Run the Project

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Click the "Start Budget Calculation" button.
5. Enter your monthly budget.
6. Enter your total expenses.
7. View the calculated results on the webpage.
8. Open the browser console to see the clearly labelled JavaScript output.

## Example

If the user enters:

```text
Monthly Budget: 50000
Total Expenses: 15000
```

SpendWise calculates:

```text
Remaining Balance: 35000
```

## Project Files

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Learning Outcome

This project demonstrates how JavaScript can be used to add functionality and interactivity to a webpage.

The application demonstrates:

* JavaScript variables
* Numbers and strings
* User input
* Type conversion
* Arithmetic calculations
* Functions
* Function parameters
* Return values
* Conditional validation
* Browser console output
* DOM manipulation
* Event listeners



