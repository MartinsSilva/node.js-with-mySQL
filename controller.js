const connection = require('./database');

module.exports = {
	home(req, res) {
		return res.json({"message": "Bem-vindo"});
	},

	async getUsers(req, res) {
		const sql = 'SELECT name, email, registeredAt FROM author';
		await connection.query(sql, (err, results, fields) => {
			if(err) throw err;
			return res.json(results);
		})
	},

	async getUser(req, res) {
		const getParams = req.params.id;
		const sql = `SELECT * FROM author WHERE id = ${getParams}`;
		await connection.query(sql, (err, results, fields) => {
			if(err) throw err;
			return res.json(results);
		})
	}
}