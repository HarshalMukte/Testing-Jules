import { Header } from '../components/Header';
import { StatCards } from '../components/StatCards';
import { ActivityOverview } from '../components/ActivityOverview';
import { TargetGoal } from '../components/TargetGoal';
import { BottomStats } from '../components/BottomStats';

export function Dashboard() {
  return (
    <>
      <Header />
      <StatCards />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <ActivityOverview />
        <TargetGoal />
      </section>
      <BottomStats />
    </>
  );
}
