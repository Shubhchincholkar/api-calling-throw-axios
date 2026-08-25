import { useUsers } from "./UserContext";

function Header() {
  const { loading, fetchUsers, users } = useUsers();

  return (
    <header className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Live directory
          </span>
        </div>

        <h1 className="bg-linear-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-6xl">
          User Directory . [Context API]
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
          Explore your team. Select any profile to see their complete details.
        </p>
      </div>

      <button
        type="button"
        onClick={fetchUsers}
        disabled={loading}
        className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-100 shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className={loading ? "animate-spin" : "transition-transform group-hover:rotate-180"}>
          ↻
        </span>
        {loading ? "Refreshing..." : `Refresh ${users.length} users`}
      </button>
    </header>
  );
}

export default Header;