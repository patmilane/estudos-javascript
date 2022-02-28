let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

for (let pos=0; pos <valores.length; pos++){
    
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//usando for in (só funciona p arrays e objetos)

for (let pos in valores){ // significa para cada posição em valores
   
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}