import React from 'react';
import { Link } from 'react-router-dom';

function BottomPanel() {
  return (
    <div className="bottom-panel__container">
      <div className="bottom-panel__text-box first">
        <h2 className="text-box__header">Stai pensando ad un progetto?</h2>
        <div>
          <p className="text-box__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore
          </p>
          <Link to="/home">Approfondisci</Link>
        </div>
      </div>
      <div className="bottom-panel__text-box second">
        <h2 className="text-box__header">Vi aspettiamo alla fiera Euroluce</h2>
        <div>
          <p className="text-box__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore
          </p>
          <Link to="/home">Approfondisci</Link>
        </div>
      </div>
      <div className="bottom-panel__text-box third">
        <h2 className="text-box__header">Scopri la nuova collezione</h2>
        <div>
          <p className="text-box__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore
          </p>
          <Link to="/home">Approfondisci</Link>
        </div>
      </div>
    </div>
  );
}

export default BottomPanel;
