import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Checkbox, FormControlLabel} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: "5rem",
        '& > *': {
            margin: theme.spacing(1),
            flexDirection: "row",
            justifyContent: "space-around",
        },
    },
    field: {
        marginLeft: "1%"
    },
    text: {
        fontSize: "3vh",
        textAlign: "left"
    },
    form: {
        display: "flex",
        flexDirection: "row",
    },
    button: {
        fontSize: "1.2vh"
    },
    checkbox:{
        marginRight:"50%"
    },
    mini:{
        fontSize:"1vh",
        marginRight:"30%"

    }
}));

function TextMaskCustom(props) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['+7(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
    const {inputRef, onChange, ...other} = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function CallForm(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        textmask: '(1  )    -    ',
        numberformat: '',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
       <>
        <div className={classes.root}>

            <Typography className={classes.text}>
                {props.text}
            </Typography>

            <span className={classes.form}>

            <Input id="standard-basic" placeholder="Ваше имя"/>
            <Input
                value={values.textmask}
                onChange={handleChange}
                name="textmask"
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
                className={classes.field}
            />

            <Button href="#" color="primary" variant="outlined" className={classes.button}>
               <span className={classes.button}> Оставить заявку </span>
            </Button>
                </span>

            <FormControlLabel control={<Checkbox name="checkedC"/>} label="Связаться с Вами по SMS?" className={classes.checkbox}/>
            <span className={classes.mini}>Нажимая кнопку “Оставить заявку”, я даю согласие на обработку персональных данных</span>

        </div>
     </>
);
}
