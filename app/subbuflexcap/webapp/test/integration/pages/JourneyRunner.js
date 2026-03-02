sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/subbu/subbuflexcap/test/integration/pages/TravelMain"
], function (JourneyRunner, TravelMain) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/subbu/subbuflexcap') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelMain: TravelMain
        },
        async: true
    });

    return runner;
});

