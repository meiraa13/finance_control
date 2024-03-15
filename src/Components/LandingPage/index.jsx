import logoIndex  from "./assets/landing-img.svg";
import "./landingPage.css";



export function LandingPage({ changePage }) {
  return (
    <div className="div-page">
      <div className="div-main-landing container">
        <div className="div-landing-1">
          <h3>Transaction Tracker</h3>
          <h1>Keep track of your financials!</h1>
          <p>In a quick and safe manner</p>
          <button className="btn-start" onClick={changePage}>Start</button>
        </div>
        <div className="div-landing-2">
          <img className="landing-img" src={logoIndex}></img>
        </div>
      </div>
    </div>
  );
}
