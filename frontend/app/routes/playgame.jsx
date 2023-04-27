import playGameStyles from "../styles/playgame.room.css";
import playerOneImage from "../../public/images/player_one.svg";
import playerTwoImage from "../../public/images/player_two.svg";

const playGame = () => {
  return (
    <div>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
      <div class="boxes-container">
          <div className="container-red">
            <div>
              <img
                className="player-icon"
                src={playerOneImage}
                width={80}
                height={80}
                alt="player-icon-two"
              />

              <p className="operative-text">Current Operatives:</p>

              {/* add operative iteration code here */}
              <p className="operative-text">-</p>
            </div>
            <button className="red-button">Join as Operative</button>
            <br></br>
            <button className="red-button">Join as Spymaster</button>
          </div>

          <div class="cards-container-5-by-5">
            <div class="card">1a</div>
            <div class="card">2a</div>
            <div class="card">3a</div>
            <div class="card">4a</div>
            <div class="card">5a</div>
            <div class="card">1b</div>
            <div class="card">2b</div>
            <div class="card">3b</div>
            <div class="card">4b</div>
            <div class="card">5b</div>
            <div class="card">1c</div>
            <div class="card">2c</div>
            <div class="card">3c</div>
            <div class="card">4c</div>
            <div class="card">5c</div>
            <div class="card">1d</div>
            <div class="card">2d</div>
            <div class="card">3d</div>
            <div class="card">4d</div>
            <div class="card">5d</div>
            <div class="card">1e</div>
            <div class="card">2e</div>
            <div class="card">3e</div>
            <div class="card">4e</div>
            <div class="card">5e</div>
          </div>

          <div className="combined-two-boxes">
          <div className="container-blue">
            <div>
              <img
                className="player-icon"
                src={playerTwoImage}
                width={80}
                height={80}
                alt="player-icon-one"
              />

              <p className="operative-text">Current Operatives:</p>

              {/* add operative iteration code here */}
              <p className="operative-text">-</p>
            </div>
            <button className="blue-button">Join as Operative</button>
            <br></br>
            <button className="blue-button">Join as Spymaster</button>
          </div>
          <div class="bottom-box">
            playGame Log
            <div>
              <input id="textclue" type="text" placeholder="Enter the clue word"></input>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export function links() {
  return [{ rel: "stylesheet", href: playGameStyles }];
}

export default playGame;
