import ComponentHeader from "./header-components/ComponentHeader";
import Background from "./face-block/Background";
import Slider from "./face-block/slider/Slider";
import {makeStyles} from "@material-ui/core/styles";
import ReclamBlock from "./reclam-block/ReclamBlock";


const useStyle = makeStyles(() => ({

    slider: {
        margin: "0 auto",
        width:"50%",
        height:"50%"
    }

}))


function Body() {

    const styles = useStyle()

    return (
        <div>
        <span className="header">
            <ComponentHeader/>
            <Background/>
            <div className={styles.slider}>
                <Slider/>
            </div>
            <ReclamBlock/>
        </span>


        </div>
    )

}


export default Body;