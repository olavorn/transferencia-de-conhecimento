console.log("Olá Mundo")
var express=require("express")
var servidorweb=express()
servidorweb.use(express.static("C:\Dev\transferencia-de-conhecimento\transf2\Static"))
function spto(req,res){
    res.send("nunca será")
}
// servidorweb.get("/",spto);
// servidorweb.get("/nuncasera",spto);
// Get /Exemplo/1
// servidorweb.get("/",express.static("Static"))
servidorweb.listen("3000",function(){})