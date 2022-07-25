// import React from "react";

// const Card = (props) => {
//     return (
//     <div style={{width:270, paddingRight:30,width:270}}>
//         <div className="card">
//             <div className="card-image" style={{width:240}}>
//                 <img alt={props.payload.fields.header.stringValue} src={props.payolad.fields.image.stringValue}/>
//                 <span className="card-title">{props.payload.fields.header.stringValue}</span>
//         </div>
//         <div class="card-content">
//             {props.payload.fields.text.stringValue}
//         </div>
//         <div className="card-action">
//           <a target="_blank" rel="noopener noreferrer" href="props.payload.fields.link.stringValue">Check out</a>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default Card;


// import React from 'react';

// const Card = (props) => {
//     return (
//         <div  style={{ height: 270, paddingRight:30, float: 'left'}}>
//             <div className="card">
//                 <div className="card-image" style={{ width: 240}}>
//                     <img alt={props.payload.header} src={props.payload.image} />
//                     <span className="card-title">{props.payload.header}</span>
//                 </div>
//                 <div className="card-content">
//                     {props.payload.description}
//                     <p> <a href="/">{props.payload.price}</a></p>
//                 </div>
//                 <div className="card-action">
//                     <a target="_blank" rel="noopener noreferrer" href={props.payload.link}>GET NOW</a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;