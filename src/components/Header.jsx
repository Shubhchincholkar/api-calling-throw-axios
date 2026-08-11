import { useUsers } from "./UserContext";
function Header() {
  const { loading, fetchUsers } = useUsers();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-linear-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
          User Directory
        </h1>
        <p className="text-sm text-slate-400 mt-2 tracking-wide">
          Fetched live via Context + Axios + useEffect
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
  );
}

export default Header;