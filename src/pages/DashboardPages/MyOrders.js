import React, { useContext, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import QRCode from "react-qr-code";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import OrderTable from "../../components/tables/OrderTable";
import { AuthContext } from "../../ContextAPI/AuthProvider";

const tabs = ["Wallet", "Package"];

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [selectType, setSelectType] = useState("Wallet");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [products, setProducts] = useState([]);

  const fetchOrders = () => {
    fetch(
      `${process.env.REACT_APP_API_KEY}/api/card/getcards/${
        user?._id
      }/${selectType}?page=${currentPage ? currentPage : 1}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setCurrentPage(data.page);
        setTotalPages(data.totalPages);
      });
  };

  console.log(products, currentPage);

  useEffect(() => {
    fetchOrders();
  }, [currentPage, selectType, setSelectType]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Card className="h-full max-w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex flex-col items-start md:items-center md:justify-between gap-4 md:flex-row mt-2">
          <div className="grid grid-cols-2">
            {tabs.map((item, i) => (
              <Button
                key={i}
                onClick={() => setSelectType(item)}
                className={`w-full rounded-none shadow-none hover:shadow-none h-10
                                ${
                                  selectType === item
                                    ? "bg-primary"
                                    : "bg-blue-gray-50 text-black"
                                }`}
              >
                {item}
              </Button>
            ))}
          </div>
          {/* <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div> */}
        </div>
      </CardHeader>

      <table className="w-full text-left mt-4 overflow-x-auto">
        <thead>
          <tr>
            <th className="bg-blue-500 p-4 text-left text-white">
              <Typography
                variant="small"
                color="white"
                className="font-normal leading-none"
              >
                image
              </Typography>
            </th>
            <th className="bg-blue-500 p-4 text-left text-white">
              <Typography
                variant="small"
                color="white"
                className="font-normal leading-none"
              >
                Title
              </Typography>
            </th>
            <th className="bg-blue-500 p-4 text-left text-white">
              <Typography
                variant="small"
                color="white"
                className="font-normal leading-none"
              >
                Amount
              </Typography>
            </th>
            <th className="bg-blue-500 p-4 text-left text-white">
              <Typography
                variant="small"
                color="white"
                className="font-normal leading-none"
              >
                Pay
              </Typography>
            </th>
            <th className="bg-blue-500 p-4 text-left text-white">
              <Typography
                variant="small"
                color="white"
                className="font-normal leading-none"
              >
                State
              </Typography>
            </th>
            <th className="bg-blue-500 p-4 text-left text-white">
              <Typography
                variant="small"
                color="white"
                className="font-normal leading-none"
              >
                Date
              </Typography>
            </th>
            <th className="bg-blue-500 p-4 text-left text-white">
              <Typography
                variant="small"
                color="white"
                className="font-normal leading-none"
              >
                Action
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody className="overflow-scroll px-0">
          {products?.map((product, i) => (
            <OrderTable key={i} data={product} />
          ))}
        </tbody>
      </table>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {totalPages}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            color="blue-gray"
            size="sm"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="blue-gray"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MyOrders;
