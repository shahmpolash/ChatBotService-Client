import React from 'react';
import ServicesList from '../components/HomePage/ServicesList';
import CtaSection from '../components/HomePage/CtaSection';

const ServicePage = () => {
    return (
        <>
            <ServicesList></ServicesList> 
           <div className='mt-5'>
           <CtaSection></CtaSection>
           </div>
        </>
    );
};

export default ServicePage;