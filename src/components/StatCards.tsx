export function StatCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      <div className="bg-white p-7 rounded-2xl shadow-subtle border border-slate-50 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-blue-50 text-primary">
            <span className="material-symbols-outlined">footprint</span>
          </div>
          <span className="text-[11px] px-2 py-1 rounded-lg bg-green-50 text-green-600 font-bold">+12%</span>
        </div>
        <div>
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Daily Steps</h3>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-extrabold text-slate-900">8,432</p>
            <p className="text-sm text-slate-400 font-medium">/ 10k</p>
          </div>
        </div>
        <div className="mt-6 h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-500" style={{width: '84%'}}></div>
        </div>
      </div>

      <div className="bg-white p-7 rounded-2xl shadow-subtle border border-slate-50 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-orange-50 text-orange-500">
            <span className="material-symbols-outlined">local_fire_department</span>
          </div>
          <span className="text-[11px] px-2 py-1 rounded-lg bg-slate-50 text-slate-500 font-bold">-5%</span>
        </div>
        <div>
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Calories</h3>
          <p className="text-3xl font-extrabold text-slate-900">1,250 <span className="text-sm font-bold text-slate-300">kcal</span></p>
        </div>
        <div className="mt-6 flex items-end gap-1.5 h-10">
          <div className="flex-1 bg-primary/10 h-1/2 rounded-md"></div>
          <div className="flex-1 bg-primary/10 h-3/4 rounded-md"></div>
          <div className="flex-1 bg-primary/10 h-2/3 rounded-md"></div>
          <div className="flex-1 bg-primary h-full rounded-md shadow-sm"></div>
          <div className="flex-1 bg-primary/30 h-3/4 rounded-md"></div>
        </div>
      </div>

      <div className="bg-white p-7 rounded-2xl shadow-subtle border border-slate-50 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-sky-50 text-sky-500">
            <span className="material-symbols-outlined">water_drop</span>
          </div>
        </div>
        <div>
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Water Intake</h3>
          <p className="text-3xl font-extrabold text-slate-900">6 <span className="text-sm font-bold text-slate-300">/ 8 gl.</span></p>
        </div>
        <div className="mt-6 flex gap-2">
          <div className="w-full h-2 rounded-full bg-primary"></div>
          <div className="w-full h-2 rounded-full bg-primary"></div>
          <div className="w-full h-2 rounded-full bg-primary"></div>
          <div className="w-full h-2 rounded-full bg-primary"></div>
          <div className="w-full h-2 rounded-full bg-primary"></div>
          <div className="w-full h-2 rounded-full bg-primary"></div>
          <div className="w-full h-2 rounded-full bg-slate-100"></div>
          <div className="w-full h-2 rounded-full bg-slate-100"></div>
        </div>
      </div>

      <div className="bg-white p-7 rounded-2xl shadow-subtle border border-slate-50 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-indigo-50 text-indigo-500">
            <span className="material-symbols-outlined">bedtime</span>
          </div>
        </div>
        <div>
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Sleep</h3>
          <p className="text-3xl font-extrabold text-slate-900">7h 20m</p>
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Efficiency</span>
            <span className="text-[10px] font-bold text-indigo-500">92%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full">
            <div className="w-[92%] h-full bg-indigo-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
