const db = require('../db');

exports.getAllEmployees = async (name = "", page = 1, limit = 25) => {
    let query = 'SELECT * FROM employees WHERE name ILIKE $1';
    let params = [`%${name}%`];

    query += ` ORDER BY id LIMIT $2 OFFSET $3`;
    params.push(limit, (page - 1) * limit);

    const result = await db.query(query, params);
    return result.rows;
};

exports.getEmployeeCount = async (name = "") => {
    let params = [`%${name}%`];
    const result = await db.query(
        "SELECT COUNT(*) FROM employees WHERE name ILIKE $1",
        params
    );
    return parseInt(result.rows[0].count, 10);
};

exports.createEmployee = async (email, name) => {
    const result = await db.query(
        'INSERT INTO employees (email, name) VALUES ($1, $2) RETURNING *',
        [email, name]
    );
    return result.rows;
};

exports.getEmployeeById = async (employeeId) => {
    const result = await db.query('SELECT * FROM employees WHERE id = $1', [employeeId]);
    return result.rows;
};
