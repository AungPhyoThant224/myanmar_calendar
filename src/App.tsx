import CalendarLayout from "./components/CalendarLayout";

function App() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-6xl px-6 py-4 mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Myanmar Calendar</h1>
            <p className="text-xs text-slate-500">Public Holidays 2021 — 2026</p>
          </div>
          
          <div className="text-right hidden md:block">
            <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded border border-slate-200">
              Today: {formattedDate}
            </span>
          </div>
        </div>
      </nav>

      <main>
        <CalendarLayout />
      </main>

      <footer className="max-w-6xl mx-auto px-6 pb-6">
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="text-sm text-slate-500">
            <span className="font-bold text-blue-600 underline">Tip:</span> Hover over red dates to view holiday details.
          </div>
          <div className="flex gap-6 items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-sm" /> Today
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-rose-100 border border-rose-200 rounded-sm" /> Holiday
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
