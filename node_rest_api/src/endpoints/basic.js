module.exports = (pool) => { 

const get_city = async () => {
    let response;
    try {
        response = await pool.query('select * FROM city');
        return response.rows;
    } catch (error) {
        console.log(error)
        return error
    }
}

const basic_get = async (req, res) =>{
    console.log("BASIC GET")
    let data = await get_city()
    console.log(data[1])
    await res.json({message: `Why ru gey hmm? data:${data[1].name}`})
    console.log('basic get recieved')
}    

return {
    basic_get
}

} 