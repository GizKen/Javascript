// SpendWise Budget
const budget = 50000;

// Array for storing expense records
let expenses = [];

// Get HTML elements
const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseCategory = document.getElementById("expenseCategory");
const expenseAmount = document.getElementById("expenseAmount");

const expenseList = document.getElementById("expenseList");
const totalSpentElement = document.getElementById("totalSpent");
const remainingElement = document.getElementById("remaining");
const budgetStatusElement = document.getElementById("budgetStatus");
const messageElement = document.getElementById("message");
const clearExpensesButton = document.getElementById("clearExpenses");


// Add expense when the form is submitted
expenseForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    const name = expenseName.value.trim();
    const category = expenseCategory.value;
    const amount = Number(expenseAmount.value);

    // Conditional statement for validating input
    if (name === "" || category === "" || amount <= 0) {
        messageElement.textContent = "Please enter valid expense information.";
        return;
    }

    // Create an expense object
    const expense = {
        name: name,
        category: category,
        amount: amount
    };

    // Add the expense to the array
    expenses.push(expense);

    // Update the dashboard
    updateDashboard();

    // Show success message
    messageElement.textContent = "Expense added successfully.";

    // Clear the form
    expenseForm.reset();
});


// Calculate total expenses
function calculateTotal() {

    let total = 0;

    // Loop through the expense array
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// Update dashboard
function updateDashboard() {

    const totalSpent = calculateTotal();
    const remaining = budget - totalSpent;

    // Update dashboard numbers
    totalSpentElement.textContent = `KSh ${totalSpent.toLocaleString()}`;
    remainingElement.textContent = `KSh ${remaining.toLocaleString()}`;

    // Conditional budgeting decisions
    if (totalSpent > budget) {

        budgetStatusElement.textContent = "Over Budget";
        messageElement.textContent = "Warning: You have exceeded your budget.";

    } else if (totalSpent >= budget * 0.8) {

        budgetStatusElement.textContent = "Almost Over Budget";

    } else {

        budgetStatusElement.textContent = "Good";
    }

    // Display expense records
    displayExpenses();
}


// Display expenses on the webpage
function displayExpenses() {

    // Clear existing list
    expenseList.innerHTML = "";

    // Check whether the array is empty
    if (expenses.length === 0) {

        expenseList.innerHTML =
            '<p class="empty-message">No expenses recorded yet.</p>';

        return;
    }

    // Loop through the expenses
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const expenseItem = document.createElement("div");

        expenseItem.className = "expense-item";

        expenseItem.innerHTML = `
            <div class="expense-info">
                <h3>${expense.name}</h3>
                <p>${expense.category}</p>
            </div>

            <div>
                <span class="expense-amount">
                    KSh ${expense.amount.toLocaleString()}
                </span>

                <button
                    class="delete-btn"
                    onclick="deleteExpense(${i})">
                    Delete
                </button>
            </div>
        `;

        expenseList.appendChild(expenseItem);
    }
}


// Delete one expense
function deleteExpense(index) {

    expenses.splice(index, 1);

    updateDashboard();

    messageElement.textContent = "Expense deleted.";
}


// Clear all expenses
clearExpensesButton.addEventListener("click", function() {

    if (expenses.length === 0) {
        messageElement.textContent = "There are no expenses to clear.";
        return;
    }

    expenses = [];

    updateDashboard();

    messageElement.textContent = "All expenses have been cleared.";
});


// Display initial dashboard
updateDashboard();