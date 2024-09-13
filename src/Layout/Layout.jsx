import React from 'react'
import Nav from '../Components/Nav'
import Slider from '../Components/LandingPage/Slider'
import Sport from '../Components/LandingPage/Sport'
import Services from '../Components/LandingPage/Services'
import Blogs from '../Components/LandingPage/Blogs'
import "../Styles/Layout.css"
const Layout = () => {
  const sportData = [
    {
      name: "Cricket",
      backImg:
        "https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=",
      icon: "https://olympic.ind.in/public/images/sports/1910919820.png",
    },
    {
      name: "Football",
      backImg: "https://olympic.ind.in/public/images/sports/774536382.jpg",
      icon: "https://olympic.ind.in/public/images/sports/557662099.png",
    },
    {
      name: "Tennis",
      backImg: "https://olympic.ind.in/public/images/sports/470187829.jpg",
      icon: "https://olympic.ind.in/public/images/sports/1387907583.png",
    },
    {
      name: "Badminton",
      backImg: "https://olympic.ind.in/public/images/sports/1093383875.jpg",
      icon: "https://olympic.ind.in/public/images/sports/924196402.png",
    },
    {
      name: "BasketBall",
      backImg: "https://olympic.ind.in/public/images/sports/187015053.jpg",
      icon: "https://olympic.ind.in/public/images/sports/1387907583.png",
    },
    {
      name: "Boxing",
      backImg: "https://olympic.ind.in/public/images/sports/1204317916.jpg",
      icon: "https://olympic.ind.in/public/images/sports/680506562.png",
    },
    {
      name: "Hockey",
      backImg: "https://olympic.ind.in/public/images/sports/1145119640.jpg",
      icon: "https://olympic.ind.in/public/images/sports/1193120684.png",
    },
    {
      name: "Kabaddi",
      backImg: "https://olympic.ind.in/public/images/sports/1691167555.jpg",
      icon: "https://olympic.ind.in/public/images/sports/719525092.png",
    },
    {
      name: "TakeWondo",
      backImg: "https://olympic.ind.in/public/images/sports/1135358699.jpg",
      icon: "https://olympic.ind.in/public/images/sports/58676954.png",
    },
    {
      name: "Wrestling",
      backImg: "https://olympic.ind.in/public/images/sports/564010407.jpg",
      icon: "https://olympic.ind.in/public/images/sports/412912982.png",
    },
    {
      name: "Cycling",
      backImg: "https://olympic.ind.in/public/images/sports/834814595.jpg",
      icon: "https://olympic.ind.in/public/images/sports/2063869361.png",
    },
    {
      name: "Wushu",
      backImg: "https://olympic.ind.in/public/images/sports/177766547.jpg",
      icon: "https://olympic.ind.in/public/images/sports/1760808722.png",
    },
    {
      name: "Gymnastics",
      backImg: "https://olympic.ind.in/public/images/sports/305013984.jpg",
      icon: "https://olympic.ind.in/public/images/sports/22191757.png",
    },
    {
      name: "Archery",
      backImg: "https://olympic.ind.in/public/images/sports/391374448.jpg",
      icon: "https://olympic.ind.in/public/images/sports/1628651552.png",
    },
  ];
  return (
    <div>
      <Nav />
      <Slider />
      <div className="sport-part">
        {sportData.map((sportData, index) => (
          <Sport data={sportData} key={index} />
        ))}
      </div>
    <Services/>
    <Blogs/>
    </div>
  );
};

export default Layout;
