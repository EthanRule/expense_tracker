export enum Category {
	food = "food",
	rent = "rent",
	clothes = "clothes",
	disposable = "disposable",
	undefined = "undefined",
}

export enum Month {
	January = "January",
	Febuary = "Febuary",
	March = "March",
	April = "April",
	May = "May",
	June = "June",
	July = "July",
	August = "August",
	September = "September",
	October = "October",
	November = "November",
	December = "December",
	Undefined = "undefined",
}

export interface Expense {
	description?: string;
	category?: Category;
	amount?: number;
	month?: Month;
}

export class ExpenseTracker {
	private expenses: Map<number, Expense> = new Map();
	private monthBudgets: Map<Month, number> = new Map();

	constructor() {}

	// TODO: next add defaults? or deny adding an empty expense
	add(description: string = "", category: Category, amount: number, month: Month): number {
		const expense: Expense = {
			description: description,
			category: category,
			amount: amount,
			month: month,
		};
		const id = this.getId();
		this.expenses.set(id, expense);
		return id;
	}

	updateDescription(id: number, description: string) {
		const expense = this.expenses.get(id);
		if (expense) {
			expense.description = description;
		}
	}

	updateCategory(id: number, category: Category) {
		const expense = this.expenses.get(id);
		if (expense) {
			expense.category = category;
		}
	}

	updateAmount(id: number, amount: number) {
		const expense = this.expenses.get(id);
		if (expense) {
			expense.amount = amount;
		}
	}

	updateMonth(id: number, month: Month) {
		const expense = this.expenses.get(id);
		if (expense) {
			expense.month = month;
		}
	}

	delete(id: number) {
		this.expenses.delete(id);
	}

	viewExpenses() {
		console.log(`Expenses:`);
		for (const key of this.expenses.keys()) {
			console.log(this.expenses.get(key));
		}
	}

	viewExpenseSummary() {
		console.log(`Expenses Summary:`);
		let totalExpenses = Array.from(this.expenses.values()).reduce((sum, expense) => sum + (expense.amount ?? 0), 0);
		let greatestExpense = Array.from(this.expenses.values()).reduce(
			(max, expense) => Math.max(max, expense.amount ?? 0),
			0
		); // Note that these would need future input validation checks
		let minimumExpense = Array.from(this.expenses.values()).reduce(
			(min, expense) => Math.min(min, expense.amount ?? 0),
			0
		);
		let averageExpense = totalExpenses / this.expenses.size;

		console.log(
			`Total Expenses: ${totalExpenses}, Greatest Expense: ${greatestExpense}, Minimum Expense: ${minimumExpense}, Average Expense: ${averageExpense}`
		);
	}

	viewExpensesByMonth(month: Month) {
		console.log(`Expenses By Month: ${month}`);
		console.log(
			`${Array.from(this.expenses.values())
				.filter((expense) => expense.month === month)
				.reduce((total, expense) => (total += expense.amount ?? 0), 0)}`
		);
	}

	viewExpensesByCategory(category: Category) {
		console.log(`Expenses By Month: ${category}`);
		console.log(
			`${Array.from(this.expenses.values())
				.filter((expense) => expense.category === category)
				.reduce((total, expense) => (total += expense.amount ?? 0), 0)}`
		);
	}

	setBudget(month: Month, budget: number) {
		this.monthBudgets.set(month, budget);
	}

	exportExpenses() {
		//TODO:
	}

	clear() {
		this.expenses.clear();
	}

	getExpenses(): Map<number, Expense> {
		return this.expenses;
	}

	getBudget(month: Month): number | undefined {
		return this.monthBudgets.get(month);
	}

	getId(): number {
		let maxId = 0;
		for (const key of this.expenses.keys()) {
			maxId = Math.max(maxId, key);
		}

		return maxId + 1;
	}
}
