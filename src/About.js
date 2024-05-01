import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about_main_div">
      <div className="bg_img_div">
        <h1>About Us</h1>
      </div>

      <div className="second_div">
        <div className="left_div">
          <h5>Hysab Kytab (Private) Limited, a company of JBS</h5>
          <p>
            Hysab Kytab is a technology company that provides digital solutions
            through a <br />
            suite of financial management and consumer products.
          </p>

          <p>
            <span className="span">Hysab Kytab consumer app </span> is a user-friendly mobile app
            that offers a platform to <br />
            manage an individuals’ financial activities. It encapsulates the
            individual’s <br />
            spending, saving and budgeting information and produces a 360-degree
            view <br />
            which enables them to always stay on top of their finances. Hysab
            Kytab’s <br />
            consumer app has over <span className="span"> 640,000+ </span> users from over{" "}
            <span className="span"> 160 </span> countries, who have <br />
            clocked <span> 12 Million+ </span> transactions in Hysab Kytab.
          </p>

          <p>
          <span className="span"> Hysab Kytab PFM </span> is a white-labeled personal finance management solution, <br />
           which is a fully customizable and secure wealth management product. It can <br />
            seamlessly integrate into bank’s existing core banking applications and helps <br />
             banks maximize and optimize their revenues per branch, per customer and sell <br />
              more products to more customers many times.
              <br /> <br />

            At Hysab Kytab, we want to help people with all their money matters and connect <br />
             businesses to the right people.
          </p>
        </div>

        <div className="right_div">
            <img id="HK_img" src={"https://hysabkytab.com/wp-content/uploads/2021/10/mobile-mockup-updated-1.png"} />
        </div>
      </div>
    </div>
  );
}

export default About;
