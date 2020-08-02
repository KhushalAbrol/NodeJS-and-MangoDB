const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


var promosSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    label:{
        type: String,
        default: ''
    },
    price:{
        type: Currency,
        default: ''
    },
    description:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean,
        default: false
    }
})

var Promos = mongoose.model('Promos', promosSchema);

module.exports = Promos;