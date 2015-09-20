'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    service = require('./page1-service'),
    // additional requires

    viewModel = require('./page1-view-model');

function flattenLocationProperties(dataItem) {
    var propName, propValue,
        isLocation = function(value) {
            return propValue && typeof propValue === 'object' &&
                propValue.longitude && propValue.latitude;
        };

    for (propName in dataItem) {
        if (dataItem.hasOwnProperty(propName)) {
            propValue = dataItem[propName];
            if (isLocation(propValue)) {
                // Location type property
                dataItem[propName] =
                    'Latitude: ' + propValue.latitude +
                    'Longitude: ' + propValue.longitude;
            }
        }
    }
}
// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;

    service.getAllRecords()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {

                flattenLocationProperties(item);

                itemsList.push({

                    header: item.Text,

                });
            });

            viewModel.set('listItems', itemsList);
        });
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

// START_CUSTOM_CODE_page1
// END_CUSTOM_CODE_page1
exports.pageLoaded = pageLoaded;