import "../styles/Card-style.css";
import { MessageSquareMore, UserRoundArrowLeft, UserRoundPlus, CircleDollarSign, Mail, UsersRound } from "lucide-react";

const card = (props, key) => {
  return (
    <div className="profile-box">
        <div className="top-bar"><span></span></div>
        <div className="profile-bar">
            <div className="profile-img">
                <img src={props.img} alt="" />
            </div>
            <h3>{props.name}</h3>
            <div className="contact-details">
                <div className="email">{props.email}</div> | <div className="website">{props.website}</div>
            </div>
            <div className="current-company">United Arab Emirates</div>            
        </div>
        <div className="middle-bar">
            <div className="requests-container">
                <div className='icon'>
                    <MessageSquareMore />
                    <strong>{props.msgcount}</strong>
                </div>
                <div className='icon'>
                    <UserRoundArrowLeft />
                    <strong>{props.requestreceived}</strong>
                </div>
                <div className='icon'>
                    <UserRoundPlus />
                    <strong>{props.requestsent}</strong>
                </div>
                <div className='icon'>
                    <CircleDollarSign />
                    <strong>{props.charge}</strong>
                </div>
            </div>
            <div className="desc">
                <p>{props.bio}</p>
            </div>            
        </div>
        <div className="bottom-bar">
            <div className="req-button"><UsersRound />Follow</div>
            <div className="req-button"><Mail />Message</div>
        </div>
    </div>
  )
}

export default card
