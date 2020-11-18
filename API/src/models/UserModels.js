const pool = require('../queries');

exports.registerUser = async function (username, password) {
    await pool.query('INSERT INTO public.user (username, password) VALUES ($1, $2)', [username, password]);
};
