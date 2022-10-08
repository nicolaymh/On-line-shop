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
            unique: [true, 'already a user thit that email'],
            trim: true,
        },

        address: {
            type: String,
            require: true,
            trim: true,
        },

        phone: {
            type: String,
            require: true,
            trim: true,
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
