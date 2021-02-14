import {makeStyles} from "@material-ui/core";
import CallForm from "./CallForm";
import img from "../../../static/images/head-img.png";

const useStyle = makeStyles(()=>({

    background:{
        width:"60%",
        height:"40vh",
        backgroundColor:"white",
        margin: "0 auto",
        color:"black"
    },
    container:{
        display:"flex",
        alignContent:"space-between",
        textAlign:"center",
        paddingLeft:50
    },
    image:{
        paddingLeft:50
    }

}))


function Form(){

    const styles = useStyle()


    return(
        <div className={styles.background}>
            <div className={styles.container}>
                <CallForm/>
                <div className={styles.image}>
                    <img src={img} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default Form;