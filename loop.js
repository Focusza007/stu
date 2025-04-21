let a = prompt("จำนวล")
let sum = 0
a = Number(a);
if(a > 10){
alert("ไม่สามาตรทำรายการนี้ได้เนื่อจากสินค้าหมด")
  a = 0;
  a = prompt("จำนวล")
}
for(let i = 1; i<=a; i++){
   let d = parseInt( prompt("ราคา"))
   sum = sum + d
   document.getElementById("pop").innerHTML +=  "ราคาสินค้าที่"+i+";"+d+ "<br>"
document.getElementById("oo").innerHTML = "รวม"+ sum
}

