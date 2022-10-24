let tarefa01 = document.getElementById('tarefa01')
let tarefa = document.getElementById('tarefa')

let cont = 0

const tarefasPrincipal = document.getElementById('tarefas-principal')
function adicionarTarefa(){
    const tarefaInput = document.getElementById('tarefa-input')
    if(tarefaInput.value == ''){
        window.alert("digite algo")
    }
    else{
        if(cont < 10){
            const tarefas = document.createElement('div')
            tarefas.classList.add('tarefa-item')
            const txt = document.createElement('p')
            txt.classList.add('nomeDaTarefa')
            
            txt.innerHTML = tarefaInput.value
            tarefaInput.value = ''
            const botoesContainer = document.createElement('div')
            const buttonX = document.createElement('button')
            buttonX.classList.add('tarefa-button-x')
            const buttonV = document.createElement('button')
            buttonV.classList.add('tarefa-button-v')
            buttonV.innerHTML = 'v'
            buttonX.innerHTML = 'x'
            tarefasPrincipal.appendChild(tarefas)
            tarefas.appendChild(txt)
            tarefas.appendChild(botoesContainer)
            botoesContainer.appendChild(buttonX)
            botoesContainer.appendChild(buttonV)
            cont++
        }
        else{
            window.alert("não procrastine, termine suas 10 tarefas primeiro")
        }
        
    }
    
        
    
}

document.addEventListener("click", (e) => {
    const targetElement = e.target
    const parentEl = targetElement.parentNode.parentNode
    

    if(targetElement.classList.contains("tarefa-button-v")){
       parentEl.classList.toggle("tarefa-item-done")
    }
    
    if(targetElement.classList.contains("tarefa-button-x")){
        parentEl.remove()
        cont--
    }

})