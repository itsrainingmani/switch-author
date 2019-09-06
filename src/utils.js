import chalk from 'chalk';

export default function stdWrite(message, color) {

	// Properties of objects can be accessed through the array notation
	const chalkedMessage = chalk[color](message);
	process.stdout.write(`\n${chalkedMessage}\n`);
}