
function OlaPetronio(){

    if ( confirm("Deseja dizer olá ou ficar vermelho?")){
        alert('Olá Petronio');
    }
    else{
        document.getElementById("meuspam").innerHTML = "<span style='color:red'>Usamos spans vermelhas... </span>";
    }
}