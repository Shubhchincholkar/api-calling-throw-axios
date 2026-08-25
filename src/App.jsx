import Header from "./components/Header";
import UserGrid from "./components/Usegrid";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
   <UserProvider>
      <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <Header />
          <UserGrid />
        </div>
      </main>
    </UserProvider>
  );
}

export default App;