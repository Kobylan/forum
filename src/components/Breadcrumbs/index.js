import React, { useEffect, useState } from "react";
import { useLocation, useHistory, NavLink } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation().pathname.split("/");
  const history = useHistory();
  const breadcrumbs = location.filter((breadcrumb) => breadcrumb !== "");
  const [active, setActive] = useState(breadcrumbs[breadcrumbs.length - 1]);
  useEffect(() => {
    setActive(breadcrumbs[breadcrumbs.length - 1]);
  }, [breadcrumbs]);
  const links = (index) => {
    let result = "";
    for (let i = 0; i <= index; i++) {
      result += breadcrumbs[i] + "/";
    }
    return result;
  };
  const renderBreadcrumbs = breadcrumbs.map((breadcrumb, index) => (
    <>
      <div
        key={breadcrumb}
        className={`pg-10 cursor-pointer text-uppercase color-${
          active === breadcrumb ? "gray" : "dark-gray"
        }`}
        onClick={() => history.push(`/${links(index)}`)}
      >
        {breadcrumb}
      </div>
      {breadcrumbs.length !== index + 1 && (
        <div className="color-dark-gray">{">"}</div>
      )}
    </>
  ));
  return (
    <div
      className="d-flex align-items-center"
      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "15px" }}
    >
      {renderBreadcrumbs}
    </div>
  );
};

export default Breadcrumbs;
