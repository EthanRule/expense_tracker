import { ExpenseTracker } from "./expense_tracker/expense_tracker";

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

function input(): void {
	process.stdout.write("expense-tracker: ");
	process.stdin.once("data", (data) => {
		let [argv, argc] = parseInput(data.toString());
		console.log(`argv: ${argv}, argc: ${argc}`);

		switch (argv[0]) {
			case "add":
				expenseTracker.add("")
				for (let i = 1; i < 8; i += 2) {
					switch (argv[i]) {
						case "--description":

							break;
						case "--category":
							break;
						case "--amount":
							break;
						case "--month":
							break;
						default:
							console.log(
								`Invalid expense attribute: ${argv[i]}. Expected: --description, --category, --amount, or --month`
							);
					}
				}
				break;
			case "update":
				break;
			case "delete":
				break;
			case "view":
				break;
			case "set-budget":
				break;
		}

		input();
	});
}

function main(): void {
	input();
}

main();
