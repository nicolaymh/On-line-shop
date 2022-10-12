import transporter from './transport.js';

export const sendEmailRegister = async ({ name, email, token }) => {
    try {
        await transporter.sendMail({
            from: '"On-line-shop 👻" <emailfortestingnimohe@gmail.com>', // sender address
            to: email, // list of receivers
            text: 'Check your account at On-line-shop 👻', // plain text body
            subject: 'On-line-shop - confirm your account ✔', // Subject line
            html: ` <p>Hello ${name} your account is almost ready, you just have to check the following link</p>
    
            <a href="pruebadecorreo/confirmar/${token}">Comprobar Cuenta</a>
    
            <p>If you didn't create this account, please ignore it</p>
            `,
        });
    } catch (error) {
        console.log(error);
        return;
    }
};

export const sendEmailForgetPass = async ({ name, email, token }) => {
    try {
        await transporter.sendMail({
            from: '"On-line-shop 👻" <emailfortestingnimohe@gmail.com>', // sender address
            to: email, // list of receivers
            text: 'Check your account at On-line-shop 👻', // plain text body
            subject: 'On-line-shop - restore your password ✔', // Subject line
            html: ` <p>Hello ${name} restore your password is almost ready, you just have to check the following link</p>
    
            <a href="pruebadecorreo/confirmar/${token}">Comprobar Cuenta</a>
    
            <p>If you didn't do this request, please ignore it</p>
            `,
        });
    } catch (error) {
        console.log(error);
        return;
    }
};
