import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="w-72 flex-shrink-0 border-r border-slate-100 bg-white flex flex-col justify-between p-8">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2.5 rounded-xl">
            <span className="material-symbols-outlined text-primary text-2xl font-bold">exercise</span>
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">FitPulse</h1>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Health Ecosystem</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1.5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${isActive ? 'bg-primary text-white font-medium shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50 hover:text-primary'}`
            }
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </NavLink>
          <NavLink
            to="/workouts"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${isActive ? 'bg-primary text-white font-medium shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50 hover:text-primary'}`
            }
          >
            <span className="material-symbols-outlined">fitness_center</span>
            <span className="text-sm">Workouts</span>
          </NavLink>
          <NavLink
            to="/nutrition"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${isActive ? 'bg-primary text-white font-medium shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50 hover:text-primary'}`
            }
          >
            <span className="material-symbols-outlined">restaurant</span>
            <span className="text-sm">Nutrition</span>
          </NavLink>
          <NavLink
            to="/goals"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${isActive ? 'bg-primary text-white font-medium shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50 hover:text-primary'}`
            }
          >
            <span className="material-symbols-outlined">insights</span>
            <span className="text-sm">Goals</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${isActive ? 'bg-primary text-white font-medium shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50 hover:text-primary'}`
            }
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm">Settings</span>
          </NavLink>
        </nav>
      </div>
      <div className="flex flex-col gap-6">
        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all">
          <span className="material-symbols-outlined text-xl">add</span>
          <span>New Workout</span>
        </button>
        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <img alt="User profile" className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi-FU4S9NHpV5F8vioqGKTce9raalOsI_MPhSjkI7J-VHoOFIxdhmfXOcn_G5UmCLQzIqYBjZIIvqns-JMFLCkVa04Lpik-O6jHESzpMebZ8goioJzqS6k2icEJzlPiEoUur70y8tyKp_R6oWvtjiC8fKGupAUMnXjvE0YvzqY3hBwbtn2cSFWpQMm3yKpd_40lGrzTTG3ThqSlYBBny8TnKH1AbWRmM2qQc42tAx9znq0dWBBMZ1vurlATENXJ9AzI0XoxLevMrU"/>
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-slate-900 truncate">Alex Johnson</p>
            <p className="text-[11px] text-slate-400 font-medium truncate">Pro Tier</p>
          </div>
          <span className="material-symbols-outlined text-slate-300 ml-auto text-lg">unfold_more</span>
        </div>
      </div>
    </aside>
  );
}
