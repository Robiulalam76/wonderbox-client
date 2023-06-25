import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/icons/sendEmail.png";

const EmailVerifyModal = ({ email }) => {
  return (
    <div className="fixed z-40 min-h-screen min-w-full left-0 right-0 top-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center cursor-pointer">
      <div
        className={`z-500 w-80 md:w-[600px] h-96 p-4 flex flex-col justify-center items-center gap-4 rounded-xl border bg-white zoom-in`}
      >
        <img draggable={false} className="w- h-44" src={img} alt="" />
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p>
            You've entered <strong>{email}</strong> as the email address for
            your account.
          </p>
          <p>please verify this email address</p>
          <Link
            target="_blank"
            to="https://mail.google.com/"
            className="w-44 h-12 bg-blue-600 hover:bg-blue-700 duration-150 flex items-center justify-center rounded text-white mx-auto"
          >
            <span>Go to Email</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifyModal;
