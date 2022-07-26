import React from "react";

const Message=(props)=>{
    return(

    <div className="col s12 m8 offset-m2 16 offset-13">
        <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
                {props.speaks === 'bot' &&
                <div className="col s2">
                    <a href="/" className="btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>
                </div>
                }

                <div className="col s9">
                    <span className="black-text">
                        {props.text}
                        </span>
                </div>
                
                {props.speaks === 'me' &&
                <div className="col s2">
                    <a href="/" className=" btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>
                </div>
                
                }
            </div>
        </div>
    </div>
);

};

export default Message;