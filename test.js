import test from 'ava';
import {is64bit, is64bitSync} from './index.js';

test('async', async t => {
	t.true(await is64bit());
});

test('sync', t => {
	t.true(is64bitSync());
});
