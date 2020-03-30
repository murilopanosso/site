import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import './SkillCard.css';

const setOnMouseLeave = (flipped, set) => {
  if (flipped) {
    set(false);
  }
};


const SkillCard = ({ cardImage, backText }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div>
      <div className="root-card" onKeyDown={() => {}} onClick={() => set((state) => !state)}>
        <a.div
          className="c back"
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
        >
          <Image className="img-card" src={cardImage} style={{ height: '100px', width: '100px' }} rounded />
        </a.div>
        <a.div onMouseOutCapture={() => setOnMouseLeave(flipped, set)} className="c front" style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }}>
          <div>{backText}</div>
        </a.div>
      </div>
    </div>
  );
};


SkillCard.propTypes = {
  cardImage: PropTypes.string.isRequired,
  backText: PropTypes.string.isRequired,
};


export default SkillCard;
