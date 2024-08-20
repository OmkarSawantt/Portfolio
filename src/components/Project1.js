import React from "react";
import { Link } from "react-router-dom";
import image from '../images/Projects/GettyImages-626669886.jpeg'
function Project1() {
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={image} alt="name" />
      </div>
      <div className="post__content">
        <Link to={`/`}>
            <h3> postTitle </h3>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rem eius illo explicabo nemo, iure consectetur sunt, esse alias dolorum quisquam impedit. Accusantium quaerat beatae enim. Cum impedit doloribus aperiam.</p>
        <div className="post__footer">
            <Link to={`/`} className='btn category'>React</Link>
        </div>
      </div>
    </article>

  );
}

export default Project1;
