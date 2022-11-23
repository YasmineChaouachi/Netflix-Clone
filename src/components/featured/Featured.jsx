import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'
import "./featured.css"

function Featured({type}) {
    return (
        <div className="featured">
               {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

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