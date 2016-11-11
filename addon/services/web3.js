import Ember from 'ember';
const { Service, RSVP: { Promise }, Error } = Ember;

export default Service.extend({
  provider: null,
  web3Instance: null,
  contractInstance: null,

  init() {
    this._super(...arguments);
    let provider = this.get('provider');
    let web3 = new Web3(new Web3.providers.HttpProvider(provider));
    this.set('web3Instance', web3);
  },

  contract(contractABI, contractAddress) {
    return new Promise((resolve, reject) => {
      if (!contractABI || !contractAddress) {
        reject(new Error("Contract ABI or address not defined."));
      } else {
        let web3 = this.get('web3Instance');
        let contract = web3.eth.contract(contractABI).at(contractAddress);
        this.set('contractInstance', contract);
        resolve(contract);
      }
    });
  }
});
