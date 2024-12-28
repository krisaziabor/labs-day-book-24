'use client'


import NameForm from './components/yaleStatus';
import FinalizeOrder from './components/finalizeOrder';

export default function Home() {
  return (
    <div className="container">
      <NameForm />
      <br />
      <FinalizeOrder />
    </div>
  );
}
