import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/KenBurnsSlider.css";

function KenBurnsSlider() {

    const settings = {

        infinite: true,

        autoplay: true,

        autoplaySpeed: 4000,

        speed: 1000,

        slidesToShow: 1,

        slidesToScroll: 1,

        arrows: false,

        dots: true,

        pauseOnHover: false
    };

    return (

        <section className="ken-section">

            <Slider {...settings}>

                <div className="ken-slide">

                    <img
                        src="/images/image4.jpg"
                        alt="Nature"
                    />

                    <div className="ken-content">

                        <span>
                            EXPLORE
                        </span>

                        <h1>
                            Make Every Moment Beautiful
                        </h1>

                        <p>
                            Discover new experiences
                            and beautiful possibilities.
                        </p>

                        <button>
                            Discover More
                        </button>

                    </div>

                </div>


                <div className="ken-slide">

                    <img
                        src="/images/image5.jpg"
                        alt="Collection"
                    />

                    <div className="ken-content">

                        <span>
                            COLLECTION
                        </span>

                        <h1>
                            Style That Speaks
                        </h1>

                        <p>
                            Simple ideas. Beautiful design.
                            Amazing experience.
                        </p>

                        <button>
                            Explore
                        </button>

                    </div>

                </div>


                <div className="ken-slide">

                    <img
                        src="/images/image6.jpg"
                        alt="Experience"
                    />

                    <div className="ken-content">

                        <span>
                            EXPERIENCE
                        </span>

                        <h1>
                            Something Different
                        </h1>

                        <p>
                            Experience quality like never before.
                        </p>

                        <button>
                            Get Started
                        </button>

                    </div>

                </div>

            </Slider>

        </section>
    );
}

export default KenBurnsSlider;