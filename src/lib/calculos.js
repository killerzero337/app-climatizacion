export function calculo1 ( var1 ) {
    return 0.13234*var1+0.2
}

export function calculo2 ( var1, var2 ) {
    return 0.13234*var1+0.2 - var2
}

export function calculo3 ( var1, var2 ) {
    return var2 - var1
}


export default {
    calculo1,
    calculo2,
    calculo3
}