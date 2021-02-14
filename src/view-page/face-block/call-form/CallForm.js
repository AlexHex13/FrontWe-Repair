import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:"5rem",
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

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

export default function CallForm() {
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
        <div className={classes.root}>
            <TextField
                label="Введите имя"
                onChange={handleChange}
                name="name"

            />
            <FormControl>
                <InputLabel htmlFor="formatted-text-mask-input">Введите ваш номер</InputLabel>
                <Input
                    value={values.textmask}
                    onChange={handleChange}
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                />
            </FormControl>
            <Button href="#" color="primary" variant="outlined" className={classes.button}>
                Оставить заявку
            </Button>
        </div>
    );
}
