export function TargetGoal() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-subtle border border-slate-50 flex flex-col">
      <h3 className="text-xl font-extrabold text-slate-900 mb-8">Target Goal</h3>
      <div className="flex-1 flex flex-col gap-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden group">
          <div className="flex items-center gap-4 mb-5 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined font-bold">weight</span>
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-900">Weight Goal</p>
              <p className="text-xs text-slate-500 font-medium">Target: 72.5 kg</p>
            </div>
          </div>
          <div className="h-3 bg-white rounded-full mb-2.5 shadow-inner">
            <div className="h-full bg-primary rounded-full" style={{width: '65%'}}></div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Progress</p>
            <p className="text-[11px] text-primary font-black">65% Achieved</p>
          </div>
        </div>

        <div className="space-y-5">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Recent History</h4>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/10"></div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Early Morning Run</p>
              <p className="text-[11px] text-slate-400 font-medium">Today, 06:15 AM</p>
            </div>
            <p className="text-sm font-bold text-slate-500">+450 <span className="text-[10px]">cal</span></p>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-2.5 h-2.5 rounded-full bg-sky-400 ring-4 ring-sky-100"></div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-800 group-hover:text-sky-500 transition-colors">Swimming Lab</p>
              <p className="text-[11px] text-slate-400 font-medium">Yesterday, 05:30 PM</p>
            </div>
            <p className="text-sm font-bold text-slate-500">+680 <span className="text-[10px]">cal</span></p>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer opacity-60">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 ring-4 ring-indigo-50"></div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-800">Deep Yoga Flow</p>
              <p className="text-[11px] text-slate-400 font-medium">2 days ago, 07:00 AM</p>
            </div>
            <p className="text-sm font-bold text-slate-500">+210 <span className="text-[10px]">cal</span></p>
          </div>
        </div>

        <button className="mt-auto w-full py-3.5 text-slate-500 font-bold text-xs uppercase tracking-widest border border-slate-100 rounded-2xl hover:bg-slate-50 hover:text-primary transition-all">
          View Performance Lab
        </button>
      </div>
    </div>
  );
}
