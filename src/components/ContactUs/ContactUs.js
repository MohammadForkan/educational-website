import React from 'react';
import "./ContactUs.css";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
const ContactUs = () => {
    return (
        <div className="container-contact">
            <Banner></Banner>
            <div className="all-team mb-6">
                <h1>University of Dhaka</h1>
            </div>
            <div className="row d-flex details-teams align-items-center justify-content-center">
                <div className="col-md-9">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2>Contact Our Quickly</h2>
                            <h3>Administrative Building Ground Floor</h3>
                            <p> <b>Dhaka-1000, Bangladesh</b></p>
                            <p> <b>Phone: +88-09666911463</b></p>
                            <p> <b>Fax: 880-2-9667222</b></p>
                            <p><b> Email: vcoffice@du.ac.bd, registrar@du.ac.bd</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;