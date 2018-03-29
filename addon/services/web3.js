import Ember from 'ember';
const { Service, RSVP: { Promise }, Error } = Ember;

export default Service.extend({
  provider: null,
  web3Instance: null,
  contractInstance: null,

  setup(provider) {
    let web3Instance = newWeb3(provider);
    this.set('web3Instance', web3);
    return web3Instance;
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
