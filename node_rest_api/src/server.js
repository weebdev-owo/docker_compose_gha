const app = require('express')()
const pool = require('./lib/setup_db.js')
const endpoints = require('./endpoints/basic.js')(pool)
require('dotenv').config()
console.log("server version: 12")

//ENDPOINTS--------------------------------------------------------------------------------
app.get('/',  endpoints.basic_get)

//SETUP-----------------------------------------------------------------------------------
const port = process.env.PORT || 8080
let server = null;
const start_server =  async () => {
    //database
    
    //server
    server = await app.listen(port, () => {console.log(`uwu im listening senpai PORT :${port}`)})
}
start_server()

//TEARDOWN--------------------------------------------------------------------------------------------
process.on('SIGTERM', () => {
    //database
    pool.end()

    //server
    if (server){server.close(() => {
        console.log("SIGTERM signal recieved: shutting down server uwu")
    })} 
})

