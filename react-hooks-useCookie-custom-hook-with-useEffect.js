/*
  https://codesandbox.io/s/hooks-usecookie-custom-hook-with-useeffect-m8k5n

  react-hooks-useCookie-custom-hook-with-useEffect
    - maintain local state with custom useCookie hook
    - manipulate browser cookie via useEffect
*/

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

/*
  TypeScript: be explicit with return type
  https://www.slightedgecoder.com/2019/02/10/being-explicit-with-your-own-react-hook-typescript-return-type/
  const useCookie = (cookieName: string): [string, (value: string) => void, () => void] => {
*/
const useCookie = (cookieName, initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    value
      ? (document.cookie = `${cookieName}=${value}`)
      : (document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`);
  });

  const resetValue = () => setValue(null);

  return [value, setValue, resetValue];
};

export const getCurrentCookieValue = cookieName =>
  document.cookie
    .split("; ")
    .reduce(
      (acc, cur) =>
        cur.split("=")[0] === cookieName ? `${acc}${cur.split("=")[1]}` : acc,
      ""
    );

const cookieName = "X-Origin";

export const CookieForm = () => {
  const [cookie, setCookie, resetCookie] = useCookie(
    cookieName,
    getCurrentCookieValue(cookieName)
  );

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
