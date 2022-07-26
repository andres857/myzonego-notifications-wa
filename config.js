require('dotenv').config()

const development = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT,
    Meta_WA_accessToken: process.env.META_WA_ACCESSTOKEN,
    Meta_WA_SenderPhoneNumberId: process.env.META_WA_PHONENUMBERID,
    Meta_WA_wabaId: process.env.META_WA_WABAID,
    Meta_WA_VerifyToken: 'loquesea123456789'
};

module.exports = development