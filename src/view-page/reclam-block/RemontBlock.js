import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import img from "../../static/images/radioman.png";
import InputBlock from "../face-block/help-component/InputBlock";
import WorkBlock from "../face-block/help-component/WorkBlock";
import LongBlock from "../face-block/help-component/LongBlock";
import ProblemBlock from "../face-block/help-component/ProblemBlock";
import BigBlock from "../face-block/help-component/BigBlock";
import ComponentHeader from "../header-components/ComponentHeader"
import Footer from "../../footer/Footer";

const useStyle = makeStyles(()=>({

    body:{
        background:`url(${img}) center no-repeat`,
        width:"100%",
        height:"50vh",
        backgroundSize:"cover",
        objectPosition:"center",
        objectFit:"none"
    },
    afterBack:{
        content: '',
        height:"50vh",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,.5)",
        zIndex: 2,
        color:"white"
    },

}))


function RemontBlock(){
    const styles = useStyle()


    return (
        <div className={styles.body}>
            <div className={styles.afterBack}>
                    <InputBlock/>
            </div>
            <WorkBlock/>
            <LongBlock/>
            <ProblemBlock/>
            <BigBlock/>
            <ComponentHeader/>
            <Footer/>
        </div>
    )
}

export default RemontBlock;