# SpendWise - Week 6

## Project Description

SpendWise is a personal budgeting application that helps users record, manage, and monitor their daily expenses. This week's update makes the application interactive using JavaScript.

## Improvements Made

The following improvements were made to SpendWise:

* Added an interactive expense form.
* Added the ability to add expenses.
* Added the ability to delete individual expenses.
* Added a button to clear all expenses.
* Added automatic calculation of total spending.
* Added automatic calculation of the remaining budget.
* Added budget status feedback.
* Added dynamic display of expense records.
* Added responsive interaction between the user interface and JavaScript.

## Conditionals

Conditional statements are used to evaluate the user's spending. SpendWise checks whether the user is within the budget, close to the budget limit, or over the budget.

## Arrays

An array is used to store multiple expense records. Each expense is stored as an object containing the expense name, category, and amount.

## Loops

Loops are used to process the expense array. The application uses a loop to calculate the total amount spent and another loop to display the expense records on the webpage.

## DOM Manipulation

The DOM is updated dynamically using JavaScript. The application changes the total spent, remaining budget, budget status, and expense list directly on the webpage.

## Events

Event listeners are used to respond to user actions. The expense form listens for submit events, while the clear button listens for click events.

## Challenges and Solutions

One challenge was connecting the expense data to the dashboard dynamically. This was solved by storing expenses in an array and creating functions that calculate totals and update the DOM whenever the data changes.

Another challenge was preventing invalid expense information from being submitted. Conditional statements were used to validate the user's input before adding an expense to the array.
