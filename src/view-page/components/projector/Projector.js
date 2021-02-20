import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import projector from "../../../static/images/technic/projector.png"
import {Checkbox, FormControlLabel} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CommonBreakdowns from "../CommonBreakdowns";
import notWork from "../../../static/images/actions/не работает клавиатура.png"
import Accordeon from "../Accordeon";
import LogoTip from "../Logotip";
import apple from "../../../static/images/brands/apple.png"
import xiaomi from "../../../static/images/brands/xiaomi.png"
import samsung from "../../../static/images/brands/samsung.png"
import huawei from "../../../static/images/brands/huawei.png"
import asus from "../../../static/images/brands/asus.png"
import RemontBlock from "../../reclam-block/RemontBlock";

const useStyle = makeStyles(() => ({

    page: {
        width: "100%",
        height: "50vh",
        backgroundColor: "#5962ff",
        display: "flex",
        color: "white",
        paddingTop: "5%"
    },
    text: {
        display: "flex",
        flexDirection: "column",
        fontSize: "2vh",
        textAlign: "left",
        marginLeft: "10%"
    },
    bigtext: {
        fontSize: "4vh"
    },
    image: {
        marginLeft: "10%"
    },
    input: {
        height: "2rem",
        width: "15rem"
    },
    inputs: {
        display: "flex",
    },
    button: {
        width: "72%"
    },
    mini: {
        fontSize: "1.5vh"
    },
    card: {
        marginTop: "5%",
        textAlign: "center",
        fontSize: "3vh"
    },
    elements: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "space-around",
        marginTop: "3%"
    },
    accordeon: {
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: "3%"
    },
    listProblem: {
        marginTop: "3%",
        fontSize: "3vh"
    },

    brands: {
        marginTop: "3%"
    },
    names:{
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "space-between",
        wordSpacing:"12px",
        marginTop: "3%"
    },
    name:{
        flex:"1 1 auto",
    }
}))


