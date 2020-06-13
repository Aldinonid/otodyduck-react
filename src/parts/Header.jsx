import React from "react";
import Button from "elements/Button";
import BrandIcon from "./IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered) {
    return (
      <header className="spacing-sm">
        <div className="container">
          <div className="navbar navbar-expand-lg navbar-light">
            <Button type="link" href="" className="brand-text-icon mx-auto">
              Stay<span className="text-gray-900">cation.</span>
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/all-class")}`}>
                <Button className="nav-link" type="link" href="/all-class">
                  All Class
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/flow-learn")}`}>
                <Button className="nav-link" type="link" href="/flow-learn">
                  Flow Learn
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/login")}`}>
                <Button
                  className="btn btn-primary login"
                  type="link"
                  href="/login"
                >
                  Login
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
