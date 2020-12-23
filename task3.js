function printSegitiga(num){
    let s = ''
    for(i = num; i > 0; i--){
        for(j = 1; j <= i; j++){
            s += j
        }
        s += '\n'
    }
    console.log(s)
}
printSegitiga(8)