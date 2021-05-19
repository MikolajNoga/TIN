'use strict';
function sum(... args){
    return args.reduce((previous, current) => {
        return previous + current;
      });
}
