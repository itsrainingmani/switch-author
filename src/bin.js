// import fs from 'fs';
// import path from 'path';
import chalk from 'chalk';
import mri from 'mri';

process.stdout.write(chalk.green('Welcome to the switch-author tool\n'));
const args = mri(process.argv.slice(2), {
	alias: {
		n: 'name',
		e: 'email',
		d: 'depth'
	}
});

const [name, email] = [args.name, args.email];

if (args.help) {
	process.stdout.write(`\nHELP STRING INCOMING\n`);
} else {
	process.stdout.write(`New name: ${name}\nNew email: ${email}`);
}