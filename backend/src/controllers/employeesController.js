const userModel = require('../models/employeesModel');

exports.getAllEmployees = async (req, res) => {
    const { name = "", page = 1, limit = 25 } = req.query;
    try {
        const employees = await userModel.getAllEmployees(name, page, limit);
        const count = await userModel.getEmployeeCount(name);
        const totalPages = Math.ceil(count / limit);
        const currentPage = Math.min(page, totalPages) || 1;
        const hasNextPage = currentPage < totalPages;
        const hasPrevPage = currentPage > 1;

        res.json({
            "data": employees,
            "count": count,
            "totalPages": totalPages,
            "currentPage": currentPage,
            "hasNextPage": hasNextPage,
            "hasPrevPage": hasPrevPage
        });
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createEmployee = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    try {
        const result = await userModel.createEmployee(name, email);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getEmployeeById = async (req, res) => {
    const employeeId = req.params.id;
    if (isNaN(employeeId)) {
        return res.status(400).json({ error: 'Invalid employee ID' });
    }
    try {
        const result = await userModel.getEmployeeById(employeeId);
        res.json(result);
    } catch (error) {
        console.error('Error fetching employee:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
