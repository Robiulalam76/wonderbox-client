import {
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Chip,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

import paypal from "../../assets/icons/paypal.png";
import moment from "moment";

export default function OrderTable({ data }) {
  return (
    <tr className="w-full py-4 bg-blue-gray-50 border-b border-white">
      <td className="text-white px-4 py-2">
        <div className="flex items-center gap-3">
          <Avatar
            src={data?.productId?.images[0]}
            alt=""
            size="md"
            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
          />
        </div>
      </td>
      <td className="text-white px-4 py-2">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {data?.title}
        </Typography>
      </td>
      <td className="text-white px-4 py-2">
        <Typography variant="small" color="blue-gray" className="font-normal">
          ₹ {data?.price}
        </Typography>
      </td>
      <td className="text-white px-4 py-2">
        {data?.payment ? (
          <Avatar
            src={data?.payment?.method === "Paypal" && paypal}
            alt=""
            size="md"
            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
          />
        ) : (
          <Chip
            size="sm"
            className="w-fit"
            color="red"
            variant="ghost"
            value="Offline"
          />
        )}
      </td>
      <td className="text-white px-4 py-2">
        <Chip
          size="sm"
          className="w-fit"
          color={data?.state === "Enable" ? "green" : "red"}
          variant="ghost"
          value={data?.state === "Enable" ? "Active" : "Used"}
        />
      </td>
      <td className="text-white px-4 py-2">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {moment(data.createdAt).format("DD/MMM/YYYY")}
        </Typography>
      </td>

      <td className="text-white px-4 py-2 flex items-center gap-2">
        <Tooltip content="Edit User">
          <Link to={`/dashboard/orders/${data?._id}`}>
            <IconButton
              variant="text"
              color="blue"
              className="font-bold bg-blue-50"
            >
              <svg
                class="w-6 h-6 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </IconButton>
          </Link>
        </Tooltip>
      </td>
    </tr>
  );
}
