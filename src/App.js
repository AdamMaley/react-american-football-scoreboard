//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

  



    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0){
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

  }


  // home values
  const [homeValue, setHomeValue] = useState(0);
  const homeTouchdown = e => {
    setHomeValue(homeValue + 7);
  }
  const homeFieldGoal = e => {
    setHomeValue(homeValue + 3);
  }

// away values
  const [awayValue, setAwayValue] = useState(0);
  const awayTouchdown = e => {
    setAwayValue(awayValue + 7);
  }
  const awayFieldGoal = e => {
    setAwayValue(awayValue + 3);
  }

  // quarter values
  const [quarterValue, setQuarterValue] = useState(0);
  const addQuarter = e => {
    setQuarterValue(quarterValue + 1);
  }



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{homeValue}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
  <div className="away__score">{awayValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={homeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={awayTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={awayFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>

        <div className="quarterButton">
        <button onClick={addQuarter} className="awayButtons__fieldGoal">Add Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
