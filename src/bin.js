import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import mri from 'mri';

process.stdout.write(chalk.green('Welcome to the switch-author tool\n'));
const args = mri(process.argv.slice(2));
process.stdout.write(`Args: ${args}`);