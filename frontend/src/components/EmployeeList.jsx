import { useState, useEffect } from "preact/hooks";
import UserBubble from "./EmployeeBubble";

export default function UserList() {
    console.log("Rendering UserList component");
    const [limit, setLimit] = useState(25);
    const [page, setPage] = useState(1);
    const [nameFilter, setNameFilter] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Effect triggered with params:", {
            nameFilter,
            page,
            limit,
        });
        async function fetchEmployees() {
            console.log(`Base url: ${import.meta.env.PUBLIC_BACKEND_URL}`);
            console.log(`Fetching : ${import.meta.env.PUBLIC_BACKEND_URL}/employees?name=${nameFilter}&page=${page}&limit=${limit}`);
            let employees = await fetch(
                `${import.meta.env.PUBLIC_BACKEND_URL}/employees?name=${nameFilter}&page=${page}&limit=${limit}`
            )
                .then((res) => res.json())
                .catch(() => []);
            if (employees.error) {
                employees = [];
            }
            console.log("Employees fetched:", employees);
            setUsers(employees);
            console.log("Employees fetched:", employees);
            console.log("Fetching employees with params:", {
                nameFilter,
                page,
                limit,
            });
        }
        fetchEmployees();
    }, [nameFilter, page, limit]);

    return (
        <div id="user-list">
            <input
                type="text"
                id="user-search"
                placeholder="Search users..."
                value={nameFilter}
                onInput={(e) => setNameFilter(e.target.value)}
            />
            <ul>
                {users.map((user) => (
                    <UserBubble
                        key={user.id || user.email}
                        name={user.name}
                        email={user.email}
                    />
                ))}
            </ul>
        </div>
    );
}
