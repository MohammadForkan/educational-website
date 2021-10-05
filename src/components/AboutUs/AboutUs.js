import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import "./AboutUs.css";

const AboutUs = () => {
    return (

        <div className="container-dhaka">
            <Banner></Banner>
            <div className="all-team mb-6">
                <h1>University of Dhaka</h1>
            </div>
            <div className="row d-flex details-teams align-items-center justify-content-center">
                <div className="col-md-9">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h3>About of Dhaka University</h3>
                            <p>The University of Dhaka is a public university located in Dhaka, Bangladesh. It is the oldest university in Bangladesh. On the first day of July 1921, the university opened its doors to students. Today, it is the largest public research university in Bangladesh, with a student body of 37,018 and a faculty of 1,992 the university opened its doors to students.[4][5][6][7] Today, it is the largest public research university in Bangladesh, with a student body of 37,018 and a faculty of 1,992. It was identified by AsiaWeek as one of the top 100 universities in Asia.[8]

                                Nawab Bahadur Sir Khwaja Salimullah, who played a pioneering role in establishing the university in Dhaka, donated 600 acres of land from his estate for this purpose.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;