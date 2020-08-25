import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="infoBlock">
            <section>
                <div className="container"></div>
                <Title title="18 years of prime free-range and grain-fed South African meat and biltong"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <div className="lead mb-5">
                            <p>Namib Biltong started in 2002 in the Western Cape and later expanded to Gauteng and the rest of Africa.
                            It is a family-owned company that supplies meat and biltong to major retail outlets in South Africa and Africa.
                            Deliveries are done extensively throughout South Africa with our fleet of merchandisers and representatives.
We have done extensive research and are market leaders in pre-packed biltong development which ensures a longer shelf-life for our products.  All our facilities comply with all major food management systems.</p>
                        </div>
                        {/* <Link to="/about">
                            <button className="btn text-uppercase btn-yellowish">About</button>
                        </Link> */}
                    </div>
                </div>
            </section>
        </section>
    )
}
