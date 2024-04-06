import React from "react";

export default function Header() {
  return (
    <>
      <div className="text-red-700 text-6xl py-4 text-center ">
        StarWars Universe Explorer
      </div>
      <div className="text-xl text-center px-20 text-[#4e4e50]">
        Star Wars is a globally renowned science fiction franchise created by
        filmmaker George Lucas. It encompasses a vast fictional universe set in
        a distant galaxy "far, far away" and spans various mediums including
        films, television series, novels, comic books, video games, and more.{" "}
        <span className="text-[#950740] italic">
          <a href="https://en.wikipedia.org/wiki/Star_Wars">read more</a>
        </span>
      </div>
    </>
  );
}
