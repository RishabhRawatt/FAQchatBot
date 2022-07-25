import React from "react";

const QuickReply = (props) => {
    // if (props.reply.payload) {
    if(props.reply.structValue.fields.payload){
    return(
        
        <a style={{margin:5}} href="/" className="waves-effect waves-light btn"
            onClick={(event)=>
            props.click(
                event,
                props.reply.structValue.fields.payload.stringValue,
                props.reply.structValue.fields.text.stringValue
            ) 
             }>
             
            {props.reply.structValue.fields.text.stringValue}
        </a>
        
    );
}else{
    return(
        <a style={{margin:5}} href={props.reply.structValue.fields.link.stringValue} target="_blank"
        className="waves-effect waves-light btn">
            {props.reply.structValue.fields.text.stringValue}
            </a>
    );
}
};

export default QuickReply;




