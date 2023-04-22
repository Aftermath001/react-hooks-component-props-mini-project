import React from 'react'

function About(props) {
  return (
    <div>About
        <aside>
        <img src={props.imgSrc || "https://via.placeholder.com/215"} alt="blog logo" width="215" height="215" 
  />
  <p>${props.aboutText}</p>
</aside>
    </div>
  )
}

export default About;