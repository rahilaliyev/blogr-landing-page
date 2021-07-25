import React from "react";
import "./../design/SecondPart.scss";

const SecondPart = () => {
  return (
    <div className="background-second-part">
      <h2>Designed for the future</h2>
      <div className="alltexts">
        <div className="texts">
          <h4>Introducing an extensible editor</h4>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allow easy manipulation of embeds such as
            images, videos and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div className="texts">
          <h4>Robuts content management</h4>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With the functionality,
            you're in full control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
