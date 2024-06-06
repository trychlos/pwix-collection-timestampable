Package.describe({
    name: 'pwix:collection-timestampable',
    version: '2.0.1',
    summary: 'Add timestampable behavior to Mongo collections',
    git: 'https://github.com/p-wieser/pwix-collection-timestampable',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.mainModule( 'src/common/js/index.js', [ 'client', 'server' ]);
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:collection-timestampable' );
    api.mainModule( 'test/js/index.js');
});

function configure( api ){
    api.versionsFrom([ '2.9.0', '3.0-rc.0' ]);
    api.use( 'aldeed:schema-deny@3.0.0 || 4.0.0' );
    api.use( 'check' );
    api.use( 'ecmascript' );
    api.use( 'matb33:collection-hooks@1.3.0 || 2.0.0-beta.0' );
    api.use( 'pwix:collection-behaviours@2.0.0' );
}
