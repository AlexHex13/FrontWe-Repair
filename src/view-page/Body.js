import ComponentHeader from "./header-components/ComponentHeader";
import Background from "./face-block/Background";
import {makeStyles} from "@material-ui/core/styles";
import Shares from "./shares/Shares";
import Footer from "../footer/Footer";
import PriceList from "./price-list/PriceList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contacts from "./contacts/Contacts";
import Conditions from "./conditions/Conditions";
import Guarantee from "./guarantee/Guarantee";
import React from "react";
import Smartphone from "./components/smartphone/Smartphone";
import Notebook from "./components/notebook/Notebook";
import Computer from "./components/computer/Computer";
import Book from "./components/book/Book";
import Monoblock from "./components/monoblock/Monoblock";
import Tv from "./components/tv/Tv";
import Projector from "./components/projector/Projector";
import Monitor from "./components/monitor/Monitor";
import Photo from "./components/photo/Photo";
import CoffeeMachine from "./components/coffeemachine/CoffeeMachine";

const useStyle = makeStyles(() => ({
    slider: {
        margin: "0 auto",
        width: "50%",
        height: "50%",
    },
    footer: {
        marginTop: "3%",
    }
}));

function Body() {
    const styles = useStyle();

    return (
        <>
            <Router>
                <div>
          <span>
            <ComponentHeader/>

            <Switch>
              <Route path="/" exact component={Background}/>
              <Route path="/shares" exact component={Shares}/>
              <Route path="/price-list" exact component={PriceList}/>
              <Route path="/contacts" exact component={Contacts}/>
              <Route path="/conditions" exact component={Conditions}/>
              <Route path="/guarantee" exact component={Guarantee}/>
              <Route path="/components/smartphone" exact component={Smartphone}/>
              <Route path="/components/notebook" exact component={Notebook}/>
              <Route path="/components/computer" exact component={Computer}/>
              <Route path="/components/book" exact component={Book}/>
              <Route path="/components/monoblock" exact component={Monoblock}/>
              <Route path="/components/tv" exact component={Tv}/>
              <Route path="/components/projector" exact component={Projector}/>
              <Route path="/components/monitor" exact component={Monitor}/>
              <Route path="/components/photo" exact component={Photo}/>
              <Route path="/components/coffeemachine" exact component={CoffeeMachine}/>

            </Switch>
          </span>
                </div>
            </Router>
            <br/>
            <div className={styles.footer}>
                <ComponentHeader/>
                <Footer/>
            </div>
        </>
    );
}

export default Body;
