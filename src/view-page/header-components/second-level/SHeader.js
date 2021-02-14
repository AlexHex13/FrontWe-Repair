import {useState} from "react";
import {makeStyles} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor:"black",
        color:"white"
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    input:{
        width:400,
        height:35
    },
    margin: {
        margin: theme.spacing(1),
        backgroundColor:"white",
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    iconButton: {
        padding: 10,
        color:"white",
    },
    divider: {
        height: 28,
        margin: 4,
    },
    toolbarTitle: {
        flexGrow: 0.5,
    },
    text:{
        flexGrow: 0.1,
        fontSize:15
    },
    link: {
        margin: theme.spacing(1, 1.5),
        backgroundColor:"yellow"
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));



function SHeader(){

    const classes = useStyles()
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };



    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Company name
                </Typography>
                <FormControl className={classes.margin} variant="outlined">
                    <OutlinedInput
                        className={classes.input}
                        id="outlined-adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<SearchIcon/>}
                    />
                </FormControl>
                <Typography className={classes.text}>
                    8 999 098 98 98 <br/>
                    Режим работы 9:00 - 21:00
                </Typography>
                <Button href="#" color="primary" variant="outlined" className={classes.link}>
                    Обратный звонок
                </Button>
            </Toolbar>
        </AppBar>
    )

}


export default SHeader;