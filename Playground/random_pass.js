const fs = require('fs');

const arrChar = "1qaz!QAZ2wsx@WSX3edc#EDC4rfv$RFV5tg%TGB[6yhn^YHN7ujm&U]JM8ik,*IK<9ol\(ol.0p/)p"
const arrSplit = arrChar.split("");
const regexp = /[^a-zA-Z]/g;

function generateRandomPassword(passLength){

    let password = "";
    for(let i=0;i<passLength;i++){
        let randomVal = Math.floor(Math.random() * arrChar.length);
        if(i === 0){
            while(regexp.test(arrChar[randomVal])){                
                console.log(`character being filtered -- ${arrChar[randomVal]}`);
                randomVal = Math.floor(Math.random() * arrChar.length);
                console.log(`${arrChar[randomVal]} ---- is the value post filtering the first char`)
                console.log(`Post filtering, the value is -------- ${regexp.test(arrChar[randomVal])}`)
                debugger
            }
        }
        password += arrChar[randomVal];
    }

    return password

}

//console.log(generateRandomPassword(15));
for(i=0;i<=29;i++){
    fs.appendFileSync('passwords.txt',generateRandomPassword(15)+"\n");
}





