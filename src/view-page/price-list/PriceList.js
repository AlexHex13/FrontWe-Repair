import {Breadcrumbs, makeStyles, Typography} from "@material-ui/core";
import React from "react";
import Footer from "../../footer/Footer";
import ComponentHeader from "../header-components/ComponentHeader";
import Buttons from "./Buttons";
import TableRows from "./TableRows";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";

const useStyle = makeStyles((theme) => ({
  text: {
    fontSize: "3vh",
    textAlign: "left",
    marginLeft: "20%",
  },
  table:{
      marginTop:"3%",
      marginLeft:"20%",
      marginRight:"20%"
  },
  footer:{
    marginTop:"3%"
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked.');
}

function PriceList() {
  const styles = useStyle();

  return (
      <>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick} className={styles.link}>
            <HomeIcon className={styles.icon}/>
            Главная
          </Link>
          <Link
              color="inherit"
              href="/price-list"
              onClick={handleClick}
              className={styles.link}
          >
            Прайс-лист
          </Link>
        </Breadcrumbs>
    <div className={styles.body}>
      <Typography className={styles.text}>Прайс-лист</Typography>
      <div className = {styles.table}>
      <TableRows />
      </div>
      <Buttons />  
  </div>
  
  </>
  );
}

export default PriceList;
