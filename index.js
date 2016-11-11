module.exports = {
  name: 'ember-web3',

  included(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/web3/dist/web3.min.js');
  }
};
