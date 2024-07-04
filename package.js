Package.describe({
    name: 'pwix:collection-timestampable',
    version: '2.1.0-rc',
    summary: 'Add timestampable behavior to Mongo collections',
    git: 'https://github.com/trychlos/pwix-collection-timestampable',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'Timestampable'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:collection-timestampable' );
    api.mainModule( 'test/js/index.js');
});

function configure( api ){
    const _use = function(){
        api.use( ...arguments );
        api.imply( ...arguments );
    };
    api.versionsFrom([ '2.9.0', '3.0-rc.0' ]);
    _use( 'aldeed:schema-deny@3.0.0 || 4.0.0' );
    _use( 'aldeed:simple-schema@1.13.1' );
    _use( 'check' );
    _use( 'ecmascript' );
    _use( 'matb33:collection-hooks@1.3.0 || 2.0.0-beta.0' );
    _use( 'pwix:collection-behaviours@2.0.0' );
    _use( 'tmeasday:check-npm-versions@1.0.2 || 2.0.0-rc300.0', 'server' );
}
