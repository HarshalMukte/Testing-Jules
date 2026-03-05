export function ActivityOverview() {
  return (
    <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-subtle border border-slate-50">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900">Activity Overview</h3>
          <p className="text-sm text-slate-400 font-medium">Workout frequency over time</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-50 text-slate-400">Monthly</button>
          <button className="px-4 py-2 text-xs font-bold rounded-xl bg-primary/10 text-primary">Weekly</button>
        </div>
      </div>
      <div className="h-[280px] w-full relative">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 250">
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15"></stop>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <line className="text-slate-100" stroke="currentColor" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
          <line className="text-slate-100" stroke="currentColor" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
          <line className="text-slate-100" stroke="currentColor" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
          <line className="text-slate-100" stroke="currentColor" strokeWidth="1" x1="0" x2="800" y1="200" y2="200"></line>
          <path d="M0,180 C100,160 150,220 200,120 S300,50 400,100 S500,180 600,60 S700,40 800,90 L800,250 L0,250 Z" fill="url(#chartGradient)"></path>
          <path d="M0,180 C100,160 150,220 200,120 S300,50 400,100 S500,180 600,60 S700,40 800,90" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeWidth="4"></path>
          <circle cx="200" cy="120" fill="#3b82f6" r="6" stroke="white" strokeWidth="3"></circle>
          <circle cx="400" cy="100" fill="#3b82f6" r="6" stroke="white" strokeWidth="3"></circle>
          <circle cx="600" cy="60" fill="#3b82f6" r="6" stroke="white" strokeWidth="3"></circle>
        </svg>
        <div className="flex justify-between mt-6 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}
