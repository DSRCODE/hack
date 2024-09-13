import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AwarenessPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="bg-fixed bg-cover bg-center py-16 px-6"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/642e556bda30c3001d9cc5a3.png')`, // Replace with an actual image URL from Google or Unsplash
      }}
    >
      {/* Add an overlay to make text more readable */}
      <div className="bg-black bg-opacity-50 py-16 px-6">
        <div className="container mx-auto text-white">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
              Sports Awareness and Education
            </h1>
            <p className="text-xl" data-aos="fade-up" data-aos-delay="200">
              Sports isn't just about physical activity. It's about discipline,
              teamwork, perseverance, and learning life skills. Join us in
              promoting the importance of sports in daily life and educating
              individuals on how it can shape their future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Importance of Sports */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-semibold mb-4">
                Importance of Sports in Life
              </h2>
              <p className="text-lg">
                Sports play a crucial role in shaping a healthy mind and body.
                Regular participation in sports leads to the physical, mental,
                and social well-being of individuals.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Develops leadership and teamwork skills.</li>
                <li>Improves physical fitness and overall health.</li>
                <li>Promotes mental well-being and stress management.</li>
                <li>Teaches discipline, patience, and perseverance.</li>
                <li>Encourages social connections and friendships.</li>
              </ul>
              <a
                href="https://en.wikipedia.org/wiki/Sport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline mt-4 block"
              >
                Learn More About the Importance of Sports
              </a>
            </div>

            {/* Benefits of Regular Sports Activity */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-semibold mb-4">
                Benefits of Regular Sports Activity
              </h2>
              <p className="text-lg">
                Engaging in regular sports activity provides several benefits
                beyond just physical health. Here are some of the major
                benefits:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <strong>Physical Health:</strong> Reduces the risk of chronic
                  diseases like obesity, heart disease, and diabetes.
                </li>
                <li>
                  <strong>Mental Health:</strong> Reduces anxiety, stress, and
                  depression by releasing endorphins.
                </li>
                <li>
                  <strong>Social Skills:</strong> Improves communication,
                  cooperation, and team spirit.
                </li>
                <li>
                  <strong>Confidence:</strong> Builds self-esteem through
                  accomplishments in sport.
                </li>
                <li>
                  <strong>Academic Performance:</strong> Improves concentration
                  and memory, leading to better academic performance.
                </li>
              </ul>
              <a
                href="https://www.google.com/search?q=benefits+of+sports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline mt-4 block"
              >
                Discover More Benefits of Sports
              </a>
            </div>

            {/* How to Incorporate Sports in Daily Life */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-semibold mb-4">
                How to Incorporate Sports in Your Daily Life
              </h2>
              <p className="text-lg">
                Incorporating sports into your daily routine doesn't have to be
                difficult. Here are some practical tips:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Start small by playing a sport you enjoy for 30 minutes daily.
                </li>
                <li>Join a local sports team or fitness class.</li>
                <li>
                  Involve your family or friends in weekend sports activities.
                </li>
                <li>
                  Utilize school or community facilities for regular practice.
                </li>
                <li>
                  Watch or participate in local sporting events to stay
                  motivated.
                </li>
              </ul>
              <a
                href="https://www.google.com/search?q=how+to+incorporate+sports+in+life"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline mt-4 block"
              >
                Find More Ways to Make Sports a Part of Life
              </a>
            </div>

            {/* Sports Education and Learning */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-semibold mb-4">
                Sports Education and Learning
              </h2>
              <p className="text-lg">
                Sports education is the process of learning the skills and
                values associated with playing a sport. It emphasizes the
                importance of fair play, respect, teamwork, and competition.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Learn the rules, techniques, and strategies of different
                  sports.
                </li>
                <li>
                  Develop physical literacy by engaging in different physical
                  activities.
                </li>
                <li>Understand the value of sportsmanship and fair play.</li>
                <li>
                  Explore career opportunities in sports education, coaching,
                  and management.
                </li>
                <li>
                  Participate in workshops, online courses, and camps to improve
                  skills.
                </li>
              </ul>
              <a
                href="https://www.google.com/search?q=sports+education+online+courses"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline mt-4 block"
              >
                Explore Sports Education Courses and Opportunities
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-8">
              Images Showcasing the Power of Sports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image 1 */}
              <div>
                <a
                  href="https://www.google.com/search?q=sports+activity&tbm=isch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://source.unsplash.com/1600x900/?sports" // Replace with actual image
                    alt="Sports Activity"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </a>
              </div>
              {/* Image 2 */}
              <div>
                <a
                  href="https://www.google.com/search?q=sports+education&tbm=isch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://source.unsplash.com/1600x900/?education-sports" // Replace with actual image
                    alt="Sports Education"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwarenessPage;
