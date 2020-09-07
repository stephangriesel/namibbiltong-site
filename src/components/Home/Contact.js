import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
    return (


        <section className="contact py-5 fade-in">
            {/* <Title title="Contact Us" /> */}
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/sgriesel@gmail.com"
                        method="POST">
                        <div className="form-group">
                            {/* <label htmlFor="name">Name</label> */}
                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="name">Name</label> */}
                            <input type="text" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="name">Name</label> */}
                            <textarea name="description" id="description" className="form-control" rows="3" placeholder="Tell us more.." required />
                        </div>
                        <button type="submit" className="btn btn-whiteish btn-block text-capitalize mt-5">Talk to us</button>
                    </form>
                </div>
            </div>
            <div className="col-wrapper mx-auto">
                <div className="two-col-grid">
                    <div class="mb-3">
                        <ul>
                            <li><strong>Contact/Whatsapp:</strong> 0844567891/0797954953</li>
                            <li><strong>Landline Number:</strong> 011 818 0062</li>
                        </ul>
                    </div>
                    <div className="contact-address">
                        <ul>
                            <li><strong>Gauteng</strong></li>
                            <li>65 Van Den Dool Road</li>
                            <li>Nuffield </li>
                            <li>Springs</li>
                            <li>1559</li>
                        </ul>
                        <ul>
                            <li><strong>Western Cape</strong></li>
                            <li>Oudepont Straat</li>
                            <li>Wellington Industrial Park </li>
                            <li>Springs</li>
                            <li>Western Cape</li>
                        </ul>
                    </div>

                </div>
            </div>

        </section>

    )
}
