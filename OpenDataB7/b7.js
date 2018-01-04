'use strict';

var b7 = {
    _data: {},
    init: (options, callback) => {
        var sync = (theUrl) => {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", theUrl, false); // false for synchronous request
            xmlHttp.send(null);
            return xmlHttp.responseText;
        };
        var async = (theUrl, callback) => {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    callback(xmlHttp.responseText);
            };
            xmlHttp.open("GET", theUrl, true); // true for asynchronous 
            xmlHttp.send(null);
        };

        if (options.async) {
            async(options.url, (e) => {
                this.b7._data = e;
                callback();
            });
        }
        else {
            this.b7._data = sync(options.url);
        }
    },
    query: async (options, callback, compare) => {
        var keys = Object.keys(_data);
        compare = compare || function (a, b) {
            return a === b;
        };
        for (var i = 0; i < _data.length; i++) {
            var item = _data[i];
            var doReturn = true;
            for (var key in keys) {
                doReturn &= compare(item[key], options[key]);
            }
            if (doReturn)
                callback(item);
        }
    }
};