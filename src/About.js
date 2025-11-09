import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About" id="About">
      <h2>A little about me..</h2>

      <div class="container text-center">
        <div class="row">
          <div class="col-md-2 dev">
            <h4> Frontend Developer</h4>
            <p>I enjoy building and designing from a blank canvas</p>
            <h6>My languages / Tools</h6>
            <ul>
              <li> React </li>
              <li>HTML CSS Javascript</li>
              <li> VS Code</li>
              <li>Netlify</li>
              <li>Bootstrap</li>
              <li>Github</li>
            </ul>
          </div>

          <div class="col-md-2 edu">
            <h4> Experience </h4>
            <p>
              I am breaking into tech after taking phenomenal online courses
            </p>
            <h6>Education</h6>

            <ul>
              <li>shecodes workshop </li>
              <li>code-cademy</li>
              <li>degree*</li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}
