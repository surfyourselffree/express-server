import { v4 as uuid } from 'uuid';

let users = {
	87488: {
		id: '87488',
		name: 'Aggie',
		age: 42
	},
	12: {
		id: '12',
		name: 'Aaron',
		age: 5
	},
	76543: {
		id: '76543',
		name: 'Christine',
		age: 33
	},
	2887432: {
	id: '2887432',
		name: 'Fred',
		age: 62
	}
}

export async function createUser(user) {
	const id = uuid();
	const userWithId = {...user, id};
	users = {...users, [id]: userWithId };
	return userWithId;
}

export function getUser(userId) {
	const user = users[userId];
	return user;
}
