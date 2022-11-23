import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'

function Featured() {
    return (
        <div className="featured">
            <img src="https://theentertainmentpit.co.uk/wp-content/uploads/2020/12/Joker.jpg" alt="" />
            <div className="info">
                <img src="https://th.bing.com/th/id/R.282075199f679570f7a5b4dcfea3330a?rik=gcNlpRrwjl1HiQ&pid=ImgRaw&r=0" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                    adipisci repellendus eum quasi illo, velit numquam, maxime tempora
                    sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
                    temporibus eum earum?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Featured