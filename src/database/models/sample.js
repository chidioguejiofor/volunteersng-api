'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sample = sequelize.define(
        'Sample',
        {
            name: DataTypes.STRING,
        },
        {},
    );
    Sample.associate = function(models) {
        // associations can be defined here
    };
    return Sample;
};
