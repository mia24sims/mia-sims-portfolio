import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-6">
            <h4>Get a good view</h4>
            <ul>
              <li>Open-sourced projects</li>
              <button class="btn btn-primary">View</button>
            </ul>
          </div>
          <div class="col"></div>
        </div>
        <div class="row">
                      <div class="col"></div>

          <div class="col-lg-6">

            <h4> Connect with me</h4>
            <ul>
              <li>my email</li>
              <br />
              <li>linkedin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
