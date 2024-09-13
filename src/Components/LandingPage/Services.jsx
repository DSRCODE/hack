import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../../Styles/Service.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with animation duration
  }, []);

  const services = [
    {
      id: 1,
      title: 'Academy Monitoring',
      description: 'Track and analyze the performance and development of sports academies, helping them improve training programs and outcomes.',
      icon: '🏫',
    },
    {
      id: 2,
      title: 'Player Progress',
      description: 'Monitor individual player progress, including performance metrics, skill growth, and health data, to enhance player development.',
      icon: '⚽',
    },
    {
      id: 3,
      title: 'Leagues Information',
      description: 'Provide detailed information about leagues, including standings, schedules, team stats, and player performances across seasons.',
      icon: '🏆',
    },
    {
      id: 4,
      title: 'Match Analytics',
      description: 'Analyze match data and statistics in real-time to help coaches and teams make informed tactical decisions during games.',
      icon: '📊',
    },
    {
      id: 5,
      title: 'Injury Prevention',
      description: 'Use data analytics and player monitoring to prevent injuries, optimize recovery, and ensure player well-being.',
      icon: '🩹',
    },
    {
      id: 6,
      title: 'Sports Event Management',
      description: 'Organize and manage sports events, including scheduling, venue logistics, and participant coordination.',
      icon: '🎫',
    },
  ];
  

  return (
    <div className='addservices'>
        <h2 className="font-z-25" style={{fontSize:"28px",fontWeight:"600 "}}>Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div
            key={service.id}
            className='service-box'
            data-aos='fade-up' // AOS attribute for fade-up animation
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
