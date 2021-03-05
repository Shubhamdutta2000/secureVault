import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

import IconButton from "@material-ui/core/IconButton";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import KitchenIcon from "@material-ui/icons/Kitchen";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import Select from "@material-ui/core/Select";

// components
import Loader from "../../components/Loader";
import Message from "../../components/Message";

//image
import postIllustration from "../../assets/images/postIllustration.png";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { postFinance } from "../../redux/actions/financeAction";

import { useStyles } from "./customStyles/postFinance";

const PostFinance = ({ history }) => {
  const classes = useStyles();

  const [panCard, setPanCard] = useState("");
  const [itrForm, setItrForm] = useState("");
  const [bankTransaction, setBankTransaction] = useState("");
  //Assets
  const [commodities, setCommodities] = useState("");
  const [cryptocurrencies, setCryptocurrencies] = useState("");
  const [stocks, setStocks] = useState("");
  const [mutualFunds, setMutualFunds] = useState("");
  const [ipos, setIpos] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState("");
  const [content, setContent] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, finance, error } = useSelector(
    (state) => state.userPostFinance
  );

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  });

  // submit handler
  const submitPostHandler = (event) => {
    event.preventDefault();
    dispatch(
      postFinance({
        panCard: panCard,
        itr_forms: itrForm,
        bank_transaction: bankTransaction,
        assets: {
          commodities: commodities,
          cryptocurrencies: cryptocurrencies,
          stocks: stocks,
          mutual_funds: mutualFunds,
          ipos: ipos,
        },
        password: password,
      })
    );
  };

  // change dropdown menu for content
  const handleContentChange = (content) => {
    setContent(content);
    history.push(`/home/post/${content}`);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          {/* dropdown menu */}
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={content}
              displayEmpty
              onChange={(e) => handleContentChange(e.target.value)}
              className={classes.select}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="details">Details</MenuItem>
              <MenuItem value="documents">Documents</MenuItem>
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="career">Career</MenuItem>
              <MenuItem value="">Finance</MenuItem>
              <MenuItem value="medical">Medical</MenuItem>
            </Select>
          </FormControl>
          {/* image of postIllustration */}
          <img
            className={classes.postImage}
            src={postIllustration}
            alt="post_image"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={18} className={classes.paper}>
            {/*// FORM FOR FINANCE POST //*/}
            <form className={classes.form}>
              {/* Pan Card */}
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-panCard">
                  Pan Card
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-panCard"
                  placeholder="Pan Card"
                  required
                  value={panCard}
                  onChange={(e) => setPanCard(e.target.value)}
                  inputProps={{
                    style: { paddingTop: "1rem" },
                  }} // font size of input text
                  startAdornment={
                    <InputAdornment position="start">
                      <AssignmentIcon
                        color="primary"
                        className={classes.icon}
                      />
                    </InputAdornment>
                  }
                  labelWidth={90}
                />
              </FormControl>

              {/* ITR Form */}
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-itrForm">
                  ITR Form
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-itrForm"
                  placeholder="ITR Form"
                  required
                  type="text"
                  value={itrForm}
                  startAdornment={
                    <InputAdornment position="start">
                      <AssignmentIcon
                        color="primary"
                        className={classes.icon}
                      />
                    </InputAdornment>
                  }
                  onChange={(e) => setItrForm(e.target.value)}
                  labelWidth={90}
                />
              </FormControl>

              {/* Bank Transaction */}
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-bankTransaction">
                  Bank Transaction
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-bankTransaction"
                  placeholder="Bank Transaction"
                  required
                  type="text"
                  value={bankTransaction}
                  multiline
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountBalanceIcon
                        color="primary"
                        className={classes.icon}
                      />
                    </InputAdornment>
                  }
                  onChange={(e) => setBankTransaction(e.target.value)}
                  labelWidth={166}
                />
              </FormControl>

              {/* ASSETS */}
              <Typography
                className={classes.assetsHeading}
                variant="h1"
                component="h4"
              >
                Assets
              </Typography>

              <form className={classes.financeForm}>
                {/* Commodities */}
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-commodities">
                    Commodities
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-commodities"
                    placeholder="Commodities"
                    required
                    type="text"
                    value={commodities}
                    multiline
                    startAdornment={
                      <InputAdornment position="start">
                        <KitchenIcon color="primary" className={classes.icon} />
                      </InputAdornment>
                    }
                    onChange={(e) => setCommodities(e.target.value)}
                    labelWidth={126}
                  />
                </FormControl>

                {/* Cryptocurrencies */}
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-cryptocurrencies">
                    Cryptocurrencies
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-cryptocurrencies"
                    placeholder="Cryptocurrencies"
                    required
                    type="text"
                    value={cryptocurrencies}
                    multiline
                    startAdornment={
                      <InputAdornment position="start">
                        <EnhancedEncryptionIcon
                          color="primary"
                          className={classes.icon}
                        />
                      </InputAdornment>
                    }
                    onChange={(e) => setCryptocurrencies(e.target.value)}
                    labelWidth={164}
                  />
                </FormControl>

                {/* Stocks */}
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-stocks">
                    Stocks
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-stocks"
                    placeholder="Stocks"
                    required
                    type="text"
                    value={stocks}
                    multiline
                    startAdornment={
                      <InputAdornment position="start">
                        <ShowChartIcon
                          color="primary"
                          className={classes.icon}
                        />
                      </InputAdornment>
                    }
                    onChange={(e) => setStocks(e.target.value)}
                    labelWidth={68}
                  />
                </FormControl>

                {/* Mutual Funds */}
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-mutualFunds">
                    Mutual Funds
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-mutualFunds"
                    placeholder="Mutual Funds"
                    required
                    type="text"
                    value={mutualFunds}
                    multiline
                    startAdornment={
                      <InputAdornment position="start">
                        <ShowChartIcon
                          color="primary"
                          className={classes.icon}
                        />
                      </InputAdornment>
                    }
                    onChange={(e) => setMutualFunds(e.target.value)}
                    labelWidth={130}
                  />
                </FormControl>

                {/* IPOS */}
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-ipos">
                    IPOS
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-ipos"
                    placeholder="IPOS"
                    required
                    type="text"
                    value={ipos}
                    multiline
                    startAdornment={
                      <InputAdornment position="start">
                        <ShowChartIcon
                          color="primary"
                          className={classes.icon}
                        />
                      </InputAdornment>
                    }
                    onChange={(e) => setIpos(e.target.value)}
                    labelWidth={48}
                  />
                </FormControl>
              </form>

              {/* Password */}
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Password"
                  required
                  type={passwordVisibility ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon color="primary" className={classes.icon} />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {passwordVisibility ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={96}
                />
              </FormControl>
              <br />
              {/* show loading or error onSubmit */}
              {loading ? (
                <Loader />
              ) : error ? (
                <Message varient="error">{error}</Message>
              ) : (
                <Message varient="success">POST successfully submitted</Message>
              )}
              <br />
              <Button
                className={classes.button}
                onClick={submitPostHandler}
                size="large"
                variant="contained"
                color="primary"
              >
                POST
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostFinance;
