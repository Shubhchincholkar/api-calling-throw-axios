import Header from "./components/Header";
import UserGrid from "./components/Usegrid";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950">
      <div className="max-w-6xl mx-auto p-6 sm:p-10">
        <Header />
        <UserGrid />
      </div>
    </div>
  );
}

export default App;