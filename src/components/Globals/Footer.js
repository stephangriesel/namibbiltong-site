import React from 'react';
import { FaRegHandPeace } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-5 mx-auto col-md-6 text-center text-capatalize">
                        <h6 className="font-weight-bold">Created & Hosted by <FaRegHandPeace /> <a href="https://www.consulitate.co.za">Consulitate</a></h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}
