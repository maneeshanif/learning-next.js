import React from "react";
import Styles from "@/components/Contact/Contact.module.css"

const ContactMe = () => {
  return (
    <>
      <div
        className={Styles.mainContainer}
        id="Contact"
      >
        <div className={Styles.sideline}></div>

        <div className={Styles.sidebox}></div>
        <div className={Styles.formbox}>
          <form
            action="https://formspree.io/f/xrbzknbe"
            target="_blank"
            method="POST"
          >
            <h1 className={Styles.heading}>
              Contact
            </h1>
            <input
              type="text"
              placeholder="First name"
              autoComplete="off"
              required
              className={Styles.forminput}
            />
            <input
              type="text"
              placeholder="Last name"
              autoComplete="off"
              required
              className={Styles.forminput}
            />
            <input
              type="email"
              placeholder="Enter your email "
              autoComplete="off"
              required
              className={Styles.forminput}
            />
            <textarea
              rows={5}
              cols={62}
              name="message"
              placeholder="Enter your text"
              defaultValue={""}
              className={Styles.forminput}
            />
            <button
              type="submit"
              className={Styles.formbtn}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;