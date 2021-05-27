import { React, useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import eyeClose from "@iconify-icons/el/eye-close";
import eyeOpen from "@iconify-icons/el/eye-open";

function Login() {
  const [togglePassword, setTogglePasswword] = useState(true);

  const handleToggle = () => {
    const inputPassword = document.querySelector(
      ".login__body__content__form--password"
    );
    const openEye = document.querySelector(".eyeOpenIcon");
    const closeEye = document.querySelector(".eyeCloseIcon");

    if (togglePassword) {
      inputPassword.type = "text";
      setTogglePasswword(false);
      openEye.style.display = "inline";
      closeEye.style.display = "none";
      console.log("on");
    } else {
      inputPassword.type = "password";
      setTogglePasswword(true);
      openEye.style.display = "none";
      closeEye.style.display = "inline";
    }
  };

  return (
    <article className="login">
      <section className="login__header">
        <div className="login__header--logo"></div>
      </section>
      <section className="login__body">
        <div className="login__body__content">
          <form action="" className="login__body__content__form">
            {" "}
            <h3>Login to start Support ticket</h3>
            <label htmlFor="">Wallet ID</label>{" "}
            <input
              type="text"
              className="login__body__content__form"
              required
              minlength="32"
            />
            <span>
              Your Wallet ID can be found at the bottom of any email we’ve ever
              sent you. Need a reminder?{" "}
              <a
                href="https://login.blockchain.com/#/reminder"
                rel="noreferrer"
              >
                Send my Wallet ID
              </a>{" "}
            </span>
            <label htmlFor="">Password</label>{" "}
            <div className="input2">
              {" "}
              <input
                type="password"
                className="login__body__content__form--password"
                required
              />
              <Icon
                icon={eyeOpen}
                className="eyeOpenIcon"
                onClick={handleToggle}
              />
              <Icon
                icon={eyeClose}
                className="eyeCloseIcon"
                onClick={handleToggle}
              />
            </div>
            <button>Log ln</button>
          </form>
          <div className="login__body__content__form--link">
            <a
              href="https://login.blockchain.com/#/mobile-login"
              rel="noreferrer"
            >
              Login via Mobile
            </a>
            <a href="https://login.blockchain.com/#/help" rel="noreferrer">
              Need some help ?
            </a>
          </div>
        </div>
      </section>
      <section className="login__footer">
        <div className="login__footer--signup">
          Don’t have a wallet?{" "}
          <a
            href="https://login.blockchain.com/#/signup"
            className="signupText"
            rel="noreferrer"
          >
            Sign Up
          </a>
        </div>
        <div className="login__footer--links">
          <a href="#">English</a>
          <a href="#">Version 4.47.25</a>
          <a href="https://login.blockchain.com/#/help" rel="noreferrer">
            Need help?
          </a>
        </div>
      </section>
    </article>
  );
}

export default Login;
