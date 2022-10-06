import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'name is required'],
            trim: true,
        },

        password: {
            type: String,
            require: true,
            trim: true,
        },

        email: {
            type: String,
            require: true,
            unique: [true, 'There is already a user with that email'],
            trim: true,
        },

        phone: {
            type: Number,
            trim: true,
            require: true,
        },

        token: {
            type: String,
            trim: true,
        },

        confirmed: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
