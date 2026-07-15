/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect } from "react";
import axios from "axios";
function App() {
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
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950">
      <div className="max-w-6xl mx-auto p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-linear-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              User Directory
            </h1>
            <p className="text-sm text-slate-400 mt-2 tracking-wide">
              Fetched live via Axios + useEffect
            </p>
          </div>

          <button
            onClick={() => fetchUsers()}
            disabled={loading}
            className="bg-linear-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 disabled:opacity-50 text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-200 hover:scale-105"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {loading && (
          <p className="text-center text-cyan-300 text-lg font-semibold py-20 animate-pulse">
            Loading users...
          </p>
        )}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Avatar initial + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-br from-cyan-400 to-violet-500 text-white font-bold text-xl shadow-md shadow-violet-500/40">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white leading-tight group-hover:text-cyan-300 transition-colors">
                      {user.name}
                    </h2>
                    <p className="text-xs text-slate-400">@{user.username}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-slate-300">
                  <p className="flex items-center gap-2">
                    <span className="text-cyan-400">📧</span> {user.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-cyan-400">📞</span> {user.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-fuchsia-400">🌐</span>{" "}
                    <span className="text-fuchsia-300">{user.website}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-violet-400">🏢</span>{" "}
                    {user.company.name}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-violet-400">📍</span>{" "}
                    {user.address.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
