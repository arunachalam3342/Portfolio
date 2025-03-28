import React from 'react'
import '../../Pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Deloitte USI",
          "Analyst",
          "ReactJs Developer",
          "Programmer",
          "Software Engineer",
          "Data Analyst",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text