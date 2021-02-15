import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Footer from "../../footer/Footer";
import ComponentHeader from "../header-components/ComponentHeader";
import SharesBlock from "./SharesBlock";

const useStyle = makeStyles(() => ({
  body: {},
  text: {
    marginLeft: "20%",
    fontSize: "4vh",
    textAlign: "left",
  },
  block: {
    marginTop: "10%",
  },
}));

function Shares() {
  const styles = useStyle();

  return (
      <>
    <div>
      <Typography className={styles.text}>Акции</Typography>
      <div className={styles.block}>
        <SharesBlock />
      </div>
      <div className={styles.block}>
        <SharesBlock />
      </div>
    </div>
    <ComponentHeader/>
            <Footer/>
    </>
  );
}

export default Shares;
