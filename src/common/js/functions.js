/*
 * pwix:collection-timestampable/src/common/js/functions.js
 */

import { Logger } from 'meteor/pwix:logger';

const logger = Logger.get();

/**
 * @summary Provide a 'Field.Def'-valid field definition
 * @returns {Object} an object suitable to the Field.Def instanciation
 */
Timestampable.fieldDef = function(){
    logger.verbose({ verbosity: Timestampable.configure().verbosity, against: Timestampable.C.Verbose.FUNCTIONS }, 'fieldDef()' );
    return [
        {
            name: 'createdAt',
            type: Date,
            optional: true,
            //schema: false,
            dt_visible: false
        },
        {
            name: 'createdBy',
            type: String,
            optional: true,
            //schema: false,
            dt_visible: false
        },
        {
            name: 'updatedAt',
            type: Date,
            optional: true,
            //schema: false,
            dt_visible: false
        },
        {
            name: 'updatedBy',
            type: String,
            optional: true,
            //schema: false,
            dt_visible: false
        }
    ];
};
