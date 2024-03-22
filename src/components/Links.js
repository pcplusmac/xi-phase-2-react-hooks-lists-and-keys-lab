import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}> <span><h4>github:</h4> {github}</span></a>
      <a href={linkedin}> <h4>linkedin:</h4> {linkedin}</a>
    </div>
  );
}

export default Links;
