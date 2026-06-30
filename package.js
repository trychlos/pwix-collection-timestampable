Package.describe({
    name: 'pwix:collection-timestampable',
    version: '2.4.2',
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
    _use( 'aldeed:collection2@4.0.1' );
    _use( 'aldeed:schema-deny@3.0.0 || 4.0.0 || 5.0.0' );
    _use( 'check' );
    _use( 'ecmascript' );
    _use( 'matb33:collection-hooks@2.0.0' );
    _use( 'pwix:collection-behaviours@2.0.0' );
    _use( 'pwix:logger@1.0.0-rc' );
    _use( 'reactive-var' );
    _use( 'tmeasday:check-npm-versions@1.0.2 || 2.0.0-rc300.0', 'server' );
}
