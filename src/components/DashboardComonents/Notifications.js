import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextAPI/AuthProvider";

import notification from "../../assets/icons/no-notification.png";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { Spinner } from "@material-tailwind/react";

const order = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-full h-full text-primary"
  >
    <path
      fill-rule="evenodd"
      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
      clip-rule="evenodd"
    />
  </svg>
);

const review = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-full h-full text-yellow-600"
  >
    <path
      fill-rule="evenodd"
      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
      clip-rule="evenodd"
    />
  </svg>
);

const new_user = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-8 h-8 text-blue-600"
  >
    <path
      fill-rule="evenodd"
      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      clip-rule="evenodd"
    />
  </svg>
);
const addCart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-7 h-7 text-pink-600"
  >
    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
  </svg>
);
const address = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-7 h-7 text-yellow-900"
  >
    <path
      fill-rule="evenodd"
      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
      clip-rule="evenodd"
    />
  </svg>
);

const Notifications = () => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetch(`${process.env.REACT_APP_API_KEY}/api/notification/user/${user?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
        setIsloading(false);
      });
  }, []);
  return (
    <>
      <div className="bg-white overflow-hidden w-full max-w-xs h-96 overflow-y-auto">
        <div className="py-2 h-full">
          {isLoading && (
            <div className="flex justify-center items-center mt-10">
              <Spinner />
            </div>
          )}

          {!isLoading && (
            <>
              {notifications?.length > 0 ? (
                <>
                  {notifications?.map((notify) => (
                    <div
                      key={notify?._id}
                      className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2 cursor-pointer"
                    >
                      <div className="h-8 w-8 rounded-full object-cover mx-1">
                        {notify?.type === "new_order" && order}
                        {notify?.type === "review" && review}
                        {notify?.type === "new_user" && new_user}
                        {notify?.type === "add_cart" && addCart}
                        {notify?.type === "address" && address}
                      </div>

                      <p className="text-gray-600 text-sm mx-2">
                        <span className="font-bold">
                          {notify?.type === "new_user" && (
                            <p className="text-blue-600 font-bold">
                              Congratulations!{" "}
                            </p>
                          )}
                          {notify?.title}{" "}
                          <span className="uppercase font-bold text-blue-500">
                            #{notify._id.slice(0, 6)}
                          </span>
                        </span>
                        <span className="block text-xs mt-1">
                          {moment(notify?.createAt).fromNow()}
                        </span>
                      </p>
                    </div>
                  ))}
                </>
              ) : (
                <img className="w-28 mx-auto" src={notification} alt="" />
              )}
            </>
          )}
        </div>
      </div>
      <button className="block bg-gray-800 text-white text-center font-bold py-2 w-full">
        See all notifications
      </button>
    </>
  );
};

export default Notifications;
