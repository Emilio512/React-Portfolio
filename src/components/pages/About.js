import React from 'react';
import '../../styles/About.css';
import resume from '../../assets/images/resume.pdf'

export default function About() {
  return (
    <div className="sizing">
      <h1>About Page</h1>
<div className="align">
<h2> Hello, I am Emilio Estevez and I am a driven, dedicated,
    and detail oriented Web Developer in Austin, TX. This was all done in React.js! Here is my <a href="https://www.linkedin.com/in/edward-estevez-962789175/" target="_blank">LinkedIn! </a> , <a href={resume} target="_blank">Resume! </a> and <a href="https://github.com/Emilio512" target="_blank">Github! </a> 
</h2>

</div>
</div>
  );
}
