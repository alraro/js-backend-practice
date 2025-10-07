import { useState, useEffect } from "preact/hooks";
import EmployeeBubble from "./EmployeeBubble";
import "../styles/employeeList.css";

export default function EmployeeList() {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [employees, setEmployees] = useState([]);

  async function fetchEmployees() {
    let employees = await fetch(
      `${import.meta.env.PUBLIC_BACKEND_URL}/employees?name=${nameFilter}&page=${page}&limit=${limit}`
    )
      .then((res) => res.json())
      .catch(() => []);
    if (employees.error) {
      employees = [];
    }
    setEmployees(employees);
  }

  useEffect(() => {
    fetchEmployees();
  }, [nameFilter, page, limit]);

  return (
    <div id="employee-list">
      <input
        type="text"
        id="employee-search"
        placeholder="Search employees..."
        value={nameFilter}
        onInput={(e) => setNameFilter(e.target.value)}
      />
      <ul>
        {employees.map((employee) => (
          <EmployeeBubble key={employee.id} employee={employee} />
        ))}
        <div id="pagination-controls">
          <button
            class="pagination-button"
            id="previous-page-button"
            onClick={() => setPage(Math.max(page - 1, 1))}
          >
            Previous page
          </button>
          <button
            class="pagination-button"
            id="next-page-button"
            onClick={() => setPage(page + 1)}
          >
            Next page
          </button>
        </div>
      </ul>
    </div>
  );
}
