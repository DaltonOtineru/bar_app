import React, { useState } from "react";
// import { TableDatePicker } from "./TableDatePicker";
// import DatePicker from "react-date-picker";
// import "react-datepicker/dist/react-datepicker.css";

//   const [value, onChange] = useState(new Date());

export const Contact = () => {
  return (
    <div className="contact-book">
      <div className="cb-inner-wrap">
        <div className="contact">
          <h3>CONTACT US</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content.
          </p>
          <div className="contact-info">
            619-955-5551 | info@sodabarpresents.com
          </div>
        </div>
        <div className="book">
          <h3 className="title">BOOK A TABLE</h3>
          <div className="dropdowns">
            {/* <DatePicker onChange={onChange} value={value} /> */}
            <select>
              <option value="" disabled selected>
                Date
              </option>
              <option>Date</option>
              <option>Date</option>
              <option>Date</option>
            </select>
            <select>
              <option value="" disabled selected>
                Time
              </option>
              <option>Time</option>
              <option>Date</option>
              <option>Date</option>
            </select>
            <select>
              <option value="" disabled selected>
                Party Size
              </option>
              <option>1 People</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
              <option>5 People</option>
              <option>6+ People</option>
            </select>
          </div>
          <button className="book-now">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};
