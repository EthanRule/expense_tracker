import { ExpenseTracker, Category, Month } from "./expense_tracker/expense_tracker";

const expenseTracker = new ExpenseTracker();

function parseInput(data: string): [string[], number] {
	const argv: string[] = [];
	let word = "";
	for (let i = 0; i < data.length; i++) {
		if (data[i] == " " && word.length > 0) {
			argv.push(word);
			word = "";
		} else if (data[i] !== " " && data[i] !== "\n") {
			word += data[i];
		}
	}

	if (word.length > 0) {
		argv.push(word);
	}

	return [argv, argv.length];
}

const categoryMap: Record<string, Category> = {
	food: Category.food,
	rent: Category.rent,
	clothese: Category.clothes,
	disposable: Category.disposable,
};

const monthMap: Record<string, Month> = {
	January: Month.January,
	Febuary: Month.Febuary,
	April: Month.April,
	March: Month.March,
	May: Month.May,
	June: Month.June,
	July: Month.July,
	August: Month.August,
	September: Month.September,
	October: Month.October,
	November: Month.November,
	December: Month.December,
};

function input(): void {
	process.stdout.write("expense-tracker: ");
	process.stdin.once("data", (data) => {
		let [argv, argc] = parseInput(data.toString());

		switch (argv[0]) {
			case "add":
				const expenseId = expenseTracker.add();
				for (let i = 1; i < 8 && i < argv.length - 1; i += 2) {
					switch (argv[i]) {
						case "--description":
							expenseTracker.updateDescription(expenseId, argv[i + 1]);
							break;
						case "--category":
							const category = categoryMap[argv[i + 1]];
							if (category) {
								expenseTracker.updateCategory(expenseId, category);
							} else {
								console.log("Invalid category.");
							}
							break;
						case "--amount":
							if (typeof Number(argv[i + 1]) === "number" && Number(argv[i + 1]) > 0) {
								expenseTracker.updateAmount(expenseId, Number(argv[i + 1]));
							}
							break;
						case "--month":
							const month = monthMap[argv[i + 1]];
							if (month) {
								expenseTracker.updateMonth(expenseId, month);
							} else {
								console.log("invalid month");
							}
							break;
						default:
							console.log(
								`Invalid expense attribute: ${argv[i]}. Expected: --description, --category, --amount, or --month`
							);
					}
				}
				break;
			case "update": // update 1 --description "new description"
				let updateExpenseId = argv[1];
				switch (argv[2]) {
					case "--description":
						expenseTracker.updateDescription(Number(updateExpenseId), argv[3]);
						break;
					case "--category":
						expenseTracker.updateCategory(Number(updateExpenseId), categoryMap[argv[3]]);
						if (!categoryMap[argv[3]]) {
							console.log("invalid category");
						}
						break;
					case "--amount":
						expenseTracker.updateAmount(Number(updateExpenseId), Number(argv[3]));
						break;
					case "--month": // update 1 --description "new description"
						expenseTracker.updateMonth(Number(updateExpenseId), monthMap[argv[3]]);
						if (!monthMap[argv[3]]) {
							console.log("invalid month");
						}
						break;
				}
				break;
			case "delete":
				expenseTracker.delete(Number(argv[1]));
				break;
			case "list":
				expenseTracker.viewExpenses();
				break;
			case "summary":
				if (argc > 1) {
					switch (argv[1]) {
						case "--month":
							expenseTracker.viewExpensesByMonth(monthMap[argv[2]]);
							break;
						case "--category":
							expenseTracker.viewExpensesByCategory(categoryMap[argv[2]]);
							break;
					}
				} else {
					expenseTracker.viewExpenseSummary();
				}
				break;
			case "set-budget":
				expenseTracker.setBudget(monthMap[argv[1]], Number(argv[2]));
				break;
			case "export":
				expenseTracker.exportExpenses();
				break;
			default:
				console.log("invalid command");
		}

		input();
	});
}

function main(): void {
	input();
}

main();
