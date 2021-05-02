import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import MusicCard from '../../components/MusicCard';
import SEO from '../../components/Seo';

const MusicData = [
  {
    img: '/music/chaksu.jpeg',
    date: '2019 - Present',
    name: 'Chaksu',
    spotifyUrl: 'https://open.spotify.com/artist/27Mo6S5guiiHYTTGb3rHwk?si=enONBjiHTWajrEvHVQ-hOw',
    youtubeUrl: 'https://www.youtube.com/channel/UCpP15JCBWZ4xFrBwwjMNBpg/featured',
    facebookUrl: 'https://www.facebook.com/chaksumusic',
    desc: 'Electro Pop Rock',
  },
  {
    img: '/music/stoplight.png',
    date: '2012 - 2019',
    name: 'Stoplight',
    spotifyUrl: 'https://open.spotify.com/artist/2FyO7pECp5W8mnbJEUQtmB?si=67evFUQBRoSNGfPaHZhqrA',
    youtubeUrl: 'https://www.youtube.com/channel/UCMJNRgU_UCYCUnXjBWKpBpg',
    facebookUrl: 'https://www.facebook.com/stoplightband',
    desc: 'Pop Rock',
  },
];


const Music = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Music"
        description="Here are some of my music projects"
        path="/music"
        keywords={['Mehdi', 'Ouazza', 'music', 'chaksu', 'stoplight']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Music</h1>
        </div>
        <p>
        <b>Music</b> has always been an important part of my life. Over the past years I've participated to a couple of music projects, studio sessions and live shows (+40).
          I enjoy listening and playing a large variety of music, from old to modern. Here are some of the projects were I am/was the most involved, doing <b>songwritting, vocal, guitar and music production.</b>
        </p>
        <p> While I didn't release anything since 2019, be prepared for something new in 2021 🎵 !</p>
        <Row gutter={[40, 20]}>
          {
            MusicData.map((val) => (
              <Col key={val.name} xs={24} sm={24} md={12} lg={8}>
                <MusicCard
                  img={val.img}
                  description={val.desc}
                  name={val.name}
                  spotifyUrl={val.spotifyUrl}
                  youtubeUrl={val.youtubeUrl}
                  facebookUrl={val.facebookUrl}
                  date={val.date}
                />
              </Col>
            ))
          }
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Music;
