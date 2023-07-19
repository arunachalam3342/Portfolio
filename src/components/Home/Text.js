import React from 'react'
import '../../Pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "ReactJs Developer",
          "FrontEnd Developer",
          "Programmer",
          "Software Engineer",
          "Data Analyst",
          "Database Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text