import React, {useState} from 'react';
import Typical from 'react-typical';
import axios from 'axios';
import {toast} from 'react-toastify';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import imgBack from '../../assets/ContactMe/mailz.jpeg';

import './ContactMe.css';

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try{
            let data = {
                name,
                email,
                message,
            };
            const res = await axios.post(`/contact`, data);
            if(name.length === 0 || email.length === 0 || message.length === 0){
                setBanner(res.data.msg);
                toast.error(res.data.msg);
            } else if(res.status === 200){
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setName("");
                setMessage("");
                setEmail("");
            }

        }   catch (error){
            console.log(error);
        }
    }

    return (
        <div className="contact-me-container fade-in" id={props.id || ""}>
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
                        <a href='https://www.linkedin.com/in/ketan-shah-577915187/' target="_blank" rel="noreferrer">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/shahketan1810' target="_blank" rel="noreferrer">
                            <i className='fa fa-github-square'></i>
                        </a>
                    </div>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt="Not found" />
                    </div>
                    <form onSubmit={submitForm}>
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
