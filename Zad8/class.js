'use strict';

function switchClassName(obj, str) {
    var arrClasses = obj.className.split(" ");
    var existsingClass = false;
    
    for (var i = arrClasses.length - 1; i > 0; i--) {
            if (str == arrClasses[i]) {
                    existsingClass = true;
                    arrClasses.splice(i,1);
            }
    }

    if (!existsingClass) {
        arrClasses.push(str);
    }

    obj.className = arrClasses.join(' ');
}