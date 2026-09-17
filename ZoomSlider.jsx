import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/ZoomSlider.css";

function ZoomSlider() {

    const settings = {

        infinite: true,

        autoplay: true,

        autoplaySpeed: 3000,

        speed: 1200,

        slidesToShow: 1,

        slidesToScroll: 1,

        arrows: true,

        dots: true,

        pauseOnHover: false
    };

    return (

        <section className="zoom-section">

            <div className="zoom-slider">

                <Slider {...settings}>

                    <div className="zoom-slide">

                        <img
                            src="/images/image4.jpg"
                            alt="Product 1"
                        />

                        <div className="zoom-overlay">

                            <p>WELCOME</p>

                            <h1>
                                Discover Something Amazing
                            </h1>

                            <span>
                                Experience our beautiful collection.
                            </span>

                            <button>
                                Explore Now
                            </button>

                        </div>

                    </div>


                    <div className="zoom-slide">

                        <img
                            src="/images/image5.jpg"
                            alt="Product 2"
                        />

                        <div className="zoom-overlay">

                            <p>PREMIUM</p>

                            <h1>
                                Designed For You
                            </h1>

                            <span>
                                Quality and style in one place.
                            </span>

                            <button>
                                View Collection
                            </button>

                        </div>

                    </div>


                    <div className="zoom-slide">

                        <img
                            src="/images/image6.jpg"
                            alt="Product 3"
                        />

                        <div className="zoom-overlay">

                            <p>NEW COLLECTION</p>

                            <h1>
                                Modern & Beautiful
                            </h1>

                            <span>
                                Find your perfect choice today.
                            </span>

                            <button>
                                Shop Now
                            </button>

                        </div>

                    </div>

                </Slider>

            </div>

        </section>
    );
}

export default ZoomSlider;