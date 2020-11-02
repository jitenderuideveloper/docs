// check env.
var env = process.env.NODE_ENV || 'development';
// fetch env. config
var config = require('./config.json');
var envConfig = config[env];
//console.log('envConfig', envConfig);
// add env.config values to process.env
Object.keys(envConfig).forEach(key => {   
    process.env[key] = envConfig[key];
    //console.log('process.env[key]', process.env[key]);
});
