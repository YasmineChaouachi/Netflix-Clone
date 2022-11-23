import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'
import "./featured.css"

function Featured() {
    return (
        <div className="featured">
            <img src="https://th.bing.com/th/id/R.fd1ae11a6d5d54e540c4e9b55d31156a?rik=fCqpqYfKhGny5g&pid=ImgRaw&r=0" alt="" />
            <div className="info">
                <img src="https://th.bing.com/th/id/R.282075199f679570f7a5b4dcfea3330a?rik=gcNlpRrwjl1HiQ&pid=ImgRaw&r=0" alt="" />
                <span className="desc">
                    Batman,Lieutenant Gordon and District Attorney Harvey 
                    Dent go up against the Joker,a criminal mastermind in 
                    ghoulish makeup terrorizing Gothman City.
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