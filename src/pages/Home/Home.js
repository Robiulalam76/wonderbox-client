import React from 'react';
import LatestProducts from '../../components/HomeComponents/LatestProducts/LatestProducts';
import FooterInbox from '../../components/HomeComponents/FooterInbox/FooterInbox';
import ProductRequirements from '../../components/HomeComponents/ProductRequirements/ProductRequirements';
import Product from '../Product/Product';

const Home = () => {
    return (
        <section className=''>
            <div className='bg-white'>
                <div className='max-w-[1440px] mx-auto px-4 pt-8'>
                    {/* <LatestProducts /> */}
                    <Product />
                    <ProductRequirements />
                </div>
            </div>

            <div className='bg-[#3432FF]'>
                <div className='max-w-[1440px] mx-auto px-4'>
                    <FooterInbox />
                </div>
            </div>
        </section>
    );
};

export default Home;