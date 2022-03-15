import React, {useState} from 'react';
import Typical from 'react-typical';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import imgBack from '../../assets/ContactMe/mailz.jpeg';

import './ContactMe.css';

export default function (props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className="contact-me-container" id={props.id || ""}>
            <ScreenHeading 
                title={"Contact Me"}
                subHeading={"Let's Keep In Touch"}
            />
            <div className="central-form">
                <div className="col">
                    <h2>
                        <Typical 
                            loop={Infinity}
                            steps={[
                                "Get In Touch 🤟",
                                1000,
                                "Email Me 📧",
                                1000
                            ]}
                        />
                    </h2>
                    <div className="colz-icon">
                        <a href='#'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-envelope-square'></i>
                        </a>
                    </div>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt="Not found" />
                    </div>
                    <form action="">
                        <p>{banner}</p>
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={handleName} value={name}/>
                        
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleEmail} value={email}/>
                        
                        <label htmlFor="message">Message</label>
                        <textarea type="text" onChange={handleMessage} value={message}/>


                        <div className="send-btn">
                            <button type='submit'>
                                send <i className="fa fa-paper-plane" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
