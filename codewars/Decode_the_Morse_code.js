// 
{
  decodeMorse = function(morseCode){
  let arr = morseCode.trim().split('   ')
  let newAr = []
   arr.map(v=>{
     let temAr = []
     temAr = v.split(' ').map(vv=>{
       return MORSE_CODE[vv]
     })
     newAr.push(temAr.join(''))
   })
   return newAr.join(' ')
  }
}
