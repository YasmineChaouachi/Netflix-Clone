import React, { useRef, useState } from 'react'
import './List.css'
import ListItem from "../listitem/Listitem"
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

export default function List() {
    const [isMoved, setIsMoved] = useState(false)
    const [slideNum, setSlideNum] = useState(0)

    const listRef = useRef()
    const handleClick = (direction) => {
        setIsMoved(true)

        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNum > 0) {
            setSlideNum(slideNum - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`

        }
        if (direction === "right" && slideNum < 7) {
            setSlideNum(slideNum + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`

        }
    }

    return (
        <div className='list'>
            <span className='listTitle'>Continue to watch</span>
            <div className='wrapper'>
                <ArrowBackIosNew className='sliderArrow left' onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }} />
                <div className='container' ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />


                </div>
                <ArrowForwardIos className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}
