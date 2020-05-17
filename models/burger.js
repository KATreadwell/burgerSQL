module.exports = function(sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 50]
            },     
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    });
    return Burger;
};



// let burger = {
//     selectAll: function(cb) {
//         orm.selectAll('*', 'burgers', function (res) {
//             cb(res)    
//         });  
//     },
//     insertOne: function(cols, vals, cb) {
//         orm.insertOne('burgers', cols, vals, function(res) {
//             cb(res);
//         });
//     },
//     updateOne: function(cols, vals, id, cb) {
//         orm.updateOne('burgers', cols, vals, id, function(res) {
//             cb(res);
//         });
//     }
// };

