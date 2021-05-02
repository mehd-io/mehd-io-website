import React from 'react';

const TagCard = (props) => {
  const {
    img, name, description, url, date,
  } = props;
  return (
    <a href={url}>
      <div style={{
        marginTop: '20px',
        borderRadius: '20px',
        minHeight: '22rem',
        boxShadow: 'rgba(167, 167, 167, 0.22) -1px 4px 9px 3px',
      }}
      >
        <div style={{
          width: '100%',
          height: '164px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: '20px 20px 0 0',
          backgroundSize: 'cover',
          backgroundImage: `url(${img})`,
        }}
        />
        <div style={{ padding: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <h3>
              {name}
            </h3>
            <h5>
              {date}
            </h5>
          </div>
          <p>
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default TagCard;
