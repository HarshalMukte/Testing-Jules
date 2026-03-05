import { useState } from 'react';

type Template = {
  id: string;
  name: string;
  details: string;
  icon: string;
};

type WorkoutBlock = {
  id: string;
  templateId: string;
  name: string;
  details: string;
  time?: string;
};

let _idCounter = 0;
const generateId = () => {
  _idCounter += 1;
  return `id-${_idCounter}`;
};

export function Workouts() {
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [duration, setDuration] = useState('');

  const [schedule, setSchedule] = useState<Record<string, WorkoutBlock[]>>({
    MON: [{ id: 'wb1', templateId: '1', name: 'Chest & Triceps', details: '45 min • High Intensity', time: '08:00 AM' }],
    TUE: [{ id: 'wb2', templateId: '0', name: 'Back & Biceps', details: 'Completed', time: '07:30 AM' }],
    WED: [{ id: 'wb3', templateId: '0', name: 'Leg Day Routine', details: 'Active Now' }],
    THU: [{ id: 'wb4', templateId: '0', name: 'Active Recovery', details: 'Mobility & Flow' }],
    FRI: [{ id: 'wb5', templateId: '0', name: 'Shoulder Press', details: 'Weight: 45kg • 4x10', time: '05:00 PM' }],
    SAT: [{ id: 'wb6', templateId: '0', name: 'Outdoor Run', details: '5km • Zone 2', time: '10:00 AM' }],
    SUN: []
  });

  const handleDragStart = (e: React.DragEvent, template: Template) => {
    e.dataTransfer.setData('templateId', template.id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, day: string) => {
    e.preventDefault();
    const templateId = e.dataTransfer.getData('templateId');
    const template = templates.find(t => t.id === templateId);

    if (template) {
      const uniqueId = generateId();
      const newBlock: WorkoutBlock = {
        id: uniqueId,
        templateId: template.id,
        name: template.name,
        details: template.details,
      };

      setSchedule(prev => ({
        ...prev,
        [day]: [...prev[day], newBlock]
      }));
    }
  };

  const [templates, setTemplates] = useState<Template[]>([
    { id: '1', name: 'Chest Day', details: '6 exercises • 60 mins', icon: 'fitness_center' },
    { id: '2', name: 'Morning HIIT', details: '30 mins • Active recovery', icon: 'directions_run' },
    { id: '3', name: 'Yoga Flow', details: '20 mins • Mobility', icon: 'self_improvement' }
  ]);

  const [view, setView] = useState<'Week' | 'Month'>('Week');

  const handleAddTemplate = () => {
    if (!exerciseName.trim()) return;

    const uniqueId = generateId();
    const newTemplate: Template = {
      id: uniqueId,
      name: exerciseName,
      details: `${sets ? sets + ' sets' : ''} ${reps ? '• ' + reps + ' reps' : ''} ${duration ? '• ' + duration + ' mins' : ''}`,
      icon: 'exercise'
    };

    setTemplates([newTemplate, ...templates]);
    setExerciseName('');
    setSets('');
    setReps('');
    setDuration('');
  };

  return (
    <div className="flex flex-col xl:flex-row gap-8 min-h-full">
      {/* Left Sidebar for Adding/Templates */}
      <aside className="w-full xl:w-80 flex-shrink-0 bg-white border border-slate-100 p-6 rounded-3xl flex flex-col gap-6 shadow-subtle">
        <div>
          <h3 className="text-slate-900 text-lg font-bold mb-1">Add Exercise</h3>
          <p className="text-slate-500 text-sm">Customize your training session</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleAddTemplate(); }}>
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Exercise Name</label>
            <input
              className="w-full rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm py-3 px-4 transition-all"
              placeholder="e.g. Bench Press"
              type="text"
              value={exerciseName}
              onChange={e => setExerciseName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Sets</label>
              <input
                className="w-full rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm py-3 px-4 transition-all"
                placeholder="4"
                type="number"
                min="1"
                value={sets}
                onChange={e => setSets(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Reps</label>
              <input
                className="w-full rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm py-3 px-4 transition-all"
                placeholder="12"
                type="number"
                min="1"
                value={reps}
                onChange={e => setReps(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Duration (mins)</label>
            <input
              className="w-full rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm py-3 px-4 transition-all"
              placeholder="45"
              type="number"
              min="1"
              value={duration}
              onChange={e => setDuration(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 mt-2 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-xl">add</span>
            Create Block
          </button>
        </form>

        <div className="mt-4 flex-1">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Saved Templates</h4>
          <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
            {templates.map(template => (
              <div
                key={template.id}
                draggable
                onDragStart={(e) => handleDragStart(e, template)}
                className="p-4 bg-white border border-slate-100 rounded-2xl cursor-grab hover:border-primary/30 hover:shadow-md transition-all group active:cursor-grabbing"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-accent rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-xl">{template.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{template.name}</p>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">{template.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Weekly Planner Area */}
      <section className="flex-1 flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-subtle min-w-0">
        {/* Header */}
        <div className="px-8 py-8 flex flex-wrap items-center justify-between gap-6 border-b border-slate-100 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Weekly Planner</h1>
            <p className="text-slate-500 text-sm font-medium mt-1">October 23 - October 29, 2023</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-slate-50 p-1 rounded-xl flex border border-slate-100 shadow-sm">
              <button
                onClick={() => setView('Week')}
                className={`px-5 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors ${view === 'Week' ? 'bg-white text-primary' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Week
              </button>
              <button
                onClick={() => setView('Month')}
                className={`px-5 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors ${view === 'Month' ? 'bg-white text-primary' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Month
              </button>
            </div>
            <button
              onClick={() => alert('Today clicked')}
              className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-lg">calendar_today</span>
              Today
            </button>
            <button
              onClick={() => alert('Plan saved!')}
              className="bg-primary px-6 py-2.5 rounded-xl text-white text-sm font-bold hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all"
            >
              Save Plan
            </button>
          </div>
        </div>

        {/* Weekly Grid */}
        <div className="flex-1 overflow-x-auto custom-scrollbar p-8">
          <div className="min-w-[1100px] h-full grid grid-cols-7 gap-6">

            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, idx) => (
              <div key={day} className="flex flex-col gap-4">
                <div className="text-center py-2">
                  <span className={`block text-[11px] font-bold uppercase tracking-widest mb-1 ${day === 'WED' ? 'text-primary' : 'text-slate-400'}`}>{day}</span>
                  <span className={`text-2xl font-bold ${day === 'WED' ? 'text-primary font-black text-3xl' : 'text-slate-900'}`}>{23 + idx}</span>
                </div>
                <div
                  className={`flex-1 rounded-3xl border-2 border-dashed p-4 flex flex-col gap-4 transition-colors ${day === 'WED' ? 'bg-accent/40 border-primary/20 shadow-sm' : 'bg-slate-50/80 border-slate-200 hover:border-primary/30'} ${schedule[day]?.length === 0 ? 'items-center justify-center' : ''}`}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, day)}
                >
                  {schedule[day]?.map(block => (
                    <div key={block.id} className={`bg-accent border-l-4 border-primary p-4 rounded-r-2xl shadow-sm hover:shadow-md transition-shadow ${block.name === 'Leg Day Routine' ? 'bg-primary text-white border-none rounded-2xl shadow-lg shadow-primary/30 transform hover:-translate-y-1 transition-transform' : ''} ${block.details === 'Completed' ? 'bg-white border-l-slate-300 opacity-60' : ''}`}>
                      <div className="flex justify-between items-start mb-2">
                        {block.time ? (
                          <p className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${block.details === 'Completed' ? 'bg-slate-100 text-slate-500' : 'bg-primary/10 text-primary-dark'}`}>
                            {block.time}
                          </p>
                        ) : block.name === 'Leg Day Routine' ? (
                          <div className="flex items-center gap-1.5 bg-white/20 px-2 py-1 rounded-md">
                            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                            <p className="text-[10px] font-black text-white uppercase tracking-wider">ACTIVE NOW</p>
                          </div>
                        ) : (
                          <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">NEW</p>
                        )}

                        {block.details === 'Completed' ? (
                          <span className="material-symbols-outlined text-[20px] text-primary">check_circle</span>
                        ) : block.name === 'Leg Day Routine' ? (
                          <span className="material-symbols-outlined text-[20px]">timer</span>
                        ) : (
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        )}
                      </div>
                      <p className={`text-sm font-bold ${block.name === 'Leg Day Routine' ? '' : 'text-slate-800'} ${block.details === 'Completed' ? 'line-through text-slate-500' : ''}`}>
                        {block.name}
                      </p>

                      {block.name === 'Leg Day Routine' ? (
                        <div className="w-full bg-black/10 h-1.5 rounded-full mt-4 overflow-hidden">
                          <div className="bg-white h-full w-2/3 rounded-full relative">
                            <div className="absolute inset-0 bg-white/50 animate-pulse"></div>
                          </div>
                        </div>
                      ) : (
                        <p className={`text-[11px] mt-1.5 font-medium ${block.details === 'Completed' ? 'text-slate-400 uppercase font-bold tracking-wider' : 'text-slate-500'}`}>
                          {block.details}
                        </p>
                      )}
                    </div>
                  ))}

                  {day === 'WED' && (
                    <div className="flex-1 flex items-center justify-center border-2 border-dashed border-primary/20 rounded-2xl hover:bg-primary/5 transition-colors cursor-pointer group min-h-[100px]">
                      <span className="material-symbols-outlined text-primary/30 group-hover:text-primary transition-colors text-3xl">add_circle</span>
                    </div>
                  )}

                  {schedule[day]?.length === 0 && day === 'SUN' && (
                     <div className="text-center opacity-60">
                       <span className="material-symbols-outlined text-slate-300 text-5xl mb-2">weekend</span>
                       <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Rest Day</p>
                     </div>
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
