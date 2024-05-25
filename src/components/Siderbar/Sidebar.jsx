import React, { useContext, useState, useEffect } from 'react';
import './sidebar.css';
import { assets } from '../../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(true);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    // Effect to handle sidebar state based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setExtended(true); // Always extended on larger screens
            } else {
                setExtended(false); // Collapsed on smaller screens
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className={`sidebar ${extended ? 'extended' : ''}`}>
                <div className="top">
                    <img
                        onClick={() => setExtended(prev => !prev)}
                        className='menu'
                        src={assets.menu_icon}
                        alt="Menu Icon"
                    />
                    <div onClick={() => newChat()} className="new-chat">
                        <img src={assets.plus_icon} alt="Plus Icon" />
                        {extended ? <p>New Chat</p> : null}
                    </div>
                    {extended && window.innerWidth > 600 ? (
                        <div className="recent">
                            <p className='recent-title'>Recent</p>
                            {prevPrompts.map((item, index) => (
                                <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="Message Icon" />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                {extended && window.innerWidth > 600 ? (
                    <div className="bottom">
                        <div className="bottom-item recent-entry">
                            <img src={assets.question_icon} alt="Question Icon" />
                            {extended ? <p>Help</p> : null}
                        </div>
                        <div className="bottom-item recent-entry">
                            <img src={assets.history_icon} alt="History Icon" />
                            {extended ? <p>Activity</p> : null}
                        </div>
                        <div className="bottom-item recent-entry">
                            <img src={assets.setting_icon} alt="Settings Icon" />
                            {extended ? <p>Settings</p> : null}
                        </div>
                    </div>
                ) : null}
            </div>
            {window.innerWidth <= 600 && (
                <img
                    onClick={() => setExtended(prev => !prev)}
                    className='menu'
                    src={assets.menu_icon}
                    alt="Menu Icon"
                />
            )}
        </>
    );
};

export default Sidebar;
