'use strict';

function createBuffer() {
    var bufor = "";
    var buffer = function(str) {
        if (str != null) {
            bufor += str;
        }
        return bufor;
    }
    return buffer;
}