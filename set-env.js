const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const envConfig = `
(function (window) {
    window.env = window.env || {};
    window.env.USERNAME = "${process.env.USERNAME}";
    window.env.PASSWORD = "${process.env.PASSWORD}";
})(this);
`;

fs.writeFileSync('./src/assets/env.js', envConfig);
