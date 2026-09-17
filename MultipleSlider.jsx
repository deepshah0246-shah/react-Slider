import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/MultipleSlider.css";

function MultipleSlider() {

    const settings = {
        dots: true,
        infinite: true,

        speed: 700,

        slidesToShow: 3,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 2000,

        pauseOnHover: true,

        arrows: true,

        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (

        <section className="multiple-section">

            <div className="multiple-heading">

                <p>OUR COLLECTION</p>

                <h1>Featured Products</h1>

                <span>
                    Explore our latest collection
                </span>

            </div>


            <div className="multiple-slider">

                <Slider {...settings}>

                    {/* Card 1 */}

                    <div className="multiple-slide">

                        <div className="product-card">

                            <img
                                src="/images/image-1.jpeg"
                                alt="Product 1"
                            />

                            <div className="product-info">

                                <h2>Product One</h2>

                                <p>
                                    Beautiful and modern
                                    product design.
                                </p>

                                <h3>₹999</h3>

                                <button>
                                    View Product
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* Card 2 */}

                    <div className="multiple-slide">

                        <div className="product-card">

                            <img
                                src="/images/image-2.jpeg"
                                alt="Product 2"
                            />

                            <div className="product-info">

                                <h2>Product Two</h2>

                                <p>
                                    Premium quality
                                    and stylish design.
                                </p>

                                <h3>₹1299</h3>

                                <button>
                                    View Product
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* Card 3 */}

                    <div className="multiple-slide">

                        <div className="product-card">

                            <img
                                src="/images/image-4.jpeg"
                                alt="Product 3"
                            />

                            <div className="product-info">

                                <h2>Product Three</h2>

                                <p>
                                    Simple design with
                                    amazing quality.
                                </p>

                                <h3>₹1499</h3>

                                <button>
                                    View Product
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* Card 4 */}

                    <div className="multiple-slide">

                        <div className="product-card">

                            <img
                                src="/images/image-5.jpeg"
                                alt="Product 4"
                            />

                            <div className="product-info">

                                <h2>Product Four</h2>

                                <p>
                                    Modern collection
                                    for everyone.
                                </p>

                                <h3>₹1799</h3>

                                <button>
                                    View Product
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* Card 5 */}

                    <div className="multiple-slide">

                        <div className="product-card">

                            <img
                                src="/images/image-7.jpeg"
                                alt="Product 5"
                            />

                            <div className="product-info">

                                <h2>Product Five</h2>

                                <p>
                                    Elegant style and
                                    premium finishing.
                                </p>

                                <h3>₹1999</h3>

                                <button>
                                    View Product
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* Card 6 */}

                    <div className="multiple-slide">

                        <div className="product-card">

                            <img
                                src="/images/image-8.jpeg"
                                alt="Product 6"
                            />

                            <div className="product-info">

                                <h2>Product Six</h2>

                                <p>
                                    Perfect choice for
                                    modern lifestyle.
                                </p>

                                <h3>₹2299</h3>

                                <button>
                                    View Product
                                </button>

                            </div>

                        </div>

                    </div>

                </Slider>

            </div>

        </section>
    );
}

export default MultipleSlider;