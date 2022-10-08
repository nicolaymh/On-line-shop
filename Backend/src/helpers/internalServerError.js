const internalServerError = (error, response) => {
    console.log(error);

    response.status(500).json({
        ok: false,
        msg: 'Internal Server Error',
    });
};

export default internalServerError;
