export function Header() {
  return (
    <header className="flex justify-between items-center mb-12">
      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Fitness Dashboard</h2>
        <p className="text-slate-500 font-medium">Hello Alex, you've completed <span className="text-primary font-bold">80%</span> of your daily movement.</p>
      </div>
      <div className="flex gap-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input className="pl-12 pr-6 py-3 rounded-2xl bg-white border-none shadow-subtle focus:ring-2 focus:ring-primary/20 transition-all text-sm w-72 placeholder:text-slate-400" placeholder="Search activities..." type="text"/>
        </div>
        <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-subtle relative border border-slate-50">
          <span className="material-symbols-outlined text-slate-600">notifications</span>
          <span className="absolute top-3.5 right-3.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
