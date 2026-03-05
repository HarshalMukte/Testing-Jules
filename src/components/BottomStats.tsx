export function BottomStats() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-7 rounded-2xl shadow-subtle border border-slate-50">
        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-3">Avg. Heart Rate</p>
        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-1.5">
            <p className="text-3xl font-extrabold text-slate-900">72</p>
            <p className="text-xs text-slate-400 font-bold">BPM</p>
          </div>
          <p className="text-green-500 text-xs font-bold flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
            <span className="material-symbols-outlined text-sm font-black">trending_down</span>
            Optimal
          </p>
        </div>
      </div>

      <div className="bg-white p-7 rounded-2xl shadow-subtle border border-slate-50">
        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-3">Active Minutes</p>
        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-1.5">
            <p className="text-3xl font-extrabold text-slate-900">45</p>
            <p className="text-xs text-slate-400 font-bold">MIN</p>
          </div>
          <p className="text-primary text-xs font-bold flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-lg">
            <span className="material-symbols-outlined text-sm font-black">trending_up</span>
            +5%
          </p>
        </div>
      </div>

      <div className="bg-white p-7 rounded-2xl shadow-subtle border border-slate-50">
        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-3">Current Weight</p>
        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-1.5">
            <p className="text-3xl font-extrabold text-slate-900">75.4</p>
            <p className="text-xs text-slate-400 font-bold">KG</p>
          </div>
          <p className="text-blue-500 text-xs font-bold flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
            <span className="material-symbols-outlined text-sm font-black">straight</span>
            Stable
          </p>
        </div>
      </div>
    </section>
  );
}
