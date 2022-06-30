const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema ({

    nameoncard : {
        type : String,
        require : true
    },

    cardno : {
        type : String,
        required : true
    },

    securitycode : {
        type : String,
        required : true
    },

    postalcode : {
        type : String,
        required : true
    },
})


const Payment =mongoose.model ("Payment" , paymentSchema);
module.exports =  Payment;