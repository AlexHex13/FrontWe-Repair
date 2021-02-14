import React from 'react'
import Whirligig from 'react-whirligig'
import MediaCard from "./Cards";
import Typography from "@material-ui/core/Typography";

const Slider = () => {
    let whirligig
    const next = () => whirligig.next()
    const prev = () => whirligig.prev()

    return (
        <div>
            <Typography variant="h6" color="inherit" noWrap>
                Популярные модели
            </Typography>
            <button onClick={prev}>Prev</button>
            <Whirligig
                visibleSlides={5}
                gutter="1em"
                ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
            >
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
            </Whirligig>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Slider;