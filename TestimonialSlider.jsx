import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,

        // Auto Play
        autoplay: true,
        autoplaySpeed: 2500,

        // Pause when mouse is over
        pauseOnHover: true
    };

    return (

        <section className="testimonial-section">

            <div className="testimonial-heading">

                <p>TESTIMONIALS</p>

                <h1>
                    What Our Customers Say
                </h1>

                <span>
                    Real experiences from people who trusted us.
                </span>

            </div>


            <div className="testimonial-slider">

                <Slider {...settings}>

                    {/* Testimonial 1 */}
                    <div className="testimonial-slide">

                        <div className="testimonial-card">

                            <img
                                src="/images/person1.jpg"
                                alt="Rahul Sharma"
                            />

                            <div className="stars">
                                ★ ★ ★ ★ ★
                            </div>

                            <p className="review">
                                "The service was excellent.
                                Everything was very smooth and
                                professional. I really enjoyed
                                my experience."
                            </p>

                            <h3>
                                Rahul Sharma
                            </h3>

                            <span>
                                Web Developer
                            </span>

                        </div>

                    </div>


                    {/* Testimonial 2 */}
                    <div className="testimonial-slide">

                        <div className="testimonial-card">

                            <img
                                src="/images/person2.jpg"
                                alt="Priya Patel"
                            />

                            <div className="stars">
                                ★ ★ ★ ★ ★
                            </div>

                            <p className="review">
                                "I really loved the design and
                                quality. The whole experience
                                was simple, fast and amazing."
                            </p>

                            <h3>
                                Priya Patel
                            </h3>

                            <span>
                                UI Designer
                            </span>

                        </div>

                    </div>


                    {/* Testimonial 3 */}
                    <div className="testimonial-slide">

                        <div className="testimonial-card">

                            <img
                                src="/images/person3.jpg"
                                alt="Amit Shah"
                            />

                            <div className="stars">
                                ★ ★ ★ ★ ★
                            </div>

                            <p className="review">
                                "Amazing experience!
                                The team was very helpful
                                and the service was exactly
                                what I expected."
                            </p>

                            <h3>
                                Amit Shah
                            </h3>

                            <span>
                                Business Owner
                            </span>

                        </div>

                    </div>

                </Slider>

            </div>

        </section>
    );
}

export default TestimonialSlider;