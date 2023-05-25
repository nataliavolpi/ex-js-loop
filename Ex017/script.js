function gerar() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')

    if (num.value.lengh == 0){
        window.alert('Por favor digite um número.')
    } else {
        tab.innerHTML=``
        let n = Number(num.value)
        let c = 1
        for (c=1; c<=10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }

    }
}