import { React, useState } from "react";
import "./support.css";
import { Icon, InlineIcon } from "@iconify/react";
import menuIcon from "@iconify-icons/entypo/menu";
import cross11 from "@iconify-icons/maki/cross-11";
import { Link } from "react-router-dom";
function Support() {
  const [hamburgerSwitch, setHamburgerSwitch] = useState(false);
  const handleHamburger = () => {
    /* Dropdown */
    const dropdown = document.querySelector(".support__headerDropDown");
    if (hamburgerSwitch) {
      dropdown.style.top = "-4em";
      setHamburgerSwitch(false);
    } else {
      dropdown.style.top = "4em";
      setHamburgerSwitch(true);
    }

    /* Hamburger */
    const hamburgerOpen = document.querySelector(
      ".support__header--hamburger--open"
    );
    const hamburgerClose = document.querySelector(
      ".support__header--hamburger--close"
    );
    if (hamburgerSwitch) {
      hamburgerOpen.style.display = "block";
      hamburgerClose.style.display = "none";
    } else {
      hamburgerClose.style.display = "block";
      hamburgerOpen.style.display = "none";
    }
  };

  return (
    <div>
      <article className="support">
        <header>
          <div className="support__header" id="support__header">
            <span className="support__header--logo"> </span>

            <span
              className="support__header--hamburger--open"
              onClick={handleHamburger}
            >
              <Icon icon={menuIcon} color="#ffff" width="2em" height="2em" />
            </span>
            <span
              className="support__header--hamburger--close"
              onClick={handleHamburger}
            >
              {" "}
              <Icon icon={cross11} color="#ffff" width="2em" height="2em" />
            </span>
            <div className="support__header--links">
              <a href="#">English</a>
              <a href="#">Version 4.47.25</a>
              <a href="https://login.blockchain.com/#/help" rel="noreferrer">
                Need help?
              </a>
            </div>
          </div>

          <div className="support__headerDropDown">
            <span onClick={handleHamburger}>English</span>
            <span onClick={handleHamburger}>Version 4.47.25</span>
            <span onClick={handleHamburger}>Need help?</span>
          </div>
        </header>

        <section className="support__content">
          <div className="support__content--title">Submit a request</div>
          <div className="support__content--textwrapper">
            {" "}
            <div className="support__content--text">
              {" "}
              <b>Notice:</b> Our support team is currently dealing with a high
              volume of requests and may take longer than usual to respond.
              Please check out our{" "}
              <a
                href="https://support.blockchain.com/hc/en-us/"
                rel="noreferrer"
              >
                Support Center
              </a>{" "}
              for clarification on most issues. <br /> <br /> One ticket is all
              it takes! We respond to cases in the order we receive them, so
              creating multiple cases will delay our response and may cause your
              inquiry to be filtered as spam. Your inquiry is important to us
              and we will work diligently to tackle any outstanding problems as
              soon as possible. <br />
              <b>
                {" "}
                To assist us in resolving your issue as soon as possible, please
                provide us with specific information regarding your request.
                Screenshots (in jpeg or png format only, please), exact error
                messages, and order/transaction IDs (if applicable) are most
                useful.
              </b>
            </div>
          </div>

          <footer className="support__footer">
            <div className="support__footer--form">
              <div className="support__footer--label">
                <label for="request">Please choose a request type below</label>
              </div>
              <div className="support__footer--select">
                <select
                  name="request"
                  id="request"
                  className="support__content--select"
                >
                  <option value="__" selected>
                    __
                  </option>
                  <option value="Product Problems: Sending, Receiving, Settings, and Other Wallet, Lockbox, or Block Explorer Related Questions">
                    Product Problems: Sending, Receiving, Settings, and Other
                    Wallet, Lockbox, or Block Explorer Related Questions
                  </option>
                  <option value="Security and Login: Lost Passwords, Compromised Wallets, 2FA Problems, Wallet Identifiers">
                    Security and Login: Lost Passwords, Compromised Wallets, 2FA
                    Problems, Wallet Identifiers
                  </option>
                  <option value="Security and Login: Lost Passwords, Compromised Wallets, 2FA Problems, Wallet Identifiers">
                    Security and Login: Lost Passwords, Compromised Wallets, 2FA
                    Problems, Wallet Identifiers
                  </option>
                  <option value="Swap: For Crypto-to-Crypto Exchange Issues">
                    Swap: For Crypto-to-Crypto Exchange Issues
                  </option>
                  <option value="Identity Verification">
                    Identity Verification
                  </option>
                  <option value="Buy &amp; Sell / Earn Interest / Borrow services in the Wallet">
                    Buy &amp; Sell / Earn Interest / Borrow services in the
                    Wallet
                  </option>
                  <option value="Feedback &amp; Company Information: Advertising, Careers, Comments, and Complaints">
                    Feedback &amp; Company Information: Advertising, Careers,
                    Comments, and Complaints
                  </option>{" "}
                </select>
              </div>
            </div>
            <Link to="/login">
              <div className="support__footer--button">
                Create a Support Ticket
              </div>
            </Link>
          </footer>
        </section>
      </article>
    </div>
  );
}

export default Support;
