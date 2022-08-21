import React from "react";
import Form from "./Form";
import Wave from "react-wavify";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section id="contact">
      <div
        style={{
          margin: 0,
          padding: 0,
          position: "relative",
          height: "100vh",
          overflowX: "hidden",
        }}
      >
        <Form />

        <Wave
          fill="url(#gradient)"
          style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.7 }}
          paused={false}
          options={{
            height: 40,
            amplitude: 30,
            speed: 0.25,
            points: 10,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#4B23CF" />
              <stop offset="90%" stopColor="#FF4500" />
            </linearGradient>
          </defs>
        </Wave>
        {/* <Wave
          fill="#FF3300"
          style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.6 }}
          paused={false}
          options={{
            height: 40,
            amplitude: 20,
            speed: 0.3,
            points: 3,
          }}
        />
        <Wave
          fill="#4B23CF"
          style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.1 }}
          paused={false}
          options={{
            height: 2 > 3 ? 50 : 20,
            amplitude: 60,
            speed: 0.2,
            points: 2,
          }}
        /> */}
        <Footer />
      </div>
    </section>
  );
}
