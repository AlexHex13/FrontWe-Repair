import React from 'react'
import Whirligig from 'react-whirligig'
import MediaCard from "./Cards";
import Typography from "@material-ui/core/Typography";
import desktop from "../../../static/images/card-desktop.png";
import camera from "../../../static/images/card-camera.png";
import coffee from "../../../static/images/card-coffee.png";
import smartphone from "../../../static/images/card-smartphone.png";
import tablet from "../../../static/images/card-tablet.png";

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
                ref={(_whirligigInstance) => {
                    whirligig = _whirligigInstance
                }}
            >
                <MediaCard image={desktop} name={"Samsung NP305U1A"} sale={"от 750 рублей"}/>
                <MediaCard image={camera} name={"Asus pro P53SJ-SO0"} sale={"от 750 рублей"}/>
                <MediaCard image={coffee} name={"LG 17-ab204ng"} sale={"от 750 рублей"}/>
                <MediaCard image={smartphone} name={"Iphone 6"} sale={"от 750 рублей"}/>
                <MediaCard image={tablet} name={"Samsung NP305U1A"} sale={"от 750 рублей"}/>
                <MediaCard image={desktop} name={"Samsung NP305U1A"} sale={"от 750 рублей"}/>
                <MediaCard image={camera} name={"Samsung NP305U1A"} sale={"от 750 рублей"}/>
                <MediaCard image={smartphone} name={"Iphone 6"} sale={"от 750 рублей"}/>
            </Whirligig>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Slider;