import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '@/constants';
import { Button } from '@/components/atoms';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {[
        { to: ROUTE.ANIMATION, label: 'Animation' },
        { to: ROUTE.CONTINUES_VOICE, label: 'Continues Voice' },
      ].map(({ to, label }) => (
        <Link key={label} to={to}>
          <Button>{label}</Button>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
