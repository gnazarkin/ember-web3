import Web3 from 'ember-web3/services/web3';
import config from '../config/environment';

export default Web3.extend({
  provider: config['ember-web3'].provider || "http://localhost:8545"
});
