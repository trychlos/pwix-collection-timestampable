Package.describe({
    name: 'pwix:collection-timestampable',
    version: '1.1.0-rc',
    summary: 'Add timestampable behavior to Mongo collections',
    git: 'https://github.com/trychlos/pwix-collection-timestampable',
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
    api.versionsFrom( '2.9.0' );
    api.use( 'aldeed:schema-deny@3.0.0' );
    api.use( 'check' );
    api.use( 'ecmascript' );
    api.use( 'matb33:collection-hooks@1.3.0' );
    api.use( 'zimme:collection-behaviours@1.1.3' );
}
