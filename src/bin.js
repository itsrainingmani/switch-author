// import fs from 'fs';
// import path from 'path';
import mri from 'mri';
import reauthor from './index';
import stdWrite from './utils';

stdWrite('Welcome to the switch-author tool', 'green');
const args = mri(process.argv.slice(2), {
	alias: {
		n: 'name',
		e: 'email',
		d: 'depth'
	}
});

const [name, email] = [args.name, args.email];

if (args.help) {
	stdWrite(`\nHELP STRING INCOMING\n`, 'bold');
} else {
	const r = reauthor({ name, email });
	r.then(msg => {
		stdWrite(msg, 'green');
	}).catch(err => {
		stdWrite(err, 'red');
	});
}