import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Footer from "../../footer/Footer";
import ComponentHeader from "../header-components/ComponentHeader";
import Buttons from "./Buttons";
import TableRows from "./TableRows";

const useStyle = makeStyles(() => ({
  text: {
    fontSize: "3vh",
    textAlign: "left",
    marginLeft: "20%",
  },
  table:{
      marginTop:"3%",
      marginLeft:"20%",
      marginRight:"20%"
  }
}));

function PriceList() {
  const styles = useStyle();

  return (
      <>
    <div className={styles.body}>
      <Typography className={styles.text}>Прайс-лист</Typography>
      <div className = {styles.table}>
      <TableRows />
      </div>
      <Buttons />  
  </div>
  <ComponentHeader/>
            <Footer/>
  </>
  );
}

export default PriceList;
