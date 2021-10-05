import React, { useState } from 'react';
import "./AllServices.css";


const AllServices = () => {

    //Declaration State
    const [services, setServices] = useState([])
    useState(() => {
        fetch("/service.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="container all-teams">
            <div className="all-team">
                <h1>Our Services</h1>
            </div>
            <div className="teams">
                <div className="row">

                    {/* //map loop uses */}
                    {services?.map((service) => (
                        <div className="col-md-3">
                            <div className="cart">
                                <div className="cart-details">
                                    <img className="w-50" src={service.img} alt="" />
                                </div>
                                <br />
                                <div className="text-area">
                                    <h5>Department : {service.department}</h5>
                                    <p>Semester : {service.semester}</p>
                                    <p>Tution Fee : {service.tutionfee}</p>
                                    <p>Discount : {service.discount}</p>
                                    <button className="btn btn-success">Details</button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default AllServices;