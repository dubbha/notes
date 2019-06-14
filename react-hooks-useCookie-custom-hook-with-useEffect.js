/*
  https://codesandbox.io/s/hooks-usecookie-custom-hook-x1ykj
    - maintain local state with custom useCookie hook
    - set initial state with a lazy initial state function
    - manipulate browser cookie via useEffect
*/

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

/*
  TypeScript: be explicit with return type
  https://www.slightedgecoder.com/2019/02/10/being-explicit-with-your-own-react-hook-typescript-return-type/
  const useCookie = (cookieName: string): [string, (value: string) => void, () => void] => {
*/
const useCookie = cookieName => {
  const [value, setValue] = useState(() =>
    document.cookie
      .split("; ")
      .reduce(
        (acc, cur) =>
          cur.split("=")[0] === cookieName ? `${acc}${cur.split("=")[1]}` : acc,
        ""
      )
  );

  useEffect(() => {
    value
      ? (document.cookie = `${cookieName}=${value}`)
      : (document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`);
  });

  const resetValue = () => setValue(null);

  return [value, setValue, resetValue];
};

export const CookieForm = () => {
  const [cookie, setCookie, resetCookie] = useCookie("X-Origin");

  return (
    <div>
      <input
        type="checkbox"
        checked={cookie === "blue"}
        onChange={() => setCookie("blue")}
      />
      blue
      <input
        type="checkbox"
        checked={cookie === "green"}
        onChange={() => setCookie("green")}
      />
      green
      <input type="checkbox" checked={!cookie} onChange={resetCookie} />
      default
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<CookieForm />, rootElement);
