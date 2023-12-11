import React from 'react'
import "./RightSidebar.scss"
import dp from "../../../assets/dp.jpg"

function RightSidebar({condition2}) {
  return (
    <div className="rightsidebar" style={{right:condition2 ? "0%" : "-160%"}}>
<div className="suggestion">
  <div className="head">
<h3>Suggested for you</h3>
  </div>

  <div className="suggest-id">
    <img src={dp} alt="dp" />
    <span>ABCDEF</span>
    <button>Follow</button>
  </div>
  <div className="suggest-id">
    <img src={dp} alt="dp" />
    <span>ABCDEF GHIJKL</span>
    <button>Follow</button>
  </div>
  <div className="suggest-id">
    <img src={dp} alt="dp" />
    <span>ABCDEF GHIJKL MNOPQR</span>
    <button>Follow</button>
  </div>
  <div className="suggest-id">
    <img src={dp} alt="dp" />
    <span>ABCDEF GHIJKL MNOPQR STUVWX</span>
    <button>Follow</button>
  </div>
  <div className="suggest-id">
    <img src={dp} alt="dp" />
    <span>ABCDEF</span>
    <button>Follow</button>
  </div>
  <div className="suggest-id">
    <img src={dp} alt="dp" />
    <span>ABCDEF GHIJKL</span>
    <button>Follow</button>
  </div>
  <div className="suggest-id">
    <img src={dp} alt="dp" />
    <span>ABCDEF GHIJKL MNOPQR</span>
    <button>Follow</button>
  </div>
  <div className="suggest-id">
    <img src={dp} alt="dp" />
    <span>ABCDEF GHIJKL MNOPQR STUVWX</span>
    <button>Follow</button>
  </div>
</div>

    </div>
  )
}

export default RightSidebar