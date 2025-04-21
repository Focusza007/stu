let a = parseInt(prompt("ได้กี่คะแนน"))

if( a >= 100){
    document.getElementById("gg").innerHTML="พ่อมึงอะใส่ดีๆดิ๊"
}else if(a >=90){
    document.getElementById("gg").innerHTML="4"
}else if(a >=80){
    document.getElementById("gg").innerHTML="3"
}else if(a >=70){
    document.getElementById("gg").innerHTML="2"
}else if(a >=60){
    document.getElementById("gg").innerHTML="1"
}else if(a >=50){
    document.getElementById("gg").innerHTML="ติด 0 ไปซ่ะไอ่ควาย"
}else{
    document.getElementById("gg").innerHTML="มึงใส่ดีๆไอควาย"
}