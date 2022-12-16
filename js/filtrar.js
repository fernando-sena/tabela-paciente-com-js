let campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    let pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0){
    for(let i = 0; i < pacientes.length; i++){
        let pacient = pacientes [i]
        let tdNome = pacient.querySelector(".info-nome")
        let nome = tdNome.textContent
        let expressao = new RegExp(this.value,"i")
        if(!expressao.test(nome)){
            pacient.classList.add("invisivel")
        }else{
            pacient.classList.remove("invisivel")
        }
    }

}else{
    for(let i = 0; i < pacientes.length; i++){
        let paciente = pacientes[i]
        paciente.classList.remove("invisivel")
    }
}
})