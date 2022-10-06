import User from '../models/UserModel.js';

export const register = async (req, res) => {
    try {
        const user = new User(req.body);

        const nuevo = await user.save();

        console.log(nuevo);

        res.status(200).json({
            ok: true,
            msg: nuevo,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal Server Error',
        });
    }
};
