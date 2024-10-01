/*
 * pwix:collection-timestampable/src/common/js/configure.js
 */

import _ from 'lodash';

import { ReactiveVar} from 'meteor/reactive-var';

let _conf = {};
Timestampable._conf = new ReactiveVar( _conf );

Timestampable._defaults = {
    verbosity: Timestampable.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
Timestampable.configure = function( o ){
    if( o && _.isObject( o )){
        _conf = _.merge( Timestampable._defaults, _conf, o );
        Timestampable._conf.set( _conf );
        _verbose( Timestampable.C.Verbose.CONFIGURE, 'pwix:collection-timestampable configure() with', o );
    }
    // also acts as a getter
    return Timestampable._conf.get();
}

_conf = _.merge( {}, Timestampable._defaults );
Timestampable._conf.set( _conf );
