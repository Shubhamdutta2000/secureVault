import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getFinance, updateFinance } from "../../redux/actions/financeAction";

import { useStyles } from "./customStyles/getFinance";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const FinanceScreen = ({ history, location }) => {
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

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, finance, error } = useSelector(
    (state) => state.userFetchFinance
  );
  const { finance: updatedFinance } = useSelector(
    (state) => state.userUpdateFinance
  );

  // redirect to home page if logged in
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (finance) {
      setPanCard(finance.panCard);
      setItrForm(finance.itr_forms);
      setBankTransaction(finance.bank_transaction);
      // Assets
      setCommodities(finance.assets.commodities);
      setCryptocurrencies(finance.assets.cryptocurrencies);
      setStocks(finance.assets.stocks);
      setMutualFunds(finance.assets.mutual_funds);
      setIpos(finance.assets.ipos);
    }
    // show alert message & redirect to home page if error exists
    else if (error) {
      alert(error);
      history.push("/");
    }
    // redirect to home page if finance does not contain
    else if (!loading && !finance) {
      history.push("/");
    }
  }, [history, userInfo, finance, error]);

  // fetch finance after update
  useEffect(() => {
    dispatch(getFinance(location.state.password)); // get password from homeScreen location state passed as props in history object
  }, [dispatch, updatedFinance]);

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateFinance({
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
      })
    );
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h1" component="h4">
        Finance Secrets
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper elevation={18} className={classes.paper}>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message children={error} varient="warning" />
            ) : (
              <Grid container spacing={1}>
                {/* LEFT SIDE */}
                <Grid item xs={12} style={{ marginTop: "4rem" }} md={6}>
                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-panCard">
                      Pan Card
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-panCard"
                      placeholder="Pan Card"
                      required
                      type="text"
                      value={panCard}
                      multiline
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setPanCard(e.target.value)}
                      labelWidth={108}
                    />
                  </FormControl>

                  <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-itrForm">
                      ITR Form
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-itrForm"
                      placeholder="ITR Form"
                      required
                      multiline
                      rows={1}
                      value={itrForm}
                      onChange={(e) => setItrForm(e.target.value)}
                      inputProps={{
                        style: {
                          fontSize: 26,
                          paddingTop: "0.6rem",
                          lineHeight: "1.4rem",
                        },
                      }} // font size of input text
                      labelWidth={110}
                    />
                  </FormControl>

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
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setBankTransaction(e.target.value)}
                      labelWidth={204}
                    />
                  </FormControl>
                </Grid>

                {/* RIGHT SIDE */}
                <Grid item xs={12} md={6}>
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.assetsHeading}
                  >
                    Assets
                  </Typography>

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
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setCommodities(e.target.value)}
                      labelWidth={154}
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
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setCryptocurrencies(e.target.value)}
                      labelWidth={202}
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
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setStocks(e.target.value)}
                      labelWidth={80}
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
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setMutualFunds(e.target.value)}
                      labelWidth={158}
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
                      rows={1}
                      inputProps={{
                        style: { fontSize: 26, paddingTop: "0.6rem" },
                      }} // font size of input text
                      onChange={(e) => setIpos(e.target.value)}
                      labelWidth={60}
                    />
                  </FormControl>
                </Grid>

                <Grid
                  item
                  style={{
                    margin: "auto",
                  }}
                  xs={8}
                >
                  {/* Success message on updating documents */}
                  {updatedFinance && (
                    <Message
                      varient="success"
                      children="Successfully update documents"
                    />
                  )}
                </Grid>
                <Button
                  className={classes.button}
                  onClick={submitHandler}
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  UPDATE
                </Button>
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FinanceScreen;
