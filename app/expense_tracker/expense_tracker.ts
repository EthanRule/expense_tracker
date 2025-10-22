export enum Category {
	food = "food",
	rent = "rent",
	clothes = "clothes",
	disposable = "disposable",
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
}

interface Expense {
	description: string;
	category: Category;
	amount: number;
}

export class ExpenseTracker {
	private expenses: Map<number, Expense> = new Map();

	constructor() {}

	add(description: string, category: Category, amount: number) {}

	update(id: number, description: string, category: Category, amount: number) {
		//TODO: add default vals for args
	}

	delete(id: number) {}

	viewExpenses() {}

	viewExpenseSummary() {}

	viewExpensesByMonth(month: Month) {}

	viewExpensesByCategory(category: Category) {}

	setBudget(month: Month) {}

	exportExpenses() {}
}
