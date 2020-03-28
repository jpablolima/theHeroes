const connecction = require('../database/connection');

module.exports = {
    async indexedDB(resquest, response) {
        const ong_id = resquest.headers.authorization;

        const incidents = await connecction('incidents')
        .where('ong_id', ong_id)
        .select('*');
        return response.json(incidents);
    }
}