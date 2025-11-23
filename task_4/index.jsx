import { useState } from "react";

const useActive = (callback) => {
  const [isActive, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
    callback();
  };

  return { isActive, handleMouseEnter };
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  const { isActive, handleMouseEnter } = useActive(mouseEnterCallbak);

  return (
    <div onMouseEnter={handleMouseEnter} className={isActive ? "active" : ""}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  const { isActive, handleMouseEnter } = useActive(mouseEnterCallbak);

  return (
    <div onMouseEnter={handleMouseEnter} className={isActive ? "active" : ""}>
      <p>{content}</p>
    </div>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  const { isActive, handleMouseEnter } = useActive(mouseEnterCallbak);

  return (
    <div onMouseEnter={handleMouseEnter} className={isActive ? "active" : ""}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </div>
  );
};
