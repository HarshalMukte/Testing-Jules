import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Goals() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
    // The visual look is achieved by having two datasets overlapping or just one dataset with an empty track.
    // Given ChartJS handles datasets from outer to inner, we will use a single dataset with a custom plugin
    // or two datasets. Actually, in Chart.js v3/v4 you can just draw a background on the chart area,
    // but the easiest way is a single dataset with a background color for the empty part.
  };

  const singleDatasetData = {
    datasets: [{
      data: [74, 26],
      backgroundColor: ['#3b82f6', '#f1f5f9'],
      borderWidth: 0,
      borderRadius: [20, 0], // Only round the active part if possible, or just round all
      cutout: '88%',
    }]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Personal Fitness Goals</h1>
          <p className="text-slate-500 font-medium">Track and manage your health targets for the month.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all shadow-md shadow-primary/10">
          <span className="material-symbols-outlined text-sm">add</span>
          Add New Goal
        </button>
      </div>

      <div className="flex border-b border-slate-200 mb-8 overflow-x-auto">
        <button className="px-6 py-3 text-sm font-semibold border-b-2 border-primary text-primary">Active Goals</button>
        <button className="px-6 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">Completed</button>
        <button className="px-6 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">Templates</button>
      </div>

      {/* Goal Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-slate-100 shadow-subtle hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-xl bg-accent flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-primary">monitor_weight</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Weight Goal</h3>
                  <button className="px-3 py-1 rounded-md text-slate-400 text-xs font-semibold hover:text-primary hover:bg-accent transition-colors">EDIT</button>
                </div>
                <p className="text-slate-500 text-sm mb-3">Target: 75kg • Current: 78kg</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Progress</span>
                <span className="text-sm font-bold text-primary">65%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                <span className="material-symbols-outlined text-sm align-middle mr-1 text-slate-400">info</span>
                You are 3kg away from your target. Keep it up!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 shadow-subtle hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-xl bg-accent flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-primary">steps</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Daily Steps</h3>
                  <button className="px-3 py-1 rounded-md text-slate-400 text-xs font-semibold hover:text-primary hover:bg-accent transition-colors">EDIT</button>
                </div>
                <p className="text-slate-500 text-sm mb-3">Target: 10,000 • Current: 8,420</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Progress</span>
                <span className="text-sm font-bold text-primary">84%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '84%' }}></div>
              </div>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                <span className="material-symbols-outlined text-sm align-middle mr-1 text-slate-400">info</span>
                Almost there! Just a short walk away.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 shadow-subtle hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-xl bg-accent flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-primary">water_drop</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Water Intake</h3>
                  <button className="px-3 py-1 rounded-md text-slate-400 text-xs font-semibold hover:text-primary hover:bg-accent transition-colors">EDIT</button>
                </div>
                <p className="text-slate-500 text-sm mb-3">Target: 3L • Current: 1.2L</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Progress</span>
                <span className="text-sm font-bold text-primary">40%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                <span className="material-symbols-outlined text-sm align-middle mr-1 text-slate-400">info</span>
                Stay hydrated! Remember to drink more water.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 shadow-subtle hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-xl bg-accent flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-primary">bedtime</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Sleep Duration</h3>
                  <button className="px-3 py-1 rounded-md text-slate-400 text-xs font-semibold hover:text-primary hover:bg-accent transition-colors">EDIT</button>
                </div>
                <p className="text-slate-500 text-sm mb-3">Target: 8h • Average: 6.5h</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Progress</span>
                <span className="text-sm font-bold text-primary">81%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '81%' }}></div>
              </div>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                <span className="material-symbols-outlined text-sm align-middle mr-1 text-slate-400">info</span>
                Focus on resting better this week.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="mt-16 p-10 rounded-2xl bg-white border border-slate-100 shadow-subtle">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold mb-4">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              PERFORMANCE TREND
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Weekly Performance Overview</h2>
            <p className="text-slate-500 mb-8 leading-relaxed max-w-xl">
              Your overall progress this week is <span className="text-primary font-bold">12% higher</span> than last week. You've hit your steps goal 4 days in a row!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest font-bold">Heart Rate</p>
                <p className="text-xl font-bold text-slate-800">72 <span className="text-xs font-normal text-slate-400 uppercase">bpm</span></p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest font-bold">Active Cal</p>
                <p className="text-xl font-bold text-slate-800">2.4k <span className="text-xs font-normal text-slate-400 uppercase">kcal</span></p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest font-bold">Workouts</p>
                <p className="text-xl font-bold text-slate-800">5 <span className="text-xs font-normal text-slate-400 uppercase">total</span></p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest font-bold">Streak</p>
                <p className="text-xl font-bold text-slate-800">14 <span className="text-xs font-normal text-slate-400 uppercase">days</span></p>
              </div>
            </div>
          </div>
          <div className="w-48 h-48 bg-accent rounded-full border-4 border-white shadow-soft flex items-center justify-center relative flex-shrink-0">
            <div className="text-center z-10 absolute flex flex-col items-center justify-center w-full h-full">
              <p className="text-4xl font-black text-primary">74%</p>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-tight">Avg Completion</p>
            </div>
            <div className="w-full h-full relative z-20">
              <Doughnut data={singleDatasetData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
