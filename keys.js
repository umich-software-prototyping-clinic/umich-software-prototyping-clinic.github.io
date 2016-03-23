// This module stores the parse keys
// It is in .gitignore in order to keep them secret
//
// The keys can be accessed by including the keys module and 
// calling KeySvc.key1, KeySvc.key2
angular.module('keys', [])

.factory('KeySvc', function() {
    return {
        key1:"9gVPgmfhQbcvkd5jwXdtuCmIjqXLiAFWkfBGPu9s",
        key2:"WsH6KK22RH2R9G87e798nkIixluE22lvtNW5wMfH",
        key3:"kyhaSMYNAGSslxKpiikk4BShk0GjkffpUTUrOp7P"
    };
});
