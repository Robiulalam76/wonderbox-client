import React from "react";
import { Drawer } from "@material-tailwind/react";
import DashboardDrawerData from "./DashboardDrawerData";
import { setOpenDashboardDrawer } from "../../Slices/controllerSlice";
import { useDispatch, useSelector } from "react-redux";

const DashboardDrawer = () => {
  const { openDashboardDrawer } = useSelector((state) => state.controllerSlice);
  const dispatch = useDispatch();

  return (
    <>
      <Drawer
        open={openDashboardDrawer}
        onClose={() => dispatch(setOpenDashboardDrawer(false))}
        placement="left"
        className="lg:hidden w-60 bg-[#1E2F32] h-screen"
      >
        <DashboardDrawerData />
      </Drawer>
      <div className="hidden lg:block w-60 bg-[#1E2F32] h-screen">
        <div className="w-60 bg-[#1E2F32] h-screen fixed">
          <DashboardDrawerData />
        </div>
      </div>
    </>
  );
};

export default DashboardDrawer;
