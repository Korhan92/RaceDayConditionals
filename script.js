let raceNumber = Math.floor(Math.random() * 1000);
raceNumber=raceNumber+1000 
let age = prompt('Write your age')


if (age < 18 ) {
   
    console.log(`${Math.floor(Math.random() * 1000)} numaralı oyuncu  ${age} yaşında olduğu için 12.30 da koşacak`)
} else  {
    raceTime = prompt('early or late')
    if (age > 18 && raceTime=='early'){
        console.log (`${raceNumber}  numaralı oyuncu ${age} yaşında olduğu için 09.30 da koşacak`)
    } else if (age > 18 && raceTime=='late') {
        console.log (`${Math.floor(Math.random() * 1000)} numaralı oyuncu ${age} yaşında olduğu için 11.00 da koşacak`)
    } else {
        console.log('Ask for organizator')
    }

}








//const registeredEarly = false
//const age = 19;

/* if (age > 18 && registeredEarly) {
    raceNumber=raceNumber+1000 
    //racenumber+=1000
    console.log(`${raceNumber} numaralı oyuncu  ${age} yaşında olduğu için 09.30 da koşacak`)
} else if (age > 18 && !registeredEarly) {
    console.log('Erken kayıt yapan yetişkinler 11.00 de koşar yarış numarası:' , raceNumber )

} else if (age<18) {
    console.log('Genç yarışçılar 12.30 da koşar yarış numaraı:' , raceNumber)
}
else { console.log('Kayıt Masasına dönmelisiniz')} */