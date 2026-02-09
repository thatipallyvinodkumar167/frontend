import { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

const UserTable = () => {
  const [users, setUsers] = useState([]); // MUST be array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();

      // ✅ IMPORTANT LINE
      setUsers(Array.isArray(res.data) ? res.data : res.data.users || []);
    } catch (err) {
      console.error("Failed to fetch users", err);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <tr key={user._id || index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.mail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
