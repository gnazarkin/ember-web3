# ember-web3

This add-on is a solution for integrating Web3 into your Ember.js web app.
For more information on Web3 visit: https://github.com/ethereum/web3.js/

## Installation

* `ember install ember-web3`

## Usage
* Define web3 provider (defaults to "http://localhost:8545") in config.
```javascript
//config/environment.js
ENV['ember-web3'] = {
  provider: "http://localhost:8545"
};
```
Inject the service where needed.
```javascript
web3: Ember.inject.service(),
```
### web3 Instance
Service injection gives access to object `Web3`, and instantiates a `web3Instance` object using the provider specified in the config.
To retrieve the web3 instance:
```javascript
let webInstance = this.get('web3.web3Instance');
```
Or simply create your own
```javascript
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
```

### Contract Instance
The service also allows you to simply retrieve a deplyoed contract instance of existing Solidity contract using the ABI and address. Requires the ABI array and address. Returns promise.
```javascript
let contractABI = ['ABI array'];
let contractAddres = '0x6e93b795ba20f376e205d00c205eaa8cc10db9f7' // Not real a contract address
web3.eth.contract(contractABI, contractAddress).then((contract) => {
  // do something with contract
});
```
The most recently retrieved contract will be set to `contractInstance` on the service.
```javascript
let contractInstance = this.get('web3.contractInstance');
```

#TODO
* Tests
* Dummy app

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
