'use strict';
var _,

    _consts,
    dataService = require('../../dataProviders/defaultProvider'),
    // additional requires

    consts;

function Service() {}

function onRequestSuccess(data) {
    return data.result;
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

Service.prototype.getAllRecords = function(args) {
    var expandExp,
        data = dataService.data('Activities');

    expandExp = {

    };

    return data.expand(expandExp).get()
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};
// additional properties

// START_CUSTOM_CODE_page1
// END_CUSTOM_CODE_page1
module.exports = new Service();