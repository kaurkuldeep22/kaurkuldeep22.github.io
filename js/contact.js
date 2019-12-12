
function validate()
{
    let msg;
    let name=document.getElementById("uname").value;
    let subjct=document.getElementById("subject").value;
    let nameregex = /^[a-zA-Z0-9]+$/;


   if(name == "")
   {
        msg="Username should be filled";

   }   
 else if((name.length <5 || name.length > 15))
 {
     msg="Username should be between 5 and 15";
   
  }
  else if(!name.match(nameregex)){
         msg="Username should contain characters A-Z,a-z and numbers 1-9 are acceptable and no space allowed";
  }
  else if(subjct == "")
   {
     msg="Subject should not empty";
   }
   else{
    document.form.submit();
        return true;
  }
   
   document.getElementById('myLocation').innerText=msg;
}
