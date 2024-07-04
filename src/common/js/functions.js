/*
 * pwix:collection-timestampable/src/common/js/functions.js
 */

/**
 * @summary Provide a 'Field.Def'-valid field definition
 * @returns {Object} an object suitable to the Field.Def instanciation
 */
Timestampable.fieldDef = function(){
    return [
        {
            name: 'createdAt',
            schema: false,
            dt_visible: false
        },
        {
            name: 'createdBy',
            schema: false,
            dt_visible: false
        },
        {
            name: 'updatedAt',
            schema: false,
            dt_visible: false
        },
        {
            name: 'updatedBy',
            schema: false,
            dt_visible: false
        }
    ];
};
