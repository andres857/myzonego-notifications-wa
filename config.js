require('dotenv').config()

const server = {
    PORT: process.env.PORT,
};

const oauth = {
    bearerToken: process.env.META_WA_ACCESSTOKEN,
    phoneId: process.env.META_WA_PHONENUMBERID,
    wabussinesId: process.env.META_WA_WABAID
}

module.exports = {
    server,
    oauth
}