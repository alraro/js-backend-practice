const db = require('../db');

exports.getAllUsers = async (name = "", page = 1, limit = 25) => {
    let query = 'SELECT * FROM users WHERE name ILIKE $1';
    let params = [`%${name}%`];

    query += ` ORDER BY id LIMIT ${limit} OFFSET ${(page - 1) * limit}`;
    
    const result = await db.query(query, params);
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
