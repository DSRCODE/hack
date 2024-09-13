import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold text-indigo-600 mb-4"
            data-aos="fade-up"
          >
            About Us
          </h1>
          <p
            className="text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Welcome to <strong>All India Sports Management</strong>, your
            one-stop platform for everything sports-related in India. Our
            mission is to provide a transparent and unified system for
            monitoring and managing the sports ecosystem, from funding to
            players, academies, and associations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Funding & Resources */}
          <div
            data-aos="fade-right"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35,  0.15) 0px 0px 0px 1px ",
              padding: "15px",
            }}
          >
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">
              Funding & Resources
            </h3>
            <p className="text-gray-600">
              We track and report on the allocation of funds within sports
              programs, ensuring transparency and efficient use of resources for
              the benefit of athletes and associations.
            </p>
          </div>
          {/* Athlete Monitoring */}
          <div
            data-aos="fade-left"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35,  0.15) 0px 0px 0px 1px ",
              padding: "15px",
            }}
          >
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">
              Athlete Monitoring
            </h3>
            <p className="text-gray-600">
              Our platform tracks the progress and achievements of athletes
              across various sports, providing insights on player development
              from grassroots to elite levels.
            </p>
          </div>
          {/* Academies & Associations */}
          <div
            data-aos="fade-right"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35,  0.15) 0px 0px 0px 1px ",
              padding: "15px",
            }}
          >
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">
              Academies & Associations
            </h3>
            <p className="text-gray-600">
              We provide a comprehensive database of sports academies and
              associations, offering information on their programs and
              achievements to help athletes connect with the right resources.
            </p>
          </div>
          {/* Grievance Redressal */}
          <div
            data-aos="fade-left"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35,  0.15) 0px 0px 0px 1px ",
              padding: "15px",
            }}
          >
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">
              Grievance Redressal
            </h3>
            <p className="text-gray-600">
              Athletes and associations can voice concerns through our grievance
              management system, ensuring their issues are addressed swiftly and
              effectively.
            </p>
          </div>
          {/* Scholarships & Financial Aid */}
          <div
            data-aos="fade-right"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35,  0.15) 0px 0px 0px 1px ",
              padding: "15px",
            }}
          >
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">
              Scholarships & Financial Aid
            </h3>
            <p className="text-gray-600">
              We provide information on scholarships and financial aid programs,
              helping athletes and students pursue their sports careers with
              proper financial backing.
            </p>
          </div>
          {/* Awareness Programs */}
          <div
            data-aos="fade-left"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35,  0.15) 0px 0px 0px 1px ",
              padding: "15px",
            }}
          >
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">
              Awareness Programs
            </h3>
            <p className="text-gray-600">
              Our awareness programs focus on promoting sports participation
              among youth and underprivileged communities, ensuring equal
              opportunities for all.
            </p>
          </div>
          {/* Sports Education */}
          <div
            data-aos="fade-right"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35,  0.15) 0px 0px 0px 1px ",
              padding: "15px",
            }}
          >
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">
              Sports Education
            </h3>
            <p className="text-gray-600">
              We provide resources for teaching and learning sports, from online
              courses to workshops, ensuring that the next generation of
              athletes and coaches are well-prepared.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-indigo-600" data-aos="zoom-in">
            Our Vision
          </h2>
          <p
            className="text-lg text-black mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Our vision is to create a transparent, inclusive, and efficient
            sports management system that nurtures talent, promotes fairness,
            and ensures access to resources for athletes across India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
