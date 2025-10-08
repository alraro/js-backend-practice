import { useState, useEffect } from "preact/hooks";
import EmployeeBubble from "./EmployeeBubble";
import "../styles/employeeList.css";

export default function EmployeeList() {
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [nameFilter, setNameFilter] = useState("");
    const [employees, setEmployees] = useState({
        data: [],
        count: 0,
        totalPages: 0,
        currentPage: page,
        hasNextPage: false,
        hasPrevPage: false,
    });

    async function fetchEmployees(name, page, limit) {
        let employees = await fetch(
            `${
                import.meta.env.PUBLIC_BACKEND_URL
            }/employees?name=${name}&page=${page}&limit=${limit}`
        )
            .then((res) => res.json())
            .catch(() => ({ error: "Error fetching employees" }));
        if (employees.error) {
            employees = [];
        }
        setEmployees(employees);
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchEmployees(nameFilter, 1, limit);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [nameFilter]);

    useEffect(() => {
        fetchEmployees(nameFilter, page, limit);
    }, [page, limit]);

    return (
        <div id="employee-list">
            <input
                type="text"
                id="employee-search"
                placeholder="Search employees..."
                value={nameFilter}
                onInput={(e) => {
                    setPage(1);
                    setNameFilter(e.target.value);
                }}
            />
            <ul>
                {employees.data.map((employee) => (
                    <EmployeeBubble key={employee.id} employee={employee} />
                ))}
                <div id="pagination-controls">
                    <button
                        class="pagination-button"
                        id="previous-page-button"
                        onClick={() => {
                            if (employees.hasPrevPage) {
                                setPage(page - 1);
                            }
                        }}
                    >
                        Previous page
                    </button>
                    <button
                        class="pagination-button"
                        id="next-page-button"
                        onClick={() => {
                            if (employees.hasNextPage) {
                                setPage(page + 1);
                            }
                        }}
                    >
                        Next page
                    </button>
                </div>
            </ul>
        </div>
    );
}
