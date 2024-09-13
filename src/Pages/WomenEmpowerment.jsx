import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../Components/Nav";
import Footer from "./Footer";

const WomenEmpowerment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Nav/>
    <div
      className="bg-fixed bg-cover bg-center py-16 px-6"
      style={{
        backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1400/1*LCsZ6be0WQM3sBYbxhgydA.jpeg')`, // Replace with an actual image URL from Google Images or Unsplash
      }}
    >
      <div className="bg-black bg-opacity-50 py-16 px-6">
        {" "}
        {/* Adds an overlay */}
        <div className="container mx-auto text-white">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
              Empowering Girls in Sports
            </h1>
            <p className="text-xl" data-aos="fade-up" data-aos-delay="200">
              Sports is not just for boys. It's time for girls to step into the
              arena, show their strength, and shine. We are here to break
              stereotypes, encourage girls to take up sports, and help them
              reach their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Why Sports is Important for Girls */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-semibold mb-4">
                Why Sports is Important for Girls
              </h2>
              <p className="text-lg">
                Sports teaches discipline, builds confidence, and fosters
                teamwork. It's time for girls to embrace these values and shine
                on the field, court, or track. Here’s why sports matter:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Boosts self-esteem and body positivity.</li>
                <li>Teaches leadership and decision-making skills.</li>
                <li>Promotes physical health and mental well-being.</li>
                <li>Encourages teamwork and discipline.</li>
                <li>Builds lifelong friendships and networks.</li>
              </ul>
            </div>

            {/* Real Stories of Girl Athletes */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-semibold mb-4">
                Real Stories of Inspiration
              </h2>
              <p className="text-lg">
                From small towns to big stages, girls are making their mark in
                sports. Be inspired by their journeys, their struggles, and
                their triumphs. If they can do it, so can you!
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <strong>P.V. Sindhu:</strong> From Hyderabad to the Olympics,
                  Sindhu is a global badminton star.
                </li>
                <li>
                  <strong>Mithali Raj:</strong> The leading run-scorer in
                  women’s international cricket, breaking records and barriers.
                </li>
                <li>
                  <strong>Mary Kom:</strong> India’s boxing champion, a legend
                  in the ring and an inspiration to all.
                </li>
              </ul>
              <a
                href="https://www.google.com/search?q=women+athletes+in+india"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 underline mt-4 block"
              >
                Explore More Stories of Girls in Sports
              </a>
            </div>

            {/* How to Get Started */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-semibold mb-4">
                How to Get Started
              </h2>
              <p className="text-lg">
                If you're passionate about sports, now is the time to get
                involved. Whether it's joining a school team, enrolling in a
                local sports academy, or simply playing with friends, the
                opportunities are endless.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Talk to your parents or teachers about your interest.</li>
                <li>Join a local sports club or academy.</li>
                <li>Attend sports events and follow your role models.</li>
                <li>Stay consistent and train hard to achieve your goals.</li>
              </ul>
              <a
                href="https://www.google.com/search?q=girls+sports+academies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 underline mt-4 block"
              >
                Find Sports Academies Near You
              </a>
            </div>

            {/* Benefits of Sports for Girls */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-semibold mb-4">
                The Benefits of Playing Sports
              </h2>
              <p className="text-lg">
                Sports are not just about physical fitness—they provide a range
                of emotional, social, and mental benefits for young girls.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Improves confidence and self-image.</li>
                <li>Encourages a positive body image and healthy habits.</li>
                <li>Develops leadership and communication skills.</li>
                <li>Helps manage stress and promotes mental health.</li>
              </ul>
              <a
                href="https://www.google.com/search?q=benefits+of+sports+for+girls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 underline mt-4 block"
              >
                Learn More About the Benefits of Sports
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-8">
              Inspirational Images of Girls in Sports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image 1 */}
              <div>
                <a
                  href="https://www.google.com/search?q=girls+in+sports&tbm=isch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://source.unsplash.com/1600x900/?sports-girls" // Replace with actual image URL
                    alt="Girls in Sports"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </a>
              </div>
              {/* Image 2 */}
              <div>
                <a
                  href="https://www.google.com/search?q=women+athletes&tbm=isch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://source.unsplash.com/1600x900/?women-athletes" // Replace with actual image URL
                    alt="Girls in Sports"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default WomenEmpowerment;
