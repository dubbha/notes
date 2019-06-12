/*
  https://codesandbox.io/s/hooks-usestate-cookie-id9nl
  - manipulate browser cookie
  - maintain local state with useState hook
*/

import React, { useState } from "react";
import ReactDOM from "react-dom";

const cookieName = "X-Origin";
const initialValue = document.cookie
  .split("; ")
  .reduce(
    (acc, cur) =>
      cur.split("=")[0] === cookieName ? `${acc}${cur.split("=")[1]}` : acc,
    ""
  );

export const CookieForm = () => {
  const [cookie, setCookie] = useState(initialValue);

  const updateCookie = origin => {
    document.cookie = `${cookieName}=${origin}`;
    setCookie(origin);
  };

  const resetCookie = () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    setCookie("");
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={cookie === "blue"}
        onChange={() => updateCookie("blue")}
      />
      blue
      <input
        type="checkbox"
        checked={cookie === "green"}
        onChange={() => updateCookie("green")}
      />
      green
      <input type="checkbox" checked={!cookie} onChange={resetCookie} />
      default
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<CookieForm />, rootElement);
