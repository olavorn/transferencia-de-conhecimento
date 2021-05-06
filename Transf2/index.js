console.log("Olá Mundo")
var express=require("express")
var servidorweb=express()
// "C:\Dev\transferencia-de-conhecimento\transf2\Static"
servidorweb.use(express.static(__dirname + '\Static'))
function spto(req,res){
    res.send(__dirname)
}
// servidorweb.get("/",spto);
// servidorweb.get("/nuncasera",spto);
// Get /Exemplo/1
// servidorweb.get("/",express.static("Static"))
servidorweb.listen("3000",function(){})
