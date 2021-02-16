import React from "react";
import {
    Button,
    createMuiTheme,
    Grid,
    TextField,
    ThemeProvider,
    Typography,
    makeStyles
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { teal } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
    fieldForm: {
        backgroundColor: "white"
    },
    mainContainer: {
        marginTop: "20px"
    },
    buttonsBotton: {
        backgroundColor: "white"
    }
}));

const ClientForm = (props) => {
    const [formData, setFormData] = useState({
        clientId: null,
        tenantId: "",
        clientName: "",
        clientEmail: "",
        clientWorkPhone: "",
        clientPersonalPhone: "",
        clientPocName: "",
        clientIndustry: "",
        clientFax: "",
        clientWebsite: "",
        clientAddress: "",
        clientContract: "",
        clientAvatarURL: "",
        facebook: "",
        instagram: "",
        twitter: "",
        linkedin: "",
        addDate: "",
        updateDate: ""
    });

    const classes = useStyles();

    const history = useHistory();
    const handleOnCancelClick = () => {
        history.push("/");
    };


    useEffect(() => {
        const clientID = props.match.params.clientId;
        if (clientID) {
            axios
                .get(
                    `http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/tenant/reesby/client/${clientID}`
                )
                .then((client) => setFormData(client.data));
        }
    }, [props.match.params.clientId]);

    return (
        <form className={classes.mainContainer}>
            <Grid container justify="center">
                <Grid item>
                    <Typography variant="h3" color="primary">
                        {props.match.params.clientId ? "Edit" : "New"} Client
                </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={3}
                direction="column"
                justify="center"
                alignContent="center"
                style={{ marginTop: "2em" }}
            >
                {/* Client name */}
                <Grid item container spacing={3} justify="center">
                    <Grid item sm={10} xs={12} md={8}>
                        <TextField className={classes.fieldForm}
                            id="outlined-basic"
                            label="Client Name"
                            variant="outlined"
                            fullWidth
                            required
                            name="clientName"
                            value={formData.clientName || ""}
                        //   onChange={handleOnChange}
                        // error={!!formErrors.clientName}
                        // helperText={formErrors.clientName}
                        />
                    </Grid>
                </Grid>

                {/* Email/workphone row */}
                <Grid item container spacing={3} justify="center">
                    <Grid item sm={6} xs={12} md={5}>
                        <TextField className={classes.fieldForm}
                            id="outlined-basic"
                            label="Email Address"
                            required
                            variant="outlined"
                            fullWidth
                            name="clientEmail"
                            value={formData.clientEmail}
                        //   onChange={handleOnChange}
                        //   error={!!formErrors.clientEmail}
                        //   helperText={formErrors.clientEmail}
                        />
                    </Grid>
                    {/* Work Phone field */}
                    <Grid item sm={4} xs={12} md={3}>
                        <TextField className={classes.fieldForm}
                            id="outlined-basic"
                            label="Work Phone Number"
                            required
                            variant="outlined"
                            fullWidth
                            name="clientWorkPhone"
                            value={formData.clientWorkPhone}
                        //   onChange={handleOnChange}
                        //   error={!!formErrors.clientWorkPhone}
                        //   helperText={formErrors.clientWorkPhone}
                        />
                    </Grid>
                </Grid>
                {/* END Email/workphone row */}

                {/* Address/Personal Phone row */}
                <Grid item container spacing={3} justify="center">
                    <Grid item sm={6} xs={12} md={5}>
                        <TextField className={classes.fieldForm}
                            id="outlined-basic"
                            label="Address"
                            variant="outlined"
                            fullWidth
                            name="clientAddress"
                            value={formData.clientAddress || ""}
                        //   onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item sm={4} xs={12} md={3}>
                        <TextField className={classes.fieldForm}
                            id="outlined-basic"
                            label="Personal Phone Number"
                            variant="outlined"
                            fullWidth
                            name="clientPersonalPhone"
                            value={formData.clientPersonalPhone || ""}
                        //   onChange={handleOnChange}
                        />
                    </Grid>
                </Grid>
                {/* END Address/Personal Phone row */}

                {/* PoC/Fax row */}
                <Grid item container spacing={3} justify="center">
                    <Grid item sm={6} xs={12} md={5}>
                        <TextField className={classes.fieldForm}
                            id="outlined-basic"
                            label="Point of Contact"
                            variant="outlined"
                            fullWidth
                            name="clientPocName"
                            value={formData.clientPocName || ""}
                        //   onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item sm={4} xs={12} md={3}>
                        <TextField className={classes.fieldForm}
                            id="outlined-basic"
                            label="Fax"
                            variant="outlined"
                            fullWidth
                            name="clientFax"
                            value={formData.clientFax || ""}
                        //   onChange={handleOnChange}
                        />
                    </Grid>
                </Grid>
                {/* END PoC/Fax row */}

                {/* Industry/Contract row */}
                <Grid item container spacing={3} justify="center">
                    <Grid item sm={6} xs={12} md={5}>
                        <TextField className={classes.fieldForm}
                            id="outlined-basic"
                            label="Industry"
                            variant="outlined"
                            fullWidth
                            name="clientIndustry"
                            value={formData.clientIndustry || ""}
                        //   onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item sm={4} xs={12} md={3}>
                        <TextField className={classes.fieldForm}
                            id="outlined-basic"
                            label="Contract"
                            variant="outlined"
                            fullWidth
                            name="clientContract"
                            value={formData.clientContract || ""}
                        //   onChange={handleOnChange}
                        />
                    </Grid>
                </Grid>
                {/* END Industry/Contract row */}

                {/* Website/Facebook row*/}
                <Grid item container spacing={5} justify="center">
                    {/* Website */}
                    <Grid container item sm={5} xs={12} md={4} alignItems="flex-end">
                        <Grid item sm={1}>
                            <LanguageIcon />
                        </Grid>
                        <Grid item sm={11} xs={11}>
                            <TextField
                                id="outlined-basic"
                                label="Website"
                                fullWidth
                                name="clientWebsite"
                                value={formData.clientWebsite || ""}
                            // onChange={handleOnChange}
                            />
                        </Grid>
                    </Grid>
                    {/* END Website */}

                    {/* Facebook */}
                    <Grid container item sm={5} xs={12} md={4} alignItems="flex-end">
                        <Grid item sm={1}>
                            <FacebookIcon />
                        </Grid>
                        <Grid item sm={11} xs={11}>
                            <TextField
                                id="outlined-basic"
                                label="Facebook"
                                fullWidth
                                name="facebook"
                                value={formData.facebook || ""}
                            // onChange={handleOnChange}
                            />
                        </Grid>
                    </Grid>
                    {/* END Facebook */}
                </Grid>
                {/* END Website/Facebook row*/}

                {/* Instagram/Twitter row*/}
                <Grid item container spacing={5} justify="center">
                    {/* Instagram */}
                    <Grid container item sm={5} xs={12} md={4} alignItems="flex-end">
                        <Grid item sm={1}>
                            <InstagramIcon />
                        </Grid>

                        <Grid item sm={11} xs={11}>
                            <TextField
                                id="outlined-basic"
                                label="Instagram"
                                fullWidth
                                name="instagram"
                                value={formData.instagram || ""}
                            // onChange={handleOnChange}
                            />
                        </Grid>
                    </Grid>
                    {/* END Instagram */}

                    {/* Twitter */}
                    <Grid container item sm={5} xs={12} md={4} alignItems="flex-end">
                        <Grid item sm={1}>
                            <TwitterIcon />
                        </Grid>

                        <Grid item sm={11} xs={11}>
                            <TextField
                                id="outlined-basic"
                                label="Twitter"
                                fullWidth
                                name="twitter"
                                value={formData.twitter || ""}
                            // onChange={handleOnChange}
                            />
                        </Grid>
                    </Grid>
                    {/* END Twitter */}
                </Grid>
                {/* END Instagram/Twitter row*/}

                {/* Submit/cancel row */}
                <Grid
                    item
                    container
                    spacing={2}
                    justify="center"
                    style={{ marginTop: "1em" }}
                >
                    {/* <Grid item sm={1} xs={0}/> */}

                    <Grid item xs={6} sm={5} md={4}>
                        <Button className={classes.buttonsBotton}
                            variant="outlined"
                            color="primary"
                            fullWidth
                            size="medium"
                            type="submit"
                            startIcon={<SaveIcon />}>
                            Submit
                </Button>
                    </Grid>

                    <Grid item xs={6} sm={5} md={4}>
                        <Button className={classes.buttonsBotton}
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            size="medium"
                            onClick={handleOnCancelClick}
                            startIcon={<CancelIcon />}
                        >
                            Cancel
                </Button>
                    </Grid>
                    {/* Grid container */}
                </Grid>
            </Grid>
        </form >
    )
};

export default ClientForm;

