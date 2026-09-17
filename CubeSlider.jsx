import React, { useEffect, useRef } from "react";
import "../css/CubeSlider.css";

function CubeSlider() {

    const cubeRef = useRef(null);

    let angle = 0;

    useEffect(() => {

        const interval = setInterval(() => {

            angle = angle - 90;

            cubeRef.current.style.transform =
                `rotateY(${angle}deg)`;

        }, 3000);

        return () => clearInterval(interval);

    }, []);

    return (

        <section className="cube-section">

            <h1>3D Cube Slider</h1>

            <div className="cube-container">

                <div className="cube" ref={cubeRef}>

                    {/* Front */}
                    <div className="cube-face front">
                        <img
                            src="/images/image7.jpg"
                            alt="Slide 1"
                        />
                        <div className="cube-content">
                            <h2>Beautiful World</h2>
                            <p>Explore something amazing.</p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="cube-face right">
                        <img
                            src="/images/image8.jpg"
                            alt="Slide 2"
                        />
                        <div className="cube-content">
                            <h2>Modern Life</h2>
                            <p>Discover new possibilities.</p>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="cube-face back">
                        <img
                            src="/images/image9.jpg"
                            alt="Slide 3"
                        />
                        <div className="cube-content">
                            <h2>Adventure</h2>
                            <p>Make every moment special.</p>
                        </div>
                    </div>

                    {/* Left */}
                    <div className="cube-face left">
                        <img
                            src="/images/image10.jpg"
                            alt="Slide 4"
                        />
                        <div className="cube-content">
                            <h2>New Experience</h2>
                            <p>Experience something different.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default CubeSlider;