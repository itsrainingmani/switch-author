import fs from 'fs';
import path from 'path';
import execa from 'execa';
import stdWrite from './utils';

const gitDir = path.join(path.dirname('.'), '.git');

export default function reauthor(args) {
	return new Promise((resolve, reject) => {
		stdWrite(`New name: ${args.name}\nNew email: ${args.email}\nNumber of Commits: ${args.commits}`, 'bold');
		// stdWrite(`Path of Git Dir: ${gitDir}`, 'cyan');
		if (fs.existsSync(gitDir)) {
			stdWrite("Git Directory exists", 'cyan');
			const rebaseDepth = args.commits === "*" ? "--root" : `HEAD~${args.commits}`;
			const rebaseCommand = `git rebase ${rebaseDepth} -x "git commit --amend --author '` + args.name + ` <${args.email}> '` + ' --no-edit"';
			try {
				execa.sync(rebaseCommand);
				resolve("Re Authoring succeeded");
			} catch (err) {
				reject(`Re Authoring failed with: ${err}`);
			}
		} else {
			reject("Git Directory does not exist");
		}
	});
}
