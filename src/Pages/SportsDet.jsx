import React from "react";

const SportsDet = () => {
  return (
    <div className="bg-gray-100 py-16 px-6" id="Cricket">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold text-indigo-600 mb-4"
            data-aos="fade-up"
          >
            History of Cricket
          </h1>
          <p
            className="text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Cricket is one of the oldest and most popular sports in the world.
            It originated in the 16th century and has since evolved into a
            global game enjoyed by millions of people. Whether you're a beginner
            or an aspiring professional, here’s everything you need to know
            about cricket.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* How to Play */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
              How to Play
            </h2>
            <p className="text-gray-600">
              Cricket is a bat-and-ball game played between two teams of 11
              players each. The game takes place on a circular or oval-shaped
              field, with a rectangular 22-yard-long pitch in the center. One
              team bats, trying to score runs, while the other team bowls and
              fields, trying to restrict the runs and dismiss the batsmen.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li>
                Batsmen score runs by hitting the ball and running between the
                wickets.
              </li>
              <li>
                Fielders try to catch the ball, stop runs, and dismiss batsmen
                by hitting the stumps with the ball.
              </li>
              <li>
                Bowlers deliver the ball to the batsman to either get them out
                or restrict scoring.
              </li>
            </ul>
            <a
              href="https://en.wikipedia.org/wiki/Cricket"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 underline mt-4 block"
            >
              Learn More About How to Play Cricket
            </a>
          </div>

          {/* Requirements to Play */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
              Requirements to Play
            </h2>
            <p className="text-gray-600">
              To play cricket, you need the following equipment and skills:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li>
                <strong>Cricket Bat:</strong> A flat, wooden bat to hit the
                ball.
              </li>
              <li>
                <strong>Cricket Ball:</strong> A hard, leather ball used by
                bowlers.
              </li>
              <li>
                <strong>Stumps and Bails:</strong> Three vertical posts with two
                horizontal bails placed on top to form the wicket.
              </li>
              <li>
                <strong>Protective Gear:</strong> Gloves, pads, and a helmet to
                protect the batsman from injury.
              </li>
              <li>
                <strong>Fielding Skills:</strong> Players should be able to
                throw, catch, and stop the ball effectively.
              </li>
            </ul>
            <a
              href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoN9SikVFPjivg5lp_G3MLRIkDP52MjABeg&s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 underline mt-4 block"
            >
              Explore Cricket Equipment on Google
            </a>
          </div>

          {/* Future Scope of Cricket */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
              Future Scope of Cricket
            </h2>
            <p className="text-gray-600">
              The future of cricket is bright, with new formats like T20
              expanding its global reach. With the growing popularity of leagues
              such as the Indian Premier League (IPL) and Big Bash League (BBL),
              cricket has attracted a massive fanbase. The sport is now evolving
              into a more fast-paced and commercially valuable game.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li>
                The introduction of T20 and The Hundred formats has made cricket
                more accessible to younger audiences.
              </li>
              <li>
                Cricket has become a lucrative career option with international
                leagues and brand sponsorships.
              </li>
              <li>
                Technology integration (e.g., DRS, Hawk-Eye) continues to
                enhance the viewer experience.
              </li>
            </ul>
            <a
              href="https://www.icc-cricket.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 underline mt-4 block"
            >
              Discover the Future of Cricket on the ICC Website
            </a>
          </div>

          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
              How to Reach the Sport
            </h2>
            <p className="text-gray-600">
              If you're passionate about cricket and want to pursue it, here's
              how you can get started:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li>
                Join a local cricket academy or club to receive professional
                training.
              </li>
              <li>
                Follow domestic and international matches to improve your
                knowledge of the game.
              </li>
              <li>
                Participate in local tournaments to gain experience and
                exposure.
              </li>
              <li>
                Stay updated with cricket organizations like the ICC or your
                country's cricket board for opportunities.
              </li>
            </ul>
            <a
              href="https://www.google.com/search?q=cricket+academies+near+me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 underline mt-4 block"
            >
              Find Cricket Academies Near You on Google
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">
            Images of Cricket
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div style={{ width: "700px" }}>
              <a
                href="https://www.google.com/search?q=cricket+batting&tbm=isch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://wallpapercave.com/wp/wp9536033.jpg" // Replace with actual image
                  alt="Cricket Batting"
                  className="w-full h-auto rounded-lg shadow-lg"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
            <div style={{ width: "700px" }}>
              <a
                href="https://www.google.com/search?q=cricket+fielding&tbm=isch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://wallpaperaccess.com/full/2604895.jpg" // Replace with actual image
                  alt="Cricket Fielding"
                  className="w-full h-auto rounded-lg shadow-lg"
                  style={{ width: "100%", objectFit:"cover" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsDet;
