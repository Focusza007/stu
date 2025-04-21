let a =prompt("โยนกี่รอบ")
let h = 0
for(i=1;i<=a;i++){
  let g = prompt("ทาย")
   let f = Math.floor( Math.random() * 2) 
    let k = ""
    
  if(f == 1 ){
k = "หัว"

  }else{
    k="ก้อย"

  }
if(g ==k){
alert("ตอบถูก")
b = "ตอบถูก"
h++
}else{
    alert("ตอบผิด")
    b = "ตอบผิด"
}
document.getElementById("aage").innerHTML += i+"คำตอบคือ"+ k +"สิ่งที่ตอบคือ"+ g +"="+ b +"<br>"
}
document.getElementById("ghj").innerHTML =h
