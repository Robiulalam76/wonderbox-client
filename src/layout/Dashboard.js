import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardDrawer from "../components/drawers/DashboardDrawer";
import DashboardNavber from "../components/Shared/DashboardNavber";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="relative" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="flex justify-between items-start min-h-screen h-full">
        <DashboardDrawer open={open} />
        <div className="flex-grow">
          <DashboardNavber open={open} setOpen={setOpen} />
          <div className="md:px-4 md:py-4 w-full max-h-screen overflow-y-auto scrollBar">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
