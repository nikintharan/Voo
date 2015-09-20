'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Details',

    events: {
        formViewModelSubmit: 'formViewModelSubmit',
    },

    onformViewModelFormSubmit: function() {
        this.notify({
            eventName: this.events.formViewModelFormSubmit
        });
    },
    // additional properties

});

// START_CUSTOM_CODE_formView
// END_CUSTOM_CODE_formView
module.exports = ViewModel;