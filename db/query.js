
var db = require('./connection');

function getAll() {
	return db.select('*')
	.from('cartoon');
}

function getOne(id) {
	return db.select('*')
	.from('cartoon')
	.where('id',id);
}

function create(cartoon) {
	return db('cartoon')
        .insert(body)
        .returning('id')
}

function update(id, cartoon) {
	return db.table('cartoon')
	.update(book)
	.where('id', id);
}

function remove(id) {
	return db.del()
	.from('cartoon')
	.where('id', id)
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
