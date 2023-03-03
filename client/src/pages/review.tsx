import { Box, Typography } from '@pankod/refine-mui'
import React from 'react'
import "./review.css"

const Review = () => {
    return (
        <Box>
            {/* <Typography fontSize={25} fontWeight={700} color="#11142d">
                Reviews
            </Typography> */}
            <div className="Testimonials">
                <div className="Testimonials-div">
                    <div className="Testimonials-row">
                        <div className="Testimonials-content" data-aos="fade-up">
                            <div className="Testimonials-para">
                                <p>I recently purchased a home through this website and the experience was fantastic! The website was easy to navigate, and I found exactly what I was looking for in no time. The customer service team was also extremely helpful and responsive throughout the entire process. I highly recommend this website for anyone looking to buy or sell a home.</p>
                            </div>
                            <div className="Testimonials-title">
                                <img src="testi-people/1.png" alt="" />
                                <div className="people-title">
                                    <h3>Adrian Prez</h3>
                                    <p>MD, Spray Foam Tech, UK</p>
                                </div>
                            </div>
                            <img className="quote" src="quote.png" alt="" />
                        </div>
                        <div className="Testimonials-content" data-aos="fade-up">
                            <div className="Testimonials-para">
                                <p>I had a great experience selling my home on this website. The listing process was simple and straightforward, and I received plenty of interested buyers in a short amount of time. The website also provided helpful resources and tips for selling my home, which made the process much easier. I would definitely use this website again in the future.</p>
                            </div>
                            <div className="Testimonials-title">
                                <img src="testi-people/2.png" alt="" />
                                <div className="people-title">
                                    <h3>Prakash Khanna</h3>
                                    <p>CEO, Vedicvila. IN</p>
                                </div>
                            </div>
                            <img className="quote" src="quote.png" alt="" />
                        </div>
                

                    </div>
                    <div className="Testimonials-row">
                        <div className="Testimonials-content" data-aos="fade-up">
                            <div className="Testimonials-para">
                                <p>I found my dream home on this website and couldn't be happier with my purchase. The website had a wide range of properties to choose from, and the search filters made it easy to narrow down my options. The buying process was smooth and seamless, and the website's customer service team was always available to answer any questions I had. Highly recommend!</p>
                            </div>
                            <div className="Testimonials-title">
                                <img src="testi-people/3.png" alt="" />
                                <div className="people-title">
                                    <h3>Bryan Tress</h3>
                                    <p>Product, Disouzz. USA</p>
                                </div>
                            </div>
                            <img className="quote" src="quote.png" alt="" />
                        </div>
                        <div className="Testimonials-content" data-aos="fade-up">
                            <div className="Testimonials-para">
                                <p>I had a wonderful experience using this website to rent an apartment. The search process was quick and easy, and I found plenty of options in my desired area. The website also provided helpful information about each property, including photos and virtual tours. Overall, a great experience!</p>
                            </div>
                            <div className="Testimonials-title">
                                <img src="testi-people/4.png" alt="" />
                                <div className="people-title">
                                    <h3>Robert Parekh</h3>
                                    <p>CEO, Owly Edu. AU</p>
                                </div>
                            </div>
                            <img className="quote" src="quote.png" alt="" />
                        </div>

                    </div>

                </div>

            </div>
        </Box>
    )
}

export default Review