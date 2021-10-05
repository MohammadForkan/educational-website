import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import "./ServiceDetails.css";
import uiversity from "../../images/university.jpg";

const ServiceDetails = () => {
    //State Declaration
    const [ServiceDetails, SetServiceDetails] = useState([])
    useState(() => {
        fetch("/details.json")
            .then(res => res.json())
            .then(data => SetServiceDetails(data))
    }, [])

    return (
        <div className=" details-container">
            <Banner></Banner>
            <div className="details">
                <div className="male-female-img p-5">
                    <img className="w-50" src={uiversity} alt="" />
                </div>

                <div className="all-team">
                    <h1>Our Service Details</h1>
                </div>

                <div className="row d-flex details-teams align-items-center justify-content-center">

                    {/* map Calling */}
                    {ServiceDetails.map((ServiceDetail) => (
                        <div className="col-md-9">
                            <div className="card  mb-4">
                                <div className="card-body">
                                    <h3>{ServiceDetail?.department}</h3>
                                    <p>{ServiceDetail.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;