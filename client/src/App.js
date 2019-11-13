import React, { Component } from "react";
import LocationContract from "./contracts/Location.json";
import getWeb3 from "./getWeb3";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from "./Navigation";
import CardsList from "./CardsList";
import PriceChoice from "./PriceChoice";
import ScanPage from "./ScanPage";
import FinishPage from "./FinishPage";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = LocationContract.networks[networkId];
      const instance = new web3.eth.Contract(
        LocationContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.getNote);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  getNote = async () => {
    const { accounts, contract } = this.state;

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.getNote(accounts[0]).call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  initCourse = async () => {
    {
      const { accounts, contract } = this.state;
      // Stores a given value, 5 by default.
      await contract.methods.initCourse(123, 1, 12, 11).send({ from: accounts[0] }); //attention à définir ces varialbes depuis le front
    };
  };

  finishCourse = async () => {
    {
      const { accounts, contract } = this.state;
      // Stores a given value, 5 by default.
      await contract.methods.finishCourse(123).send({ from: accounts[0] }); //attention à définir ces varialbes depuis le front
    };
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <CardsList />
            </Route>
            <Route path="/price-choice">
              <PriceChoice />
            </Route>
            <Route path="/scan-page">
              <ScanPage />
            </Route>
            <Route path="/finish-page">
              <FinishPage />
            </Route>
          </Switch>
          <div>The stored value is: {this.state.storageValue}</div>
        </div>
      </Router>
    );
  }
}

export default App;
