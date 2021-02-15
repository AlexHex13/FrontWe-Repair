import ComponentHeader from "./header-components/ComponentHeader";
import Background from "./face-block/Background";
import Slider from "./face-block/slider/Slider";
import { makeStyles } from "@material-ui/core/styles";
import ReclamBlock from "./reclam-block/ReclamBlock";
import Shares from "./shares/Shares";
import Footer from "../footer/Footer";
import PriceList from "./price-list/PriceList";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const useStyle = makeStyles(() => ({
  slider: {
    margin: "0 auto",
    width: "50%",
    height: "50%",
  },
}));

function Body() {
  const styles = useStyle();

  return (
    <Router>
    <div>
      <span className="header">
       
          <ComponentHeader />

          <Switch>
            <Route path="/" exact  component={Background} />
            <Route path="/shares"  exact component={Shares} />
            <Route path="/price-list" exact  component={PriceList} />
          </Switch>
        
      </span>
    </div>
    </Router>
  );
}

export default Body;
