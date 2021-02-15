import { makeStyles } from "@material-ui/core";
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";  

const useStyle = makeStyles((theme) => ({
  body: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  },
}));

function InputBlock() {
  const styles = useStyle();

  return (
    <div className={styles.body}>
      <span className={styles.text}>
        <span className={styles.headText}>Рассчитать стоимость ремонта</span>
        <br />
        <span className={styles.preText}>
          Узнайте стоимость ремонта в три клика!
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
                Рассчитать стоимость
      </Button>
    </div>
  );
}

export default InputBlock;
