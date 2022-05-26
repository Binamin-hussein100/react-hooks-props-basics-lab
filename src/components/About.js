import React from "react";
import Links from "./links";


function About(props) {
  // console.log(props.userDetails)
  return (
    <div id="about">
      <h2>About Me</h2>
      <p> {props.userDetails.bio}</p>
 
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <div>
        <Links master={props.userDetails}/>
      </div>
    </div>
  );
}

export default About;
