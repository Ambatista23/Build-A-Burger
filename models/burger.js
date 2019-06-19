var orm = require('../config/orm');

var burger= {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    },
    create: function(cols, values, cb){
        orm.create('burgers', cols, values, function(res){
            cb(res)
        })
    },
    update: function(colsvalues, condition, cb){
        orm.update('burgers', colsvalues, condition, function(res){
            cb(res)
        })
    },
    delete: function(condition, cb) {
        orm.delete('burgers', condition, function(res){
            cb(res)
        })
    }
}

module.exports = burger;