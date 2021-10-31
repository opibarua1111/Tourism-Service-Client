import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';


const Services = () => {
    const { services } = useServices();
    return (
        <div className="mb-5">
            <h2 className="text-4xl font-semibold mt-3">Our Services</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12" id="services">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;