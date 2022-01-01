import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import DotBlur from "../DotBlur";

function FromToState() {
    const state = useContext(GlobalState);
    const [reloDetail] = state.ReloDetail.ReloDetail;
  return (
    <div className="fromto">
      <div className="fromto__img">
        <img src="/asset/img/Screenshot_1.png" alt="" />
      </div>
      <div className="container">
        <div className="progressline">
          <div className="line">
            <div className="dot-wrap-first">
              <DotBlur />
            </div>
            <div className="logo-circle">
              <img src="asset/img/bird.png" alt="" />
            </div>
            <div className="dot-wrap-last">
              <DotBlur />
            </div>
          </div>

          <div className="bottom-line">
            <div className="location">
              <span>{reloDetail.originCityName}</span>
            </div>
            <div className="location">
              <span>{reloDetail.destCountryName}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FromToState;
