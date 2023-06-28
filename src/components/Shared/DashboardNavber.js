import React, { useContext, useState } from "react";

// import search from "../../../assets/icons/search.png"
// import avater from "../../../assets/icons/avater.png"
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Chip,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { setOpenDashboardDrawer } from "../../Slices/controllerSlice";
import Notifications from "../DashboardComonents/Notifications";
const DashboardNavber = () => {
  const { user, setUser, logout } = useContext(AuthContext);
  const { openDashboardDrawer } = useSelector((state) => state.controllerSlice);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("wonderboxtoken");
    logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="w-full">
      <div className="flex items-center gap-4 w-full bg-white h-16 shadow-sm px-2 lg:px-8">
        <button
          onClick={() => dispatch(setOpenDashboardDrawer(!openDashboardDrawer))}
          className="w-10 lg:hidden text-primary hover:text-darkPrimary duration-300 cursor-pointer"
        >
          {openDashboardDrawer ? (
            <span>
              <svg
                className="w-8 "
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          ) : (
            <span>
              <svg
                className="w-6 ml-2 "
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 12 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
                ></path>
              </svg>
            </span>
          )}
        </button>

        <Chip
          value={
            <Typography
              variant="small"
              color="white"
              className="font-medium capitalize leading-none"
            >
              {user?.role}: ₹ {user?.wallet}
            </Typography>
          }
          color="teal"
          className="rounded-full py-1.5"
        />

        <div className="flex-grow flex justify-end items-center gap-4 lg:gap-8">
          <Popover className="cursor-pointer">
            <PopoverHandler>
              <button className="flex items-center justify-center text-pink-600 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-8 h-8"
                >
                  <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </PopoverHandler>
            <PopoverContent className="mr-10 w-80">
              <Notifications />
            </PopoverContent>
          </Popover>

          <Popover className="cursor-pointer">
            <PopoverHandler>
              <Avatar
                className="cursor-pointer"
                src={
                  user?.image
                    ? user?.image
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
              ></Avatar>
            </PopoverHandler>
            <PopoverContent className="flex flex-col gap-4 w-fit h-32 lg:hidden">
              <div className="flex flex-col justify-center items-center px-3">
                <h1 className="font-bold text-black">Md. Robiul Alam</h1>
                <p className="text-gray-800">{user?.email}</p>
              </div>
              <div onClick={() => handleLogout()}>
                <span className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Logout
                  </span>
                </span>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavber;
