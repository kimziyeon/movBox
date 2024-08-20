
let mysql = require('mysql2');
const pool = {
    host : "svc.sel5.cloudtype.app",
    user: "root",
    password: "dnals153",
    database: "mob",
    port: "31444"
}

export const queryExecute = async (query,values)=>{

    const connection = mysql.createConnection(pool);
    connection.connect();
    return await new Promise((resolve,reject)=>{
        connection.query(query,values, function(error, results, fields){
            
            if(error) console.log(error,'==================');
            else console.log('Connected to db...!')
            resolve(results);
            connection.end();
        })
    })
}