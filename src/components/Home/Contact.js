import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
    return (


        <section className="contact py-5 fade-in">
            {/* <Title title="Contact Us" /> */}
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/annie.leroux@outlook.com"
                        method="POST">
                        <div className="form-group">
                            {/* <label htmlFor="name">Name</label> */}
                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="name">Name</label> */}
                            <input type="text" className="form-control" name="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="name">Name</label> */}
                            <textarea name="description" id="description" className="form-control" rows="3" placeholder="Tell us more.." />
                        </div>
                        <button type="submit" className="btn btn-whiteish btn-block text-capitalize mt-5">Talk to us</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="mx-auto">
                    <ul>
                        <li>65 Van Den Dool Road</li>
                        <li>Nuffield </li>
                        <li>Springs</li>
                        <li>1559</li>
                    </ul><br />
                    <ul>
                        <li>Contact: 0844567891</li>
                        <li>Landline Number: 011 818 0062</li>
                    </ul>
                </div>
            </div>
        </section>

    )
}
