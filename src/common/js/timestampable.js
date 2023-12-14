/*
 * pwix:collection-timestampable/src/common/js/timestampable.js
 */

import _ from 'lodash';
import SimpleSchema from 'simpl-schema';

import { CollectionBehaviours } from 'meteor/zimme:collection-behaviours';

(function() {
    const af = Package['aldeed:autoform'];
    const c2 = Package['aldeed:collection2'];

    const defaults = {
        createdAt: 'createdAt',
        createdBy: 'createdBy',
        updatedAt: 'updatedAt',
        updatedBy: 'updatedBy',
        systemId: '0'
    };

    const behaviour = function( options={} ){
        let addAfDefs, afDefinition,  def, definition, isLocalCollection, regEx;
        check( options, Object );

        let ref = {};
        _.merge( ref, defaults, options );
        let createdAt = ref.createdAt;
        let createdBy = ref.createdBy;
        let updatedAt = ref.updatedAt;
        let updatedBy = ref.updatedBy;
        let systemId = ref.systemId;

        // if have aldeed:collection2 package ?
        if( c2 && typeof c2 === 'object'){
            afDefinition = {
                autoform: {
                    omit: true
                }
            };
            addAfDefs = function( definition ){
                return _.merge( definition, afDefinition );
            };

            definition = {};

            if( createdAt ){
                def = definition[createdAt] = {
                    optional: true,
                    type: Date
                };
                if( af && typeof af === 'object' ){
                    addAfDefs( def );
                }
            }

            const RegEx_Id = /^[23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz]{17}$/;
            regEx = new RegExp("(" + RegEx_Id + ")|^" + systemId + "$");

            if( createdBy ){
                def = definition[createdBy] = {
                    optional: true,
                    regEx: regEx,
                    type: String
                };
                if( af && typeof af === 'object' ){
                    addAfDefs( def );
                }
            }

            if( updatedAt ){
                def = definition[updatedAt] = {
                    denyInsert: true,
                    optional: true,
                    type: Date
                };
                if( af && typeof af === 'object' ){
                    addAfDefs( def );
                }
            }

            if( updatedBy ){
                def = definition[updatedBy] = {
                    denyInsert: true,
                    optional: true,
                    regEx: regEx,
                    type: String
                };
                if( af && typeof af === 'object' ){
                    addAfDefs( def );
                }
            }

            this.collection.attachSchema( new SimpleSchema( definition ));
        }

        isLocalCollection = this.collection._connection === null;

        if( Meteor.isServer || isLocalCollection ){
            this.collection.before.insert( function( userId, doc ){
                if( userId == null ){
                    userId = systemId;
                }
                if( createdAt ){
                    doc[createdAt] = new Date;
                }
                if( createdBy && !doc[createdBy] ){
                    doc[createdBy] = userId;
                }
            });
            this.collection.before.update( function( userId, doc, fieldNames, modifier, options ){
                var $set;
                if( userId === null ){
                    userId = systemId;
                }
                $set = modifier.$set != null ? modifier.$set : modifier.$set = {};
                if( updatedAt ){
                    $set[updatedAt] = new Date;
                }
                if( updatedBy && !$set[updatedBy] ){
                    $set[updatedBy] = userId;
                }
                //console.debug( 'updatedBy', updatedBy, 'userId', userId, 'timestampable set', $set );
            });
        }
    };

    CollectionBehaviours.define( 'timestampable', behaviour );

}).call( this );
