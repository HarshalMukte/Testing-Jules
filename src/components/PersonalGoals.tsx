export function PersonalGoals() {
  return (
    <section className="mt-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Personal Fitness Goals</h1>
          <p className="text-slate-500 font-medium">Track and manage your health targets for the month.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-sm font-bold">add</span>
          Add New Goal
        </button>
      </div>

      <div className="flex border-b border-slate-100 mb-8 overflow-x-auto">
        <button className="px-6 py-3 text-sm font-extrabold border-b-2 border-primary text-primary">Active Goals</button>
        <button className="px-6 py-3 text-sm font-bold text-slate-400 hover:text-slate-800 transition-colors">Completed</button>
        <button className="px-6 py-3 text-sm font-bold text-slate-400 hover:text-slate-800 transition-colors">Templates</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-slate-50 shadow-subtle hover:shadow-lg transition-all duration-300">
          <div className="p-8">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-2xl bg-accent flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-primary font-bold">monitor_weight</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-extrabold text-slate-800 mb-1">Weight Goal</h3>
                  <button className="px-3 py-1 rounded-lg text-slate-400 text-xs font-bold hover:text-primary hover:bg-accent transition-colors">EDIT</button>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-3">Target: 75kg • Current: 78kg</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Progress</span>
                <span className="text-sm font-black text-primary">65%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="mt-5 text-sm font-medium text-slate-500 leading-relaxed flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-slate-400">info</span>
                You are 3kg away from your target. Keep it up!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-50 shadow-subtle hover:shadow-lg transition-all duration-300">
          <div className="p-8">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-2xl bg-accent flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-primary font-bold">steps</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-extrabold text-slate-800 mb-1">Daily Steps</h3>
                  <button className="px-3 py-1 rounded-lg text-slate-400 text-xs font-bold hover:text-primary hover:bg-accent transition-colors">EDIT</button>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-3">Target: 10,000 • Current: 8,420</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Progress</span>
                <span className="text-sm font-black text-primary">84%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '84%' }}></div>
              </div>
              <p className="mt-5 text-sm font-medium text-slate-500 leading-relaxed flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-slate-400">info</span>
                Almost there! Just a short walk away.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-50 shadow-subtle hover:shadow-lg transition-all duration-300">
          <div className="p-8">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-2xl bg-accent flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-primary font-bold">water_drop</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-extrabold text-slate-800 mb-1">Water Intake</h3>
                  <button className="px-3 py-1 rounded-lg text-slate-400 text-xs font-bold hover:text-primary hover:bg-accent transition-colors">EDIT</button>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-3">Target: 3L • Current: 1.2L</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Progress</span>
                <span className="text-sm font-black text-primary">40%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="mt-5 text-sm font-medium text-slate-500 leading-relaxed flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-slate-400">info</span>
                Stay hydrated! Remember to drink more water.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-50 shadow-subtle hover:shadow-lg transition-all duration-300">
          <div className="p-8">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-2xl bg-accent flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-primary font-bold">bedtime</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-extrabold text-slate-800 mb-1">Sleep Duration</h3>
                  <button className="px-3 py-1 rounded-lg text-slate-400 text-xs font-bold hover:text-primary hover:bg-accent transition-colors">EDIT</button>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-3">Target: 8h • Average: 6.5h</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Progress</span>
                <span className="text-sm font-black text-primary">81%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '81%' }}></div>
              </div>
              <p className="mt-5 text-sm font-medium text-slate-500 leading-relaxed flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-slate-400">info</span>
                Focus on resting better this week.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-10 rounded-3xl bg-white border border-slate-50 shadow-subtle">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-green-50 text-green-600 text-xs font-bold mb-6">
              <span className="material-symbols-outlined text-[16px] font-bold">trending_up</span>
              PERFORMANCE TREND
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Weekly Performance Overview</h2>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed max-w-xl">
              Your overall progress this week is <span className="text-primary font-black">12% higher</span> than last week. You've hit your steps goal 4 days in a row!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-widest font-bold">Heart Rate</p>
                <p className="text-2xl font-black text-slate-800">72 <span className="text-xs font-bold text-slate-400 uppercase">bpm</span></p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-widest font-bold">Active Cal</p>
                <p className="text-2xl font-black text-slate-800">2.4k <span className="text-xs font-bold text-slate-400 uppercase">kcal</span></p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-widest font-bold">Workouts</p>
                <p className="text-2xl font-black text-slate-800">5 <span className="text-xs font-bold text-slate-400 uppercase">total</span></p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-widest font-bold">Streak</p>
                <p className="text-2xl font-black text-slate-800">14 <span className="text-xs font-bold text-slate-400 uppercase">days</span></p>
              </div>
            </div>
          </div>
          <div className="w-56 h-56 bg-accent rounded-full border-8 border-white shadow-subtle flex items-center justify-center relative flex-shrink-0">
            <div className="text-center z-10">
              <p className="text-5xl font-black text-primary">74%</p>
              <p className="text-[11px] uppercase font-bold text-slate-400 tracking-wider mt-1">Avg Completion</p>
            </div>
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle className="text-slate-100" cx="50%" cy="50%" fill="transparent" r="44%" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-primary" cx="50%" cy="50%" fill="transparent" r="44%" stroke="currentColor" strokeDasharray="310" strokeDashoffset="80" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
