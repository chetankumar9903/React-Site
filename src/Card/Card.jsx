import React from "react";

import { NavLink } from "react-router-dom";



const Card = (props) => {
  return (
    <>
         <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={props.imgsrc} className="card-img-top custom-img " alt={props.title} />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">
                      {props.desc}
                    </p>
                    <NavLink to={props.link} className="btn btn-primary" target= "_blank">
                      Go To Explore
                    </NavLink>
                  </div>
                </div>
              </div>
    </>
  );
};

export default Card;
