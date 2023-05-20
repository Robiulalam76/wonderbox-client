import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Rating,
    Option,
    Select,
} from "@material-tailwind/react";
import SHA256 from 'crypto-js/sha256';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';
import ProductImages from './ProductImages';

import bluer from "../../assets/icons/blue-right.png"
import ProductCard from '../cards/ProductCard';

const ProductDetails = () => {
    const { image } = useSelector((state) => state.productSlice)
    const product = useLoaderData()
    const [open, setOpen] = useState(false);
    const [unique, setUnique] = useState("");
    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/api/product/show/all`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])


    const [productData, setProductData] = useState(null);

    const handleQrCode = (p) => {
        const productData = {
            name: p?.title,
            price: p.price,
            id: p?._id
        }
        setProductData(productData)
        setOpen(true)
    }



    function generateUniqueCode(product) {
        handleQrCode(product)
        // Compute the SHA-256 hash of the product ID
        const hash = SHA256(product?.productId).toString();

        // Encode the hash value using Base64
        const encoded = btoa(hash);

        // Return the resulting unique code
        setUnique(encoded);
    }



    const handleBuy = () => {
        const newCard = {
            title: product?.title,
            productId: product?._id,
            userId: "6461e98f001ed5154abd5210",
            storeId: product?.storeId,
            features: [
                "For 2 people",
                "1 gourmet meal",
                "1,400 renowned restaurants and our selection of tables recommended by gastronomic guides"
            ],
            amount: product?.discount
        }
        if (newCard) {
            fetch(`http://localhost:5000/api/card/`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newCard)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        navigate("/dashboard/orders")
                    }
                    setOpen(false)
                })
        }

    }
    return (
        <div className='max-w-primary mx-auto px-4 min-h-screen'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-8 w-full'>
                <ProductImages images={product?.images} />

                <div className="col-span-1 grid grid-cols-1 gap-2 p-3 h-fit max-w-full">
                    <h1 className="flex-grow font-bold text-gray-800 md:text-3xl">{product?.title}</h1>
                    <div className="flex items-center gap-1">
                        <Rating value={5} readonly />
                        <Typography color="blue-gray" className="mt-1">
                            (5) Read reviews
                        </Typography>
                    </div>
                    <div className="flex flex-col gap-4 text-xl overflow-hidden">
                        {
                            product?.features.map((feature, i) => (
                                <li>{feature}</li>
                            ))
                        }
                    </div>

                    <div className='mt-6'>
                        <Typography className="font-bold">Description:</Typography>
                        <hr />
                        <Typography className="font-medium text-gray-600 mt-2">{product?.description.slice(0, 280) + "..."}<a href="#" className='underline text-blue-600' >Read More</a></Typography>
                    </div>

                    <Button onClick={() => generateUniqueCode(product)} variant="green"
                        className="rounded-none mt-8">
                        Buy Now
                    </Button>
                </div>

                <div className="col-span-1 grid grid-cols-1 gap-2 p-3 h-full max-w-full border rounded-md">
                    <div className="col-span-1 grid grid-cols-1 gap-2 p-3 h-fit">

                        <Typography className="flex-grow font-bold text-pink-600 text-3xl">${product?.price}</Typography>
                        <Typography>Valid until 08/31/2026</Typography>

                        <div>
                            <Typography className=' text-gray-600 font-medium'>This product is available in:</Typography>
                        </div>
                        <div>
                            <div className='flex items-start gap-2 text-gray-700'>
                                <img className='w-4' src={bluer} alt="" />
                                <Typography>Gift box - delivered in 2 to 3 working days</Typography>
                            </div>
                            <div className='flex items-start gap-2 text-gray-700'>
                                <img className='w-4' src={bluer} alt="" />
                                <Typography> e-Box - immediate receipt by email or scheduled sending</Typography>
                            </div>
                            <div className='flex items-start gap-2 text-gray-700'>
                                <img className='w-4' src={bluer} alt="" />
                                <Typography>Gift box - delivered in 2 to 3 working days</Typography>
                            </div>
                        </div>


                        <div className='flex items-center gap-2'>
                            <Typography>Quantity: </Typography>
                            <div className='w-fit' >
                                <Select className='h-8'>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number, i) => <Option>{number}</Option>)
                                    }
                                </Select>
                            </div>
                        </div>

                        <Button className='flex items-center justify-center gap-2 rounded-none bg-pink-500 font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16"> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" fill="white"></path> </svg>
                            <Typography>Add To Cart</Typography>
                        </Button>

                        <Typography>Personalization options</Typography>
                        <div className='flex items-center gap-2 mt-2'>
                            <svg class='w-8 h-6 text-pink-500' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z" /> </svg>
                            <Typography>Personalization of your packaging</Typography>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <svg class='w-8 h-6 text-pink-500' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" /> </svg>
                            <Typography>Personalized video message</Typography>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <svg class='w-8 h-6 text-pink-500' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" /> </svg>
                            <Typography>gift word</Typography>
                        </div>


                    </div>
                </div>
            </div>

            <div className=' mt-16'>
                <Typography className="text-xl">You will like also</Typography>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
                    {
                        products.map((product, i) => <ProductCard key={i} product={product} />)
                    }
                </div>
            </div>


            <Dialog open={open} handler={() => setOpen(false)} size='xxl' >
                <DialogHeader>
                    <Typography variant="h5" color="blue-gray">
                        {product?.title}
                    </Typography>
                </DialogHeader>
                <DialogBody divider className="grid place-items-center gap-4 overflow-hidden">
                    <div class="overflow-x-auto flex flex-col md:flex-row md:justify-between">
                        <img className='h-80 w-60 mx-auto' src={product.images[0]} alt="" />
                        <div className='shadow-md rounded-lg h-fit'>
                            <table class="mx-auto w-full bg-white h-32">
                                <thead>
                                    <tr class="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                                        <th class="py-3 px-6 text-left">QR Code</th>
                                        <th class="py-3 px-6 text-left">Price</th>
                                        <th class="py-3 px-6 text-left">Features</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-600 text-sm font-light h-fit">
                                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-left">
                                            <QRCode className='w-10' value={JSON.stringify(productData)} />
                                        </td>
                                        <td class="py-3 px-6 text-left">${product?.price}</td>
                                        <td class="py-3 px-6 text-left">
                                            <ul className="text-sm">
                                                {
                                                    product?.features.map((feature, i) => (
                                                        <li>{feature}</li>
                                                    ))
                                                }
                                            </ul>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                            <div className='flex items-center'>
                                <th class="py-3 px-6 text-left">Unique ID: </th>
                                <td class="py-3 px-6 text-left">
                                    {unique.slice(0, 50)}
                                </td>
                            </div>
                        </div>

                    </div>

                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button variant="text" color="blue-gray" onClick={() => setOpen(!open)}>
                        close
                    </Button>
                    <Button variant="gradient" onClick={() => handleBuy()}>
                        Buy
                    </Button>
                </DialogFooter>
            </Dialog>

        </div>

    );
}

export default ProductDetails;