// import React, { useState } from "react";
// import "./Listitem.css";
// import {
//   PlayArrow,
//   Add,
//   ThumbUpOffAlt,
//   ThumbDownOffAlt,
// } from "@mui/icons-material";

// export default function Listitem(index) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="listItem"
//       style={{ left: isHovered && index * (225 + 2.5) - 50 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <img
//         src="http://splashreport.com/wp-content/uploads/2017/01/Annabelle-2.jpg"
//         alt=""
//       />
//       {isHovered && (
//         <>
//           <video src="#" autoPlay={true} loop />
//           <div className="itemInfo">
//             <div className="icons">
//               <PlayArrow className="icon" />
//               <Add className="icon" />
//               <ThumbUpOffAlt className="icon" />
//               <ThumbDownOffAlt className="icon" />
//             </div>
//             <div className="itemInfoTop">
//               <span>1 hour 14 mins</span>
//               <span className="limit">+16</span>
//               <span>1999</span>
//             </div>
//             <div className="desc">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Praesentium hic rem eveniet error possimus, neque ex doloribus.
//             </div>
//             <div className="genre">Action</div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
import "./Listitem.css";
import {
  PlayArrow,
  Add,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from "@mui/icons-material";
import { useState } from "react";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://i0.wp.com/www.tvqc.com/wp-content/uploads/2019/10/jokerposter.jpg?fit=1024%2C640&ssl=1"
        alt=""
      />
      {isHovered && (
        <>
          <video
            src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRmrSN4muZUZ9KtXeyFJKG7E9vTz3kwT-pt1A"
            autoPlay={true}
            loop
          />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOffAlt className="icon" />
              <ThumbDownOffAlt className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 16 mins</span>
              <span className="limit">+16</span>
              <span>2014</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              veritatis eius debitis laborum. Repellendus cum consequuntur
              dolorem, natus soluta magnam quo fugiat voluptate id impedit
              voluptatem libero tempora vel dolores!
            </div>
            <div className="genre">Horror</div>
          </div>
        </>
      )}
    </div>
  );
}
