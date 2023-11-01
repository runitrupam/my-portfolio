import React, { Component } from "react";
import { Icon } from "@iconify/react";
import Mongodb from "@iconify/icons-logos/mongodb";
import reactIcon from "@iconify/icons-logos/react";
import django from "@iconify/icons-logos/django";
import python from "@iconify/icons-logos/python";
import postgresql from "@iconify/icons-logos/postgresql";
import docker from "@iconify/icons-logos/docker";
import aws from "@iconify/icons-logos/aws";


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px" width = '220px'
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={python}
                    style={{ fontSize: "200%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={django}
                    style={{ fontSize: "200%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={postgresql}
                    style={{ fontSize: "200%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={Mongodb}
                    style={{ fontSize: "200%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={docker}
                    style={{ fontSize: "200%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={aws}
                    style={{ fontSize: "200%", margin: "9% 5% 0 5%" }}
                  />
                  
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
