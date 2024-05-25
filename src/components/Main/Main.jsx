import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();     
      onSent(input);
    }
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>GemTalk</p>
        <img src='avatar.png' alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Dev</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Help me craft a text response to a friend.</p>
                <img src={assets.compass_icon} alt="compass_icon" />
              </div>
              <div className="card">
                <p>Flights to Tokyo and Seoul, and things to do</p>
                <img src={assets.bulb_icon} alt="bulb_icon" />
              </div>
              <div className="card">
                <p>Find hotels in Recoleta in Buenos Aires, and things to do</p>
                <img src={assets.message_icon} alt="message_icon" />
              </div>
              <div className="card">
                <p>Write a thank you note to my colleague</p>
                <img src={assets.code_icon} alt="code_icon" />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            <div className="result-title">
              <img src='avatar.png' alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
                ? <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                  </div>
                : <p dangerouslySetInnerHTML={{__html: resultData}}></p>
              }
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder='Enter a prompt here'
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              {input && <img src={assets.send_icon} alt="send_icon" onClick={() => onSent(input)} />}
            </div>
          </div>
          <p className='bottom-info'>
          GemTalk may display inaccurate info, including about people, so double-check its responses.<span className='underline'>Your privacy & GemTalk Apps</span> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
