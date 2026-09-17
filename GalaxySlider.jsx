import React, { useEffect, useRef } from "react";
import "../css/GalaxySlider.css";

function GalaxySlider() {

    // Canvas ko pakadne ke liye
    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Canvas screen ke according size lega
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();

        window.addEventListener("resize", resizeCanvas);


        // Galaxy ke particles
        const particles = [];

        const particleCount = 900;


        // 900 stars/particles create karna
        for (let i = 0; i < particleCount; i++) {

            const angle = Math.random() * Math.PI * 2;

            const distance =
                Math.random() *
                Math.min(canvas.width, canvas.height) *
                0.45;

            particles.push({

                angle: angle,

                distance: distance,

                speed:
                    0.0005 +
                    Math.random() * 0.002,

                size:
                    Math.random() * 2 + 0.5,

                opacity:
                    Math.random() * 0.8 + 0.2
            });
        }


        // Galaxy animation
        function animate() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );


            // Galaxy ka center
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;


            // Har particle ko draw karna
            particles.forEach((particle) => {

                // Particle ko continuously rotate karna
                particle.angle += particle.speed;


                // Spiral effect
                const spiralAngle =
                    particle.angle +
                    particle.distance * 0.015;


                const x =
                    centerX +
                    Math.cos(spiralAngle) *
                    particle.distance;


                const y =
                    centerY +
                    Math.sin(spiralAngle) *
                    particle.distance *
                    0.55;


                // Star draw
                ctx.beginPath();

                ctx.arc(
                    x,
                    y,
                    particle.size,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    `rgba(255,255,255,${particle.opacity})`;

                ctx.fill();

            });


            // Animation ko continuously run karna
            requestAnimationFrame(animate);
        }


        animate();


        // Cleanup
        return () => {
            window.removeEventListener(
                "resize",
                resizeCanvas
            );
        };

    }, []);


    return (

        <section className="galaxy-section">

            {/* Galaxy Canvas */}

            <canvas
                ref={canvasRef}
                className="galaxy-canvas"
            ></canvas>


            {/* Center glow */}

            <div className="galaxy-glow"></div>


            {/* Content */}

            <div className="galaxy-content">

                <p>WELCOME TO THE UNIVERSE</p>

                <h1>
                    Explore The
                    <br />
                    Galaxy
                </h1>

                <span>
                    Discover the beauty of space,
                    stars and endless possibilities.
                </span>

                <button>
                    EXPLORE NOW
                </button>

            </div>

        </section>
    );
}

export default GalaxySlider;