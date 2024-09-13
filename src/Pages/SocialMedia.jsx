import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCardBody,
    MDBCardImage,
    MDBCard,
  } from "mdb-react-ui-kit";
  import React from "react";
  import Nav from "../Components/Nav";
  import Footer from "./Footer";
  import "../Styles/Socialmidia.css"
  const imageDetails = [
    {
      id: 1,
      src: "https://media.gettyimages.com/id/2159230974/photo/team-india-celebrates-with-the-trophy-after-winning-the-icc-mens-twenty20-world-cup-2024.jpg?s=612x612&w=gi&k=20&c=O4Mge03sD4LvjNE3KMlCRvYpH_wlCWTlrN6Qmnn2r-8=",
      title: "Cricket World Cup",
    },
    {
      id: 2,
      src: "https://c4.wallpaperflare.com/wallpaper/305/279/731/world-cup-2018-wallpaper-thumb.jpg",
      title: "Football League",
    },
    {
      id: 3,
      src: "https://vid.alarabiya.net/images/2018/10/08/91978325-c7dc-4da3-bd4e-9a68cd275a62/91978325-c7dc-4da3-bd4e-9a68cd275a62_16x9_600x338.jpg",
      title: "Tennis Championship",
    },
    {
      id: 4,
      src: "https://cdn.nba.com/manage/2019/06/finals-art-creative-warriors-raptors.jpg",
      title: "Basketball Finals",
    },
    {
      id: 5,
      src: "https://img.olympics.com/images/image/private/t_16-9_760/f_auto/primary/gcwjtfukjol1i0rwspi7",
      title: "Olympic Games",
    },
    {
      id: 6,
      src: "https://www.formula1.com/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg",
      title: "Formula 1 Racing",
    },
    {
      id: 7,
      src: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/15/full/1705314808-512.jpg",
      title: "Badminton Open",
    },
    {
      id: 8,
      src: "https://resources.world.rugby/photo-resources/worldrugby/photo/2021/10/02/13aeceb8-1dda-479d-8e28-2a89ee9f732a/1344391802.jpg?width=1024",
      title: "Rugby Championship",
    },
    {
      id: 9,
      src: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/v1629790236/primary/drnylfcc23c2rb7uhcbt",
      title: "Wrestling Match",
    },
    {
      id: 10,
      src: "https://static.toiimg.com/thumb/msid-98973481,width-1280,height-720,resizemode-4/98973481.jpg",
      title: "Boxing Championship",
    },
    {
      id: 11,
      src: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg/f_auto/primary/wuam2lzlzxx7dtucxure",
      title: "Hockey World Cup",
    },
    {
      id: 12,
      src: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/v1723155022/primary/g0mkd9z8ahqfxgpk0gks",
      title: "Volleyball Finals",
    },
    {
      id: 13,
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Depart4x100.jpg",
      title: "Swimming Tournament",
    },
    {
      id: 14,
      src: "https://media.cnn.com/api/v1/images/stellar/prod/2024-04-10t173837z-465576860-up1ek4a1d0cd3-rtrmadp-3-golf-masters.jpg?c=original",
      title: "Golf Masters",
    },
  ];
  
  const SocialMedia = () => {
    return (
      <>
        <Nav />
        <MDBContainer>
          <h1 className="text-center my-3" style={{ fontSize: "22px", fontWeight: "600" }}>
            Posts Related to Sports
          </h1>
          <MDBCardBody>
            <MDBRow>
              {imageDetails.map((image) => (
                <MDBCol md="4" className="mb-4" key={image.id}>
                  <div className="image-card position-relative overflow-hidden rounded-3">
                    <MDBCardImage
                      src={image.src}
                      alt={image.title}
                      className="w-100 h-100 img-hover"
                      style={{ minHeight:"380px"}}
                    />
                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                      <h3 className="text-white text-center">{image.title}</h3>
                    </div>
                  </div>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBCardBody>
        </MDBContainer>
        <Footer />
      </>
    );
  };
  
  export default SocialMedia;
  