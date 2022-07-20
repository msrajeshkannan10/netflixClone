import React, { useState } from "react";

const Accordin = ({ title, content }) => {
  const [show, Setshow] = useState(false);
  return (
    <div className="faq-card">
      <div className="faq-card-heading" onClick={() => Setshow(!show)}>
        <p>{title}</p>
        <span id="plus">
          {!show ? (
            <span class="add">
              <i class="material-icons">add</i>
            </span>
          ) : (
            <span class="add">
              <i class="material-icons">close</i>
            </span>
          )}
        </span>
      </div>
      <div className="line"></div>
      {show && <div class="para">{content}</div>}
    </div>
  );
};
export default Accordin;
