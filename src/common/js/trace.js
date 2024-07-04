/*
 * pwix:collection-timestampable/src/common/js/trace.js
 */

_verbose = function( level ){
    if( Timestampable.configure().verbosity & level ){
        let args = [ ...arguments ];
        args.shift();
        console.debug( ...args );
    }
};

_trace = function( functionName ){
    _verbose( Timestampable.C.Verbose.FUNCTIONS, ...arguments );
};
