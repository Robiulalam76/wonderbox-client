import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import img from "../../assets/icons/tick-mark.png";
import invalid from "../../assets/icons/invalid.png";
import { Dialog, Spinner } from "@material-tailwind/react";
import { AuthContext } from "../../ContextAPI/AuthProvider";

const RegistrationSuccess = () => {
  const { openToast } = useContext(AuthContext);
  const { token } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [result, setResult] = useState("");
  const [title, setTitle] = useState("");
  const [run, setRun] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    if (run) {
      return;
    }
    setRun(true);
    fetch(`http://localhost:5000/api/user/verify-to-registration`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          navigate("/login");
          openToast("success", data?.message);
          setIsLoading(false);
        } else if (data.success === false) {
          setTitle(false);
          setResult("Something went wrong");
          setOpenSuccessModal(true);
          setIsLoading(false);
        }
      });
  };

  handleVerify();

  return (
    <>
      <Dialog
        open={isLoading}
        size="xl"
        handler={() => isLoading(true)}
        className="flex justify-center items-center"
      >
        <div className="bg-white rounded-md shadow-md w-60 h-60 flex flex-col justify-center items-center gap-2">
          {/* <Spinner className="w-24 h-24" /> */}
          <h1 className="text-center">Please Wait</h1>
        </div>
      </Dialog>

      <Dialog
        open={openSuccessModal}
        size="xl"
        handler={() => setOpenSuccessModal(true)}
        className="flex justify-center items-center"
      >
        <div
          className={`z-500 w-80 md:w-[600px] h-96 p-4 flex flex-col justify-center items-center gap-4 rounded-xl border bg-white zoom-in`}
        >
          <img
            draggable={false}
            className="w-24"
            src={title ? img : invalid}
            alt=""
          />
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-gray-800 font-bold text-center text-2xl">
              {title ? "Verified!" : "Unverified!"}
            </h1>
            <p className="text-gray-800">{result}</p>
            {title ? (
              <Link
                to="/login"
                className="w-44 h-12 bg-blue-600 hover:bg-blue-700 duration-150 flex items-center justify-center rounded text-white mx-auto mt-2"
              >
                <span>Login Now</span>
              </Link>
            ) : (
              <Link
                to="/register"
                className="w-44 h-12 bg-blue-600 hover:bg-blue-700 duration-150 flex items-center justify-center rounded text-white mx-auto mt-2"
              >
                <span>Try Again</span>
              </Link>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default RegistrationSuccess;
