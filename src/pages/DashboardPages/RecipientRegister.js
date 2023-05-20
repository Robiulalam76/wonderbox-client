import { Button, Dialog, DialogBody, DialogFooter, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';

const img = "https://www.wonderbox.fr/medias/wbx-dcs-register-modal-fr.jpg?context=bWFzdGVyfGltYWdlc3w2OTI2ODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDQzL2gxMi8xMDQ5NjMyODM2ODE1OC5qcGd8MjAwZDNmM2JjYTI5MTg0NGE4ZmJiN2RkN2ZiMzViMDdlMmI0NmJmZjYzZTNhNWEwYmY2OWNlYTU3YzAxMzcyMw"

const RecipientRegister = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <form action=""
                className='w-full md:w-[800px] mx-auto bg-white h-full p-6'>
                <Typography className="text-xl text-center"><strong>Register</strong> your gift</Typography>
                <hr />
                <div className='grid grid-cols-1 gap-4 mt-4'>
                    <div className='flex flex-col'>
                        <Typography className='text-left text-sm'>Cheque number*</Typography>
                        <Input size='md' type='number' placeholder='Please Eneter 12 Digit' className='rounded-sm' />
                    </div>
                    <div className='grid grid-cols-2 items-end gap-4'>
                        <div className='flex flex-col'>
                            <Typography className='text-left text-sm'>Security code**</Typography>
                            <Input size='md' type='number' placeholder='Please Eneter 3 Digit' className='rounded-sm' />
                        </div>
                        <Button onClick={() => setOpen(!open)} className="rounded-sm bg-pink-500 text-white py-0 h-12">Where to find this information ?</Button>
                    </div>

                    <div className='flex flex-col'>
                        <Typography className='text-left text-sm'>Email*</Typography>
                        <Input size='md' type='email' placeholder='Enter Email' className='rounded-sm' />
                    </div>

                </div>

                <Button className="rounded-sm bg-green-600 text-white py-0 h-12 w-full mt-6">Verify Now</Button>

            </form>


            <Dialog open={open} handler={() => setOpen(false)} size='xl' className='h-[800px] relative' >

                <img className='h-[600px]' src={img} alt="" />
                <Button onClick={() => setOpen(false)}
                    className='absolute top-0 right-0 rounded-none bg-pink-500 text-white'>
                    close
                </Button>
            </Dialog>

        </div>
    );
};

export default RecipientRegister;