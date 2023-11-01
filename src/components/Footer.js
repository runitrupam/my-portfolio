import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        let iconContent;
        if (network.name === "Leetcode") {
          // For a custom icon, use an img tag and src attribute to load the icon from the given URL
          iconContent = <img height="25px" width="25px" src={'images/' + network.image}  />;
        } else {
          // For other icons using Font Awesome or similar, keep the <i> tag
          iconContent = <i className={network.class}></i>;
        }

        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              {/* <i className={network.class}></i> */}
              {iconContent}
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
