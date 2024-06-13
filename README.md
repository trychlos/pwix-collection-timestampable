# pwix:collection-timestampable

## Preliminary notes

This package is a fork from [zimme:collection-timestampable v 1.0.9](https://github.com/zimme/meteor-collection-timestampable/):
- because I use it and like it (that's fine ;))
- unfortunately, it seems no more maintained
- so make it compatible with Meteor 2.x and incoming Meteor 3.x.

It also now features `upsert`s management.

## What is it ?

This Meteor package adds a timestampable behaviour to any Mongo collection.

## Installation

This Meteor package is installable with the usual command:

```sh
    meteor add pwix:collection-timestampable
```

## Usage

Basic usage examples.

### Attach

```js
    Posts = new Mongo.Collection( 'posts' );

    // Attach behaviour with the default options
    Posts.attachBehaviour( 'timestampable' );

    // Attach behaviour with custom options
    Posts.attachBehaviour( 'timestampable', {
        createdAt: 'insertedAt',
        createdBy: 'insertedBy',
        updatedAt: 'modifiedAt',
        updatedBy: false
    });
```

Using `CollectionBehaviours.attach` you can also attach a behaviour to multiple collections. You can also add multiple behaviours to a collection or add multiple behaviours to multiple collections.

Please see [`pwix:collection-behaviours`](https://github.com/trychlos/pwix-collection-behaviours) for more info on attaching behaviours to collections.

### Insert

Examples are using default options.

```js
    Posts.insert({
        title: 'Awesome post title',
        body: 'A really informative post.'
    });

    // Inserted document
    {
        "_id": "J9frYKmxaowznW3yM",
        "createdAt": "2015-04-28T19:31:28.065Z",
        "createdBy": "0",
        "body": "A really informative post.",
        "title": "Awesome post title",
    }
```

### Update

Examples are using default options.

```js
    Posts.update({_id: 'J9frYKmxaowznW3yM'}, {
        $set: {
            title: 'More awesome post title'
        }
    });

    // Updated document
    {
        "_id": "J9frYKmxaowznW3yM",
        "createdAt": "2015-04-28T19:31:28.065Z",
        "createdBy": "0",
        "body": "A really informative post.",
        "updatedAt": "2015-04-28T19:51:20.047Z",
        "updatedBy": "0",
        "title": "Awesome post title",
    }
```

## Provides

## Configuration

The package's behavior can be configured through a call to the `CollectionBehaviours.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

```js
    // Configure behaviour globally
    // All collection using this behaviour will use these settings as defaults
    // The settings below are the package default settings
    CollectionBehaviours.configure( 'timestampable', {
        createdAt: 'createdAt',
        createdBy: 'createdBy',
        updatedAt: 'updatedAt',
        updatedBy: 'updatedBy',
        systemId: '0'
    });
```

Please note that `CollectionBehaviours.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `CollectionBehaviours.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

### Options

The following options can be used:

- `createdAt`: Optional. Set to `'string'` to change the fields name.
  Set to `false` to omit field.

- `createdBy`: Optional. Set to `'string'` to change the fields name.
  Set to `false` to omit field.

- `updatedAt`: Optional. Set to `'string'` to change the fields name.
  Set to `false` to omit field.

- `updatedBy`: Optional. Set to `'string'` to change the fields name.
  Set to `false` to omit field.

- `systemId`: Optional. Set to `'string'` to change the id representing the system.

## Notes

This package attaches a schema to the collection(s) if `aldeed:collection2` is used by the application. If `aldeed:autoform` is available too, it adds `aldeed:autoform` specific schema definitions.

## NPM peer dependencies

None at the moment.

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-collection-timestampable/issues).

<!--
### Forked from zimme:collection-timestampable

[![Gitter][Gitter Badge]][Gitter]
[![Code Climate][Code Climate Badge]][Code Climate]
[![License][License Badge]][License]

[Code Climate]: https://codeclimate.com/github/zimme/meteor-collection-timestampable
[Code Climate Badge]: http://img.shields.io/codeclimate/github/zimme/meteor-collection-timestampable.svg
[CollectionBehaviours]: https://atmospherejs.com/zimme/collection-behaviours
[Gitter]: https://gitter.im/zimme/meteor-collection-timestampable
[Gitter Badge]: https://img.shields.io/badge/gitter-join_chat-brightgreen.svg
[License]: https://github.com/zimme/meteor-collection-timestampable/blob/master/LICENSE.md
[License Badge]: https://img.shields.io/badge/license-MIT-blue.svg
-->
