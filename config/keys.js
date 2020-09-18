module.exports = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,

    login: 'http://' + (process.env.LOGIN_SERVICE_HOST || 'localhost') + ':' + (process.env.LOGIN_SERVICE_PORT || '3002') + '/api/login',
    cashpointList: 'http://' + (process.env.CASHPOINT_SERVICE_HOST || 'localhost') + ':' + (process.env.CASHPOINT_SERVICE_PORT || '3001') + '/api/cashpoint',
    cashpointAdd: 'http://' + (process.env.CASHPOINT_SERVICE_HOST || 'localhost') + ':' + (process.env.CASHPOINT_SERVICE_PORT || '3001') + '/api/cashpoint/addCashpoint',
    deleteAllCashpoint: 'http://' + (process.env.CASHPOINT_SERVICE_HOST || 'localhost') + ':' + (process.env.CASHPOINT_SERVICE_PORT || '3001') + '/api/cashpoint/deleteAllCashpoint'
}