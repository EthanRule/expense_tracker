# expense_tracker

roadmap.sh backend CLI beginner project
project_url: https://roadmap.sh/projects/expense-tracker

In this project I built a simple CLI application for users to track their expenses.
On the main.ts file you will see code that handles input validation and argument
parsing.

Then on the expense_tracker.ts file you will see interfaces and enums for different
data types used. The main interface being the Expense interface. Then the ExpenseTracker
class holds a map of Expenses with the keys being ids. These Ids are generated from
finding the maximum current Id and adding 1. Then there is add, update, and delete logic.
These are pretty straight forward, this is just adding updating and deleting expenses.
Then there are view functions that log differing types of summaries. There could be
future improvements and this could could be more robust and exendable. But for the scope
of this project, it didnt seem nessisary.

Things I would consider in the future would be making Expense its own class and have a
budget class that checks the budget anytime an expense amount changes. This could be done
using some sort of event system with publishers and subscribers. Additionally with the input
validation being so verbose, its possibe to break down the input validation and retreival
logic into its own abstract class acting as an interface between the CLI entry point and the
ExpenseTracker class.

Finally some additional things I implemented were some basic tests using jest for the
ExpenseTracker functions.
