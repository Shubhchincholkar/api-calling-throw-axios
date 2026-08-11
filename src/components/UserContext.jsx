import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// 1. Create the Context
const UserContext = createContext();

// 2. Create a Provider — this holds the actual state and fetch logic
export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );

      setUsers(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, []);

  // Whatever goes in "value" is available to any component that calls useUsers()
  return (
    <UserContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom hook for consuming the context cleanly
// eslint-disable-next-line react-refresh/only-export-components
export function useUsers() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
}