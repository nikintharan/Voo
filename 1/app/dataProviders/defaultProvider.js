var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    apiKey: 'hmcDcMpx3UPHWL0V',
    scheme: 'https'
});

// START_CUSTOM_CODE_defaultProvider
// END_CUSTOM_CODE_defaultProvider
module.exports = provider;