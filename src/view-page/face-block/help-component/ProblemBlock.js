import { makeStyles } from "@material-ui/core";
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import img from "../../../static/images/radioman.png";

const useStyle = makeStyles((theme) => ({
  body: {
    background: `url(${img}) center no-repeat`,
    width: "100%",
    height: "50vh",
    backgroundSize: "cover",
    objectPosition: "center",
    objectFit: "none",
  },
  afterBack: {
    content: "",
    height: "50vh",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,.5)",
    zIndex: 2,
    color: "white",
  },
  headText: {
    fontSize: "4vh",
  },
  preText: {
    fontSize: "2vh",
  },
  formControl: {
    margin: theme.spacing(1),
    backgroundColor: "white",
    width: "10%",
  },
  text: {
      marginTop:"20%"
  },
}));

function ProblemBlock() {
  const styles = useStyle();

  return (
    <div className={styles.body}>
      <div className={styles.afterBack}>
        <span className={styles.text}>
          <span className={styles.headText}>Проблемы с устройством?</span>
          <br />
          <span className={styles.preText}>
          Оставьте заявку и мы свяжемся с вами
          </span>
          <br />
          <FormControl className={styles.formControl}>
            <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
            <Select native defaultValue="" id="grouped-native-select">
              <option aria-label="None" value="" />
              <optgroup label="Category 1">
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
              </optgroup>
              <optgroup label="Category 2">
                <option value={3}>Option 3</option>
                <option value={4}>Option 4</option>
              </optgroup>
            </Select>
          </FormControl>
          <FormControl className={styles.formControl}>
            <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
            <Select defaultValue="" id="grouped-select">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </span>
        <Button variant="contained" color="primary" size="large">
        Оставить заявку
        </Button>
      </div>
    </div>
  );
}

export default ProblemBlock;
