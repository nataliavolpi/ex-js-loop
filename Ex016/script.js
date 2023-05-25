function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar. <br> Por favor, preencha os campos.'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0) {
            window.alert('Passo inválido! Considerando passo igual a 1')
            p=1
        }
        if (i<f) {
            /*contagem crescente
            a var C começa com o valor inicio e enquanto seu valor for <= ao fim C recebe ele mesmo mais o passo.*/
            for (let c=i; c<=f; c+=p){  
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            //contagem regressiva
            for (let c=i; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
            
            }
        res.innerHTML += `\u{1F3C1}`
        }
        
}
