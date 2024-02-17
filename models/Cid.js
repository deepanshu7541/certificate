const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const CertificateSchema = new mongoose.Schema({
    cid: {
        type: String
    },
    certificateURl: {
        type: String
    }
});

module.exports = mongoose.model('Certificate', CertificateSchema);