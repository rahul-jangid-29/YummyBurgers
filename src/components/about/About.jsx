import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Yummy Burgers</h4>
          <p>
            We are Yummy Burgers. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Rahul Jangid</h3>
            </div>

            <p>
              I am Rahul Jangid, the founder of Yummy Burgers. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
