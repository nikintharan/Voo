'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Data List',

    listItems: [],
    // additional properties

});

// START_CUSTOM_CODE_page1
// END_CUSTOM_CODE_page1
module.exports = ViewModel;