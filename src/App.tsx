import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StatCards } from './components/StatCards';
import { ActivityOverview } from './components/ActivityOverview';
import { TargetGoal } from './components/TargetGoal';
import { BottomStats } from './components/BottomStats';
import { PersonalGoals } from './components/PersonalGoals';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto custom-scrollbar p-10 bg-background">
        <Header />
        <StatCards />
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <ActivityOverview />
          <TargetGoal />
        </section>
        <BottomStats />
        <PersonalGoals />
      </main>
    </div>
  );
}

export default App;
