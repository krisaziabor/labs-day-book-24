'use client'


import NameForm from './components/yaleStatus';
import FinalizeOrder from './components/finalizeOrder';

export default function Home() {
  return (
    <div className="container font-[family-name:var(--font-abc-diatype)]">
      <NameForm />
      <br />
      <FinalizeOrder />
    </div>
  );
}
