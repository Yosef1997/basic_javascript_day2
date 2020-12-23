const bIndo = 100
const bIngg = 70
const mtk = 90
const ipa = '70'
const total = bIndo + bIngg + mtk + ipa
const rataRata = total / 4
function nilaiUn(num){   
    if(typeof bIndo == 'number' && typeof bIngg == 'number' && typeof mtk == 'number' && typeof ipa == 'number'){
        if(rataRata <=59){
            console.log(`Rata-rata = ${rataRata}`)
            console.log(`Grade E`)
        }else if(rataRata <=69){
            console.log(`Rata-rata = ${rataRata}`)
            console.log(`Grade D`)
        }else if(rataRata <=79){
            console.log(`Rata-rata = ${rataRata}`)
            console.log(`Grade C`)
        }else if(rataRata <=89){
            console.log(`Rata-rata = ${rataRata}`)
            console.log(`Grade B`)
        }else {
            console.log(`Rata-rata = ${rataRata}`)
            console.log(`Grade A`)
        }
    }else{
        console.log('isi ulang nilai')
    }
}
nilaiUn(rataRata);