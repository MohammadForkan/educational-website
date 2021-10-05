import React from 'react';
import "./Journal.css";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Journal = () => {
    return (
        <div className="container-journal">
            <Banner></Banner>
            <div className="all-team mb-6">
                <h1>BGC TRUST UNIVERSITY</h1>
            </div>
            <div className="row d-flex details-teams align-items-center justify-content-center">
                <div className="col-md-9">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2>How Paper Published!!?</h2>
                            <h4>Administrative Building Ground Floor</h4>
                            <h5>Post-doctoral researchers in Medical Sciences at the University of Aberdeen were told this week that they need to be publishing, on average, 3.25 papers per year in order to have a competitive chance of getting a research fellowship.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Journal;