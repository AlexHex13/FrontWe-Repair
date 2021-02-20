import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 15,
            fontSize: 13,
        },
    },
});

export default function CitySelect() {
    const classes = useStyles();

    return (
        <Autocomplete
            id="country-select-demo"
            style={{ width: 250 }}
            options={countries}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
                <React.Fragment>
                    {option.label}
                </React.Fragment>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Выберите город"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />
    );
}

const countries = [
    {  label: 'Санкт-Петербург' },
    {  label: 'Москва' },
    {  label: 'Бишкек' },
];
