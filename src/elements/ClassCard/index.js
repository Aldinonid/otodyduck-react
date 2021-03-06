import React from "react";
import propTypes from "prop-types";

import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

import NotFound from "assets/images/no-user.png";

import "./index.scss";

export default function ClassCard(props) {
  const MAX_LENGTH = 23;
  const name = props.name;
  const className = ["badge-class", props.className];
  if (props.type === "FREE") className.push("badge-free");

  const mentorStyle = {
    height: "50px",
    width: "50px",
    backgroundImage: `url(${props.teacherImg || NotFound})`,
    backgroundSize: "cover",
    borderRadius: "50px",
  };

  return (
    <div className="card">
      <Button
        type="link"
        href={`/class/${props.slug}`}
        className="stretched-link d-block"
      ></Button>
      <img src={props.imageUrl} alt={props.name} className="img-class" />
      <h3 className="mb-3 text-dark">
        {name.length > MAX_LENGTH
          ? name.substring(0, MAX_LENGTH - 3) + "..."
          : name}
      </h3>
      <span className={className.join(" ")}>{props.type}</span>
      <br />
      <hr />
      <h4 className="mt-2 mb-3 text-dark">Rp {formatNumber(props.price)}</h4>
      <hr />
      <div className="row align-items-center no-gutters">
        <div className="mt-2 mb-3 col-auto">
          <div id="mentor-image" style={mentorStyle}></div>
        </div>
        <div className="col pl-2">
          <h5
            className="mt-2 line-height-1 text-dark"
            style={{ marginBottom: "5px" }}
          >
            {props.teacherName}
          </h5>
          <h6 className="font-weight-medium text-dark">{props.teacherJob}</h6>
        </div>
      </div>
    </div>
  );
}

ClassCard.propTypes = {
  className: propTypes.string,
  name: propTypes.string,
};
