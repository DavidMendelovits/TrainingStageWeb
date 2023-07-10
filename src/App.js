import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          height={180}
          src={require("./hero.png")}
          lassName="App-logo"
          alt="logo"
        />
      </header>
      <div className="button-container">
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coming Soon to the App Store
        </a>
        {/* <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download on Google Play
        </a> */}
      </div>
      <div className="privacy-container">
        <h2>Privacy Policy</h2>
        <div>Effective date: [07/09/2023]</div>
        <div></div>
        <div>Training Stage does not collect any personal information.</div>
        <div>We do not share your personal information with others.</div>
        <div>
          We may change this Privacy Policy from time to time. If we make any
          changes, we will notify you by revising the "Effective Date" at the
          top of the Privacy Policy.
        </div>
        <div>
          If you have any questions about this Privacy Policy, please contact us
          by email at{" "}
          <a href="mailto:trainingstagedev@gmail.com">
            trainingstagedev@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
