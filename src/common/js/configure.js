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
        // check that keys exist
        let built_conf = {};
        Object.keys( o ).forEach(( it ) => {
            if( Object.keys( Timestampable._defaults ).includes( it )){
                built_conf[it] = o[it];
            } else {
                console.warn( 'pwix:collection-timestampable configure() ignore unmanaged key \''+it+'\'' );
            }
        });
        if( Object.keys( built_conf ).length ){
            _conf = _.merge( Timestampable._defaults, _conf, built_conf );
            Timestampable._conf.set( _conf );
            _verbose( Timestampable.C.Verbose.CONFIGURE, 'pwix:collection-timestampable configure() with', built_conf );
        }
    }
    // also acts as a getter
    return Timestampable._conf.get();
}

_conf = _.merge( {}, Timestampable._defaults );
Timestampable._conf.set( _conf );
