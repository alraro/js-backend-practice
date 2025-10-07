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
        async function fetchUsers() {
            let users = await fetch(
                `${import.meta.env.BACKEND_URL}/users?name=${nameFilter}&page=${page}&limit=${limit}`
            )
                .then((res) => res.json())
                .catch(() => []);
            if (users.error) {
                users = [];
            }
            console.log("Users fetched:", users);
            setUsers(users);
            console.log("Users fetched:", users);
            console.log("Fetching users with params:", {
                nameFilter,
                page,
                limit,
            });
        }
        fetchUsers();
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
