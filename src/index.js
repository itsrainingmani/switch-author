// import execa from 'execa';
import fs from 'fs';
import path from 'path';
import stdWrite from './utils';

const gitDir = path.join(path.dirname('.'), '.git');

export default function reauthor(args) {
	return new Promise((resolve, reject) => {
		stdWrite(`New name: ${args.name}\nNew email: ${args.email}`, 'bold');
		stdWrite(`Path of Git Dir: ${gitDir}`, 'cyan');
		if (fs.existsSync(gitDir)) {
			stdWrite("Git Directory exists", 'cyan');

		} else {
			reject("Git Directory does not exist");
		}
	});
}
