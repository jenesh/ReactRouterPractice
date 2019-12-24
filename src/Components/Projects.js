import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";

const Projects = ({ match }) => {
  const [title, setTitle] = useState("Click a project to view");
  return (
    <div onClick={e => setTitle(e.target.innerText)}>
      <ul>
        <li>
          <Link to={match.url + "/winstagram"}>Winstagram</Link>
        </li>
        <li>
          <Link to={match.url + "/winfolio"}>Winfolio</Link>
        </li>
        <li>
          <Link to={match.url + "/winmart"}>Winmart</Link>
        </li>
      </ul>
      <Switch>
        <Route path={match.url} render={() => <div>{title}</div>} />
      </Switch>
    </div>
  );
};

export default Projects;
