import { useState } from "preact/hooks";

export default function EmployeeBubble({ employee }) {
    const [expanded, setExpanded] = useState(false);
    return (
      <li>
        <div className={`employee-bubble ${expanded ? "expanded" : ""}`} onClick={() => setExpanded(!expanded)}>
            <p className="employee-name">{employee.name}</p>
            <p className="employee-email">{employee.email}</p>
            {expanded && (
                <div className="employee-details">
                    <p>Position: {employee.position}</p>
                    <p>Department: {employee.department}</p>
                </div>
            )}
        </div>
      </li>
    );
}
