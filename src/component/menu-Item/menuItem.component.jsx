import React from "react";
import "./menuItem.styles.scss";

const MenuItem = ({ id, title, imageUrl, size }) => (
  <div
  //  style={{ backgroundImage: `url(${imageUrl})` }}           commenting it here and including in the below div so that on hovering the picture should be enclosed inside the menu item.
  // increasing image on hover : image should not be bigger when we hover and is included below then we are not enclosing in the content as we dnt need to change it. size of content we dnt want to change.
    className={`${size} menu-item`}
  >
  <div className="background-image"  style={{ backgroundImage: `url(${imageUrl})` }}  />  
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="sub-title">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
