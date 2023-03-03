import { Box, Typography } from '@pankod/refine-mui'
import React, { useState } from 'react'
import "./message.css"

const Message = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cont, setCont] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('We have got your response. We will get back to you soon.')

        if (window.Email) {
            window.Email.send({
                SecureToken: "a11edd24-b11c-4e5e-8898-4145066748b7",
                To: 'romickworkflow@gmail.com',
                From: "romickkundu5555@gmail.com",
                Subject: "Real-Estate",
                Body: `Dear Team, We got a response from ${name} with contact information (${email} & ${cont}) and along some description (${desc}) through our website. Please approach the client as soon as possible.`
            }).then(
                message => alert("We have got your response. We will get back to you soon.")
            );

        }
    }
    return (
        <Box>
            {/* <Typography fontSize={25} fontWeight={700} color="#11142d">
                Message
            </Typography> */}
            <div className="digital-contact">
                <section id="contact">
                    <div className="digital-contact-heading">
                        <h1 className="section-header">Get In Touch</h1>
                        <p className="section-para">We are here for you! How can we help?</p>

                    </div>

                    <div className="contact-wrapper">

                        <form id="contact-form">

                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="name" onChange={e => setName(e.target.value)} placeholder="Enter your name" name="Name" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="phone" className="form-control" id="number" onChange={e => setCont(e.target.value)} placeholder="Enter your contact number" name="Contact" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" name="Email" required />
                                </div>
                            </div>

                            <textarea className="form-control" onChange={e => setDesc(e.target.value)} placeholder="Go ahead, We are listening..." name="Description" required></textarea>

                            <button className="btn btn-primary send-button" id="submit" type="submit"
                                onClick={handleSubmit}
                            >
                                <div className="alt-send-button">
                                    <span className="send-text">Submit</span>
                                </div>

                            </button>

                        </form>

                    </div>

                </section>
            </div>
        </Box>
    )
};

export default Message