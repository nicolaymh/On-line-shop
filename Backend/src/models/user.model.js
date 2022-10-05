import mongoose from 'mongoose';

const kittySchema = new mongoose.Schema({
    name: String,
});

kittySchema.methods.speak = function () {
    const greeting = this.name
        ? 'Meow name is ' + this.name
        : "I don't have a name";
    console.log(greeting);
};

export const Kitten = mongoose.model('Kitten', kittySchema);
