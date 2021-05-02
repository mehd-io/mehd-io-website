import React from 'react';
import {
  Card
} from 'antd';
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons'

const MusicCard = (props) => {
  const {
    description, img, name, spotifyUrl, youtubeUrl, facebookUrl, date
  } = props;
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img alt="example" src={img} />
        }
        actions={[

          <a href={spotifyUrl}><img src="/icons/spotify_color.svg" alt="An SVG of an eye" key="spotify" width={30} height={30} /></a>,
          <a href={youtubeUrl}><img src="/icons/youtube_color.svg" alt="An SVG of an eye" key="youtube" width={30} height={30} /></a>,
          <a href={facebookUrl}><img src="/icons/facebook_color.svg" alt="An SVG of an eye" key="facebook" width={30} height={30} /></a>,
        ]}
      >
        <h3>{name}</h3>
        <h4>{date}</h4>
        {description}
      </Card>
    </div>
  );
};

export default MusicCard;
