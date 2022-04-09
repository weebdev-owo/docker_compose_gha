//ENVIRONMENT VARS-------------------------------------------
require('dotenv').config()
env = { //MOVE VARIABLES TO ENV FILE FOR OPENSOURCE/PRODUCTION

}

//POSTGRES POOL CONNECTIONS -------------------------------------------
const { Pool } = require('pg')
pool = new Pool({
    host: process.env.POSTGRESS_HOST, //domain/ip
    port: process.env.POSTGRES_PORT,

    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,

    max: 2, //number of connections
    connectionTimeoutMillis: 0, //if all connections busy how long should we wait for a connection to be available before canceling query (0 = wait forever)
    idleTimeoutMillis: 0, //
})


pool.on('connect', () => {console.log('pool client connection made')})
pool.on('aqquire', () => {console.log('pool client aquired (checked out from pool)')})
pool.on('error', (err) => {console.log(`pool client error: ${err}`)})


//EXPORTS
module.exports = pool