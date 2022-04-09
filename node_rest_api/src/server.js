//ENVIRONMENT VARS
require('dotenv').config()
env = { //MOVE VARIABLES TO ENV FILE FOR OPENSOURCE/PRODUCTION

}

//FILE SETUP ----------------------------------------------------'
let server, pool; 
const app = require('express')()
pool = require('./lib/setup_db.js')
const endpoints = require('./endpoints/basic.js')(pool)

console.log("server version: 14")

//ENDPOINTS--------------------------------------------------------------------------------
app.get('/',  endpoints.basic_get)

//SERVER SETUP-----------------------------------------------------------------------------------
const port = process.env.PORT || 8080
const start_server =  async () => {    
    server = await app.listen(port, () => {console.log(`uwu im listening senpai PORT :${port}`)})
}
start_server()

//SERVER TEARDOWN--------------------------------------------------------------------------------------------
process.on('SIGTERM', () => {
    //database connections
    if (pool){
        pool.end()
    }

    //server
    if (server){server.close(() => {
        console.log("SIGTERM signal recieved: shutting down server uwu")
    })} 
})

