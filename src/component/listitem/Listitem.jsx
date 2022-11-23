import React from 'react'
import "./Listitem.css"
import { PlayArrow,Add,ThumbUpOffAlt,ThumbDownOffAlt
} from "@mui/icons-material";

export default function Listitem() {
  return (
    <div className='listitem'>
      <img src='http://splashreport.com/wp-content/uploads/2017/01/Annabelle-2.jpg' />
      <div className='itemInfo'>
        <PlayArrow/>
        <Add/>
        <ThumbUpOffAlt/>
        <ThumbDownOffAlt/>
      </div>
    </div>
  )
}
