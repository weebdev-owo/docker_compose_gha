require('dotenv').config()
const db = {}
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


// db.connect = async (attempts=5, delay=5000) => {
//     while(attempts){
//         try{
//             await db.pool.connect()
//             break
//         } 
//         catch(err){
//             console.log(err)
//             attempts -= 1
//             console.log('attempts left')
//             //add delay between connection attempts
//             await new Promise(res => setTimeout(res, delay))
//         }
//     }

// }

pool.on('connect', () => {console.log('pool client connection made')})
pool.on('aqquire', () => {console.log('pool client aquired (checked out from pool)')})
pool.on('error', (err) => {console.log(`pool client error: ${err}`)})

db.isConnected = async (behaviour) => {

}

module.exports = pool