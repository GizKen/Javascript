
// ========================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// ========================================

// Variables for budget-related information
let budget = 0;
let expenses = 0;
let remainingBalance = 0;

// Function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Function to format money
function formatCurrency(amount) {
    return "KES " + amount.toLocaleString();
}

// Function to run the SpendWise application
function startSpendWise() {

    // Collect budget from the user
    let budgetInput = prompt("Enter your monthly budget in KES:");

    // Check if the user cancelled the prompt
    if (budgetInput === null) {
        console.log("SpendWise: Calculation cancelled.");
        return;
    }

    // Convert user input from string to number
    budget = Number(budgetInput);

    // Collect expenses from the user
    let expensesInput = prompt("Enter your total expenses in KES:");

    // Check if the user cancelled the prompt
    if (expensesInput === null) {
        console.log("SpendWise: Calculation cancelled.");
        return;
    }

    // Convert user input from string to number
    expenses = Number(expensesInput);

    // Validate the user input
    if (
        Number.isNaN(budget) ||
        Number.isNaN(expenses) ||
        budget < 0 ||
        expenses < 0
    ) {
        console.log("SpendWise: Please enter valid positive numbers.");
        return;
    }

    // Calculate the remaining balance
    remainingBalance = calculateBalance(budget, expenses);

    // Display results in the browser console
    console.log("========== SpendWise ==========");
    console.log("Monthly Budget: " + formatCurrency(budget));
    console.log("Total Expenses: " + formatCurrency(expenses));
    console.log("Remaining Balance: " + formatCurrency(remainingBalance));
    console.log("===============================");

    // Display results on the webpage
    document.getElementById("budgetDisplay").textContent =
        formatCurrency(budget);

    document.getElementById("expensesDisplay").textContent =
        formatCurrency(expenses);

    document.getElementById("balanceDisplay").textContent =
        formatCurrency(remainingBalance);
}

// Connect the button to the JavaScript function
document.getElementById("startButton").addEventListener(
    "click",
    startSpendWise
);

