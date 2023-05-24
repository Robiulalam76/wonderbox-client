import React, { useContext, useEffect, useState, } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import QRCode from 'react-qr-code';
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Tabs,
    TabsHeader,
    Tab,
    Input,
} from "@material-tailwind/react";
import OrderTable from '../../components/tables/OrderTable';
import { AuthContext } from '../../ContextAPI/AuthProvider';

const tabs = ["Wallet", "Package"];

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [selectType, setSelectType] = useState("Wallet")

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10); // Assuming there are 10 pages in total
    const [products, setProducts] = useState([]); // Your array of products goes here
    const itemsPerPage = 10; // Number of products to display per page

    useEffect(() => {
        fetch(`http://localhost:5000/api/card/getcards/${user?._id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.data)
            })
    }, [])


    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Calculate the range of products to display based on the current page and items per page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the products to display on the current page
    const productsToShow = products.slice(startIndex, endIndex);
    const hasMoreProducts = endIndex < products.length;


    return (

        <Card className="h-full max-w-full">

            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        Order Card list
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        See information about all Order Cards
                    </Typography>
                </div>
                <div className="flex flex-col items-start md:items-center md:justify-between gap-4 md:flex-row mt-2">
                    <div className='grid grid-cols-2' >
                        {tabs.map((item, i) => (
                            <Button key={i} onClick={() => setSelectType(item)}
                                className={`w-full rounded-none shadow-none hover:shadow-none h-10
                                ${selectType === item ? "bg-primary" : "bg-blue-gray-50 text-black"}`} >
                                {item}
                            </Button>
                        ))}
                    </div>
                    <div className="w-full md:w-72">
                        <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                    </div>
                </div>
            </CardHeader>


            <table className="w-full text-left mt-4">
                <thead>
                    <tr>
                        <th className="bg-blue-500 p-4 text-left text-white">
                            <Typography
                                variant="small"
                                color="white"
                                className="font-normal leading-none"
                            >
                                QR Code
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
                                Status
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
                <tbody className="overflow-scroll px-0" >
                    {
                        productsToShow?.map((product, i) => <OrderTable data={product} />)
                    }
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
                        disabled={currentPage === 1}
                        onClick={handlePreviousPage}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outlined"
                        color="blue-gray"
                        size="sm"
                        disabled={!hasMoreProducts}
                        onClick={handleNextPage}
                    >
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>

    );
};

export default MyOrders;