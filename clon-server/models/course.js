const {Schema, model}=require('mongoose');
const courseSchema = Schema({
    nombre: {
        type:String,
        required:[true, 'Este campo es obligatorio']
    },
    duración: {
        type:Number,
        required:[true, 'Este campo es obligatorio']
    },
    cantAl: {
        type:Number,
        required:[true, 'Este campo es obligatorio']
    }
});

module.exports=model('Course', courseSchema)