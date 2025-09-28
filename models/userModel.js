const db = require('../db');

exports.getAllUsers = async () => {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
};

exports.createUser = async (email, name) => {
    const result = await db.query(
        'INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *',
        [email, name]
    );
    return result.rows;
};

exports.getUserById = async (userId) => {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    return result.rows;
};
