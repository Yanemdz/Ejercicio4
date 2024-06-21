class ConectarBD{
    constructor(){
        this.conexion=null
        this.mysql=require("mysql2/promise");
    }
    async conectarMySql(){
    try {
        this.conexion=await this.mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'#Felipe1',
            database:'Empresa',
            port:3306
        });
        console.log("Conexión creada a MySql");
    } catch (error) {
        console.error("Error al conectar con MySql"+error);
    }
    }
    async cerrarConexion(){
        try {
            await this.conexion.end();
            console.log("Desconexión de Mysql");
        } catch (error) {
            console.log("Error al desconectar de Mysql"+error);
        }
    }
}
module.exports=ConectarBD;