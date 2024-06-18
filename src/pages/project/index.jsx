import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import TagCard from '../../components/TagCard';
import SEO from '../../components/Seo';


const ProjectData = [
  {
    img: '/project/project_techskills.png',
    date: '12/2020',
    name: 'Data Skills Radar',
    url: 'http://dataskills.mehd.io/',
    desc: 'Get technical skills insights from data job ads scanned daily',
  },
  {
    img: '/project/project_wpm.png',
    date: '04/2021',
    name: 'World Population Map',
    url: 'https://worldpopulationmap.com/',
    desc: 'Country-level geo and population data.',
  },
  {
    img: '/project/datacreators.jpg',
    date: '06/2022',
    name: 'Data Creators Club',
    url: 'https://datacreators.club',
    desc: 'Learn from data content creators on your favorite platform !',
  },
];


const Project = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Project"
        description="a couple of data and web projects I've done"
        path="/project"
        keywords={['Mehdi', 'OUAZZA', 'data engineer', 'technology']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Project</h1>
        </div>
        <Row gutter={[40, 20]}>
          {
            ProjectData.map((val) => (
              <Col key={val.name} xs={24} sm={24} md={12} lg={8}>
                <TagCard
                  img={val.img}
                  name={val.name}
                  date={val.date}
                  description={val.desc}
                  url={val.url}
                />
              </Col>
            ))
          }
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Project;
