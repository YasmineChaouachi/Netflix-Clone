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
        src={item.img}
        alt=""
      />
      {isHovered && (
        <>
          <video
            src={item.trailer}
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
              <span>{item.duration}</span>
              <span className="limit">+{item.limit}</span>
              <span>{item.year}</span>
            </div>
            <div className="desc">
             {item.description}
            </div>
            <div className="genre">{item.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}
