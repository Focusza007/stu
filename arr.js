let r=""
let b = ""
function j (number){
r = r+number
b = b+number
document.getElementById("t").innerHTML=r
 let m =  m + number
 return m
}
function plus (p){
    
    if(p =="%"){
        r =(r / 100) 
        document.getElementById("t").innerHTML=r
       return
    }else if ( p == "delete") {
      r=""
    }else{
r  = r+  p }
 document.getElementById("t").innerHTML=r
}
function ko(){
    r = parseFloat(r) * -1
    r= r.toString();
    document.getElementById("t").innerHTML=r
}
function equal (o){
    if(o == "="){
     ok =   eval(r)
     r=ok.toString();
        document.getElementById("t").innerHTML=ok
    }

}