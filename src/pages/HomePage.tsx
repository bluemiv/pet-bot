import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../constants";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {[
        { to: ROUTE.ANIMATION, label: "Animation" },
        { to: ROUTE.CONTINUES_SOUND, label: "Continues Sound" },
      ].map(({ to, label }) => (
        <Link key={label} className="rounded-xl bg-primary px-10 py-2" to={to}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
