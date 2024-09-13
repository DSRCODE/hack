import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon
} from 'mdb-react-ui-kit';
import Nav from '../Components/Nav';
import { useNavigate } from 'react-router-dom';

export default function AllUser() {
    const navigate = useNavigate();
  // Array of profile data
  const profiles = [
    {
      id: 1,
      name: 'Virat Kohli',
      date: '11 April, 2021',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      title: 'Cricket',
      position: 'Batsman',
    },
    {
      id: 2,
      name: 'Lionel Messi',
      date: '12 May, 2021',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp',
      title: 'Football',
      position: 'Forward',
    },
    {
      id: 3,
      name: 'MS Dhoni',
      date: '21 June, 2021',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp',
      title: 'Cricket',
      position: 'Wicketkeeper-Batsman',
    },
    {
      id: 4,
      name: 'Cristiano Ronaldo',
      date: '15 July, 2021',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp',
      title: 'Football',
      position: 'Forward',
    },
    {
      id: 5,
      name: 'Rohit Sharma',
      date: '30 August, 2021',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp',
      title: 'Cricket',
      position: 'Batsman',
    },
    {
      id: 6,
      name: 'Neymar Jr.',
      date: '5 September, 2021',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp',
      title: 'Football',
      position: 'Forward',
    },
    {
      id: 7,
      name: 'Ravindra Jadeja',
      date: '22 October, 2021',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-7.webp',
      title: 'Cricket',
      position: 'All-Rounder',
    },
    {
      id: 8,
      name: 'Harry Kane',
      date: '2 November, 2021',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      title: 'Football',
      position: 'Forward',
    },
    {
      id: 9,
      name: 'Jasprit Bumrah',
      date: '19 December, 2021',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-9.webp',
      title: 'Cricket',
      position: 'Bowler',
    },
    {
      id: 10,
      name: 'Kevin De Bruyne',
      date: '14 January, 2022',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-10.webp',
      title: 'Football',
      position: 'Midfielder',
    },
    {
      id: 11,
      name: 'KL Rahul',
      date: '29 February, 2022',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-11.webp',
      title: 'Cricket',
      position: 'Batsman',
    },
    {
      id: 12,
      name: 'Megan Rapinoe',
      date: '15 March, 2022',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-12.webp',
      title: 'Football',
      position: 'Midfielder',
    },
  ];
  

  return (
    <section className="vh-100" style={{ backgroundColor: 'white' }}>
      <Nav />
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol xl="12">
            <MDBTypography tag='h2' className="text-center mb-5"  style={{fontSize:"24px"}}>All Players</MDBTypography>
            <MDBRow >
              {profiles.map((profile) => (
                <MDBCol lg="4" md="8" className="mb-4" key={profile.id} onClick={()=>navigate("/user")}>
                  <MDBCard style={{ borderRadius: '15px', background: "skyblue", color: "white" }}>
                    <MDBCardBody className="p-3">
                      <MDBTypography tag='h4'>{profile.title}</MDBTypography>
                      <MDBCardText className="small">
                        <MDBIcon far icon="star" size="lg" />
                        <span className="mx-2">|</span> Created by <strong>{profile.name}</strong> on {profile.date}
                      </MDBCardText>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-start align-items-center">
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="cog me-2" style={{ color: "white" }} /> <span className="  " style={{ color: "white" }}>settings</span>
                        </MDBCardText>
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="link ms-4 me-2" /> <span className="">program link</span>
                        </MDBCardText>
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="ellipsis-h ms-4 me-2" /> <span className="">more options</span> <span className="ms-3 me-4">|</span>
                        </MDBCardText>
                        <a href="#!">
                          <MDBCardImage
                            width="35"
                            src={profile.avatar}
                            alt="avatar"
                            className="rounded-circle me-3"
                            fluid />
                        </a>
                        <MDBBtn outline color="dark" floating size="sm">
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
