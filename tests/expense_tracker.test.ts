import { ExpenseTracker, Expense, Category, Month } from "../app/expense_tracker/expense_tracker";

let expenseTracker = new ExpenseTracker();

afterEach(() => {
	expenseTracker.clear();
});

// Function add tests
test("Adding an expense", () => {
	expenseTracker.add("expense", Category.clothes, 100, Month.Febuary);
	expect(expenseTracker.getExpenses().size).toBe(1);

	expect(expenseTracker.getExpenses().get(1)?.description).toBe("expense");
	expect(expenseTracker.getExpenses().get(1)?.category).toBe(Category.clothes);
	expect(expenseTracker.getExpenses().get(1)?.amount).toBe(100);
	expect(expenseTracker.getExpenses().get(1)?.month).toBe(Month.Febuary);
});

test("Adding multiple espenses", () => {
	expenseTracker.add("gucci", Category.clothes, 100, Month.Febuary);
	expenseTracker.add("pizza", Category.food, 200, Month.Febuary);
	expenseTracker.add("movie", Category.disposable, 100, Month.Febuary);
	expect(expenseTracker.getExpenses().size).toBe(3);
});

// Function update tests
test("Updating an expense description", () => {
	expenseTracker.add("pizza", Category.food, 200, Month.Febuary);
	expenseTracker.updateDescription(1, "new description");
	expect(expenseTracker.getExpenses().get(1)?.description).toBe("new description");
});

test("Updating an expense category", () => {
	expenseTracker.add("pizza", Category.food, 200, Month.Febuary);
	expenseTracker.updateCategory(1, Category.clothes);
	expect(expenseTracker.getExpenses().get(1)?.category).toBe(Category.clothes);
});
test("Updating an expense amount", () => {
	expenseTracker.add("pizza", Category.food, 200, Month.Febuary);
	expenseTracker.updateAmount(1, 100);
	expect(expenseTracker.getExpenses().get(1)?.amount).toBe(100);
});
test("Updating an expense month", () => {
	expenseTracker.add("pizza", Category.food, 200, Month.Febuary);
	expenseTracker.updateMonth(1, Month.December);
	expect(expenseTracker.getExpenses().get(1)?.month).toBe(Month.December);
});
test("Updating an expense that does not exist", () => {
	expenseTracker.add("pizza", Category.food, 200, Month.Febuary);
	expenseTracker.updateMonth(0, Month.December);
	expect(expenseTracker.getExpenses().get(1)?.month).toBe(Month.Febuary);

	expect(expenseTracker.getExpenses().get(0)?.month).toBeUndefined();
});

// Function delete tests
test("Delete expense works", () => {
	expenseTracker.add("pizza", Category.food, 200, Month.January);
	expenseTracker.delete(1);
	expect(expenseTracker.getExpenses().get(1)).toBeUndefined();
});

// Function set budget tests
test("Setting monthly expense budget", () => {
	expenseTracker.setBudget(Month.April, 500);
	expect(expenseTracker.getBudget(Month.April)).toBe(500);
});