function Projector() {

    const styles = useStyle()

    return (
        <div className={styles.body}>
            <div className={styles.face}>
                <div className={styles.page}>
                    <div className={styles.image}>
                        <img src={projector} alt="notebook"/>
                    </div>
                    <div className={styles.text}>
                    <span className={styles.bigtext}>
                        Ремонт проекторов
                        в Санкт-Петербурге
                    </span>
                        <span>
                        Оформите заявку на БЕСПЛАТНУЮ консультацию <br/>
                            и получите СКИДКУ 10% при заказе
                    </span>
                        <br/>
                        <div className={styles.inputs}>
                            <input className={styles.input} placeholder="Ваше имя"/>
                            &nbsp;
                            <input className={styles.input} placeholder="Ваш телефон"/>
                        </div>
                        <FormControlLabel control={<Checkbox name="checkedC"/>} label="Связаться с Вами по SMS?"/>
                        <Button variant="contained" color="secondary" className={styles.button}>
                            Оставить заявку
                        </Button>
                        <span
                            className={styles.mini}>Нажимая кнопку “Оставить заявку”, я даю согласие на обработку <br/>
                                                персональных данных
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <span>Распространенные поломки</span>
                <div className={styles.elements}>
                    <CommonBreakdowns text={"Не работает клавиатура"} content={"Ремонт от 30 мин."} image={notWork}/>
                    &nbsp;
                    <CommonBreakdowns text={"Не работает клавиатура"} content={"Ремонт от 30 мин."} image={notWork}/>
                    &nbsp;
                    <CommonBreakdowns text={"Не работает клавиатура"} content={"Ремонт от 30 мин."} image={notWork}/>
                    &nbsp;
                    <CommonBreakdowns text={"Не работает клавиатура"} content={"Ремонт от 30 мин."} image={notWork}/>
                    &nbsp;
                    <CommonBreakdowns text={"Не работает клавиатура"} content={"Ремонт от 30 мин."} image={notWork}/>
                </div>
            </div>
            <div className={styles.listProblem}>
                <span>Другие поломки</span>
                <div className={styles.accordeon}>
                    <Accordeon/>
                </div>
            </div>

            <div className={styles.brands}>
                <span>Бренды</span>
                <div className={styles.elements}>
                    <LogoTip image={apple}/>
                    <LogoTip image={huawei}/>
                    <LogoTip image={asus}/>
                    <LogoTip image={samsung}/>
                    <LogoTip image={xiaomi}/>
                </div>

                <div className={styles.elements}>
                    <LogoTip image={apple}/>
                    <LogoTip image={huawei}/>
                    <LogoTip image={asus}/>
                    <LogoTip image={samsung}/>
                    <LogoTip image={xiaomi}/>
                </div>
                <Button variant="contained" color="secondary"> Еще бренды</Button>
            </div>
            <div className={styles.namebrands}>
                <div className={styles.names}>
                    <span className={styles.name}>Acer</span>
                    <span className={styles.name}>Bb-mobile</span>
                    <span className={styles.name}>Caterpillar</span>
                    <span className={styles.name}>Effire</span>
                    <span className={styles.name}>Garmin-Asus</span>
                </div>
                <div className={styles.names}>
                    <span className={styles.name}>AGM</span>
                    <span className={styles.name}>BBK</span>
                    <span className={styles.name}>Conquest</span>
                    <span className={styles.name}>Elari</span>
                    <span className={styles.name}>Geotel</span>
                </div>
                <div className={styles.names}>
                    <span className={styles.name}>AIEK</span>
                    <span className={styles.name}>BELLFORT</span>
                    <span className={styles.name}>CUBOT</span>
                    <span className={styles.name}>EffireElephone</span>
                    <span className={styles.name}>Getac</span>
                </div>
                <div className={styles.names}>
                    <span className={styles.name}>Acer</span>
                    <span className={styles.name}>Bb-mobile</span>
                    <span className={styles.name}>Caterpillar</span>
                    <span className={styles.name}>Effire</span>
                    <span className={styles.name}>Garmin-Asus</span>
                </div>
                <div className={styles.names}>
                    <span className={styles.name}>Acer</span>
                    <span className={styles.name}>Bb-mobile</span>
                    <span className={styles.name}>Caterpillar</span>
                    <span className={styles.name}>Effire</span>
                    <span className={styles.name}>Garmin-Asus</span>
                </div>
                <div className={styles.names}>
                    <span className={styles.name}>Acer</span>
                    <span className={styles.name}>Bb-mobile</span>
                    <span className={styles.name}>Caterpillar</span>
                    <span className={styles.name}>Effire</span>
                    <span className={styles.name}>Garmin-Asus</span>
                </div>
                <div className={styles.names}>
                    <span className={styles.name}>Acer</span>
                    <span className={styles.name}>Bb-mobile</span>
                    <span className={styles.name}>Caterpillar</span>
                    <span className={styles.name}>Effire</span>
                    <span className={styles.name}>Garmin-Asus</span>
                </div>
                <div className={styles.names}>
                    <span className={styles.name}>Acer</span>
                    <span className={styles.name}>Bb-mobile</span>
                    <span className={styles.name}>Caterpillar</span>
                    <span className={styles.name}>Effire</span>
                    <span className={styles.name}>Garmin-Asus</span>
                </div>
                <div className={styles.names}>
                    <span className={styles.name}>Acer</span>
                    <span className={styles.name}>Bb-mobile</span>
                    <span className={styles.name}>Caterpillar</span>
                    <span className={styles.name}>Effire</span>
                    <span className={styles.name}>Garmin-Asus</span>
                </div>
                <br/>
                <Button variant="contained" color="secondary"> Еще бренды</Button>
            </div>
            <br/>
            <RemontBlock/>
        </div>
    )
}


export default Projector;