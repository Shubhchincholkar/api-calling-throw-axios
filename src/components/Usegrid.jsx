import { useUsers } from "./UserContext";


function UserGrid() {
  const { users, loading } = useUsers();

  if (loading) {
    return (
      <p className="text-center text-cyan-300 text-lg font-semibold py-20 animate-pulse">
        Loading users...
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300"
        >
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
              <span className="text-violet-400">🏢</span> {user.company.name}
            </p>
            <p className="flex items-center gap-2">
              <span className="text-violet-400">📍</span> {user.address.city}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserGrid;