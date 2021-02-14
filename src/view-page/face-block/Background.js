import {makeStyles} from "@material-ui/core";
import background from "../../static/images/header-bg.png"
import Form from "./call-form/Form";



const useStyle = makeStyles(()=> ({

    background:{
        background:`url(${background}) center no-repeat`,
        width:"100%",
        height:"70vh",
        backgroundSize:"cover",
    },
    afterBack:{
        content: '',
        height:"70vh",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,.5)",
        zIndex: 2,
        color:"white"
    },
    form:{
        paddingTop:150
    }



}))


function Background() {

    const styles = useStyle();

    return (
        <div className={styles.background}>
            <div className={styles.afterBack}>
                <div className={styles.form}>
                    <Form/>
                </div>

            </div>
        </div>
    )
}



export default Background;