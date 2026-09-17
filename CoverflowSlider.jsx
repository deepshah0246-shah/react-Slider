import React, { useEffect, useRef } from "react";
import "../css/CoverflowSlider.css";

function CoverflowSlider() {

    const trackRef = useRef(null);

    let currentIndex = 0;

    const totalSlides = 5;

    useEffect(() => {

        const interval = setInterval(() => {

            currentIndex++;

            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }

            const track = trackRef.current;

            track.style.transform =
                `translateX(-${currentIndex * 320}px)`;

        }, 2500);

        return () => clearInterval(interval);

    }, []);

    return (

        <section className="coverflow-section">

            <div className="coverflow-heading">
                <p>OUR COLLECTION</p>
                <h1>Explore The World</h1>
            </div>

            <div className="coverflow-container">

                <div
                    className="coverflow-track"
                    ref={trackRef}
                >

                    <div className="cover-card">
                        <img
                            src="/images/image11.jpg"
                            alt="Nature"
                        />
                        <h2>Makeup1</h2>
                    </div>

                    <div className="cover-card">
                        <img
                            src="/images/image12.jpg"
                            alt="Architecture"
                        />
                        <h2>Makeup2</h2>
                    </div>

                    <div className="cover-card">
                        <img
                            src="/images/image13.jpg"
                            alt="Travel"
                        />
                        <h2>Makeup3</h2>
                    </div>

                    <div className="cover-card">
                        <img
                            src="/images/image14.jpg"
                            alt="City"
                        />
                        <h2>Makeup4</h2>
                    </div>

                    <div className="cover-card">
                        <img
                            src="/images/image15.jpg"
                            alt="Adventure"
                        />
                        <h2>Makeup5</h2>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default CoverflowSlider;