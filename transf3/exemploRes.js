function MinhaFunc(req, res)
{
    console.log("Minha Func : Ola Mundo");

    res.send("teste");

    var r = res.punk("Hey!");
    var a = [1,2,3,4,5];
  
    console.log(a);
}

var requisicao = {
    param1: 10,
    param2 : 20,
    send: function(saida){
        console.log(saida);
    },
    punk: function(saida){
        return function(){
            console.log(saida);
        }
    }

};

var express = MinhaFunc;

express({},requisicao);



