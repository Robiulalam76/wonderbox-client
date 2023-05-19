import React, { useState } from 'react';
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
} from "@material-tailwind/react";
import SHA256 from 'crypto-js/sha256';
import QRCode from 'react-qr-code';

const ProductDetails = () => {
    const product = useLoaderData()
    const [open, setOpen] = useState(false);
    const [unique, setUnique] = useState("");
    const navigate = useNavigate()


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
                        navigate("/my-orders")
                    }
                    setOpen(false)
                })
        }

    }
    return (
        <Card className="flex-row w-full max-w-[1440px] mx-auto px-4">
            <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
                <img
                    src={product?.image}
                    alt="image"
                    className="w-full h-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="blue" className="uppercase mb-4">startups</Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {product?.title}
                </Typography>
                <Typography color="gray" className="font-normal mb-8">
                    <ul className="text-sm">
                        {
                            product?.features.map((feature, i) => (
                                <li>{feature}</li>
                            ))
                        }
                    </ul>

                    <div className='mt-4'>
                        <h1 className='text-black font-bold mb-2'>Description</h1>
                        <p className='text-sm'>{product?.description}</p>
                    </div>

                </Typography>
                <div className="inline-block">
                    <Button onClick={() => generateUniqueCode(product)} variant="green" className="flex items-center gap-2">
                        Buy Now
                    </Button>
                </div>
            </CardBody>

            <Dialog open={open} handler={() => setOpen(false)} size='xl' >
                <DialogHeader>
                    <Typography variant="h5" color="blue-gray">
                        {product?.title}
                    </Typography>
                </DialogHeader>
                <DialogBody divider className="grid place-items-center gap-4">
                    <div class="overflow-x-auto flex justify-between">
                        <img className='h-80 w-60 mx-auto' src={product.image} alt="" />
                        <table class="mx-auto w-full max-w-4xl bg-white shadow-md rounded-lg">
                            <thead>
                                <tr class="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                                    <th class="py-3 px-6 text-left">QR Code</th>
                                    <th class="py-3 px-6 text-left">Unique ID</th>
                                    <th class="py-3 px-6 text-left">Price</th>
                                    <th class="py-3 px-6 text-left">Features</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-600 text-sm font-light">
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-left">
                                        <QRCode className='w-10' value={JSON.stringify(productData)} />
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        {unique.slice(0, 50)}
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

                                {/* <!-- Add more rows as needed --> */}
                            </tbody>
                        </table>
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
        </Card>
    );
}

export default ProductDetails;