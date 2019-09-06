import mri from 'mri';
import reauthor from './index';
import stdWrite from './utils';

stdWrite('Welcome to the switch-author tool', 'green');
const args = mri(process.argv.slice(2), {
	alias: {
		n: 'name',
		e: 'email',
		c: 'commits'
	},
	default: {
		commits: '*',
	}
});

if (args.help) {
	stdWrite(`\nHELP STRING INCOMING\n`, 'bold');
} else if (args.name === undefined || args.email === undefined) {
	stdWrite('Please provide both Name and Email for reauthoring', 'red');
} else {
	const r = reauthor(args);
	r.then(msg => {
		stdWrite(msg, 'green');
	}).catch(err => {
		stdWrite(err, 'red');
	});
}