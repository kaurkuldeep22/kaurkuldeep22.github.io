function validate(){
    let msg;
    let name=document.getElementById("fname").value;
    let pswd=document.getElementById("psw").value;
    let nameregex = /^[a-zA-Z0-9]+$/;
    let pswregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    if(name == "")
   {
        msg="Name can't empty";

   }   
  else if((name.length <5 || name.length > 15))
  {
     msg="Username should be between 5 and 15";
   
  }
  else if(!name.match(nameregex)){
         msg="Username should contain characters A-Z,a-z and numbers 1-9 are acceptable and no space allowed";
  }
  else if(pswd == "")
  {
      msg="Password can't empty";
  }
  else if(!pswd.match(pswregex)){
      msg="Password should contain atleast one uppercase alphabet, one lowercase alphabet,one digit and no space allowed ";
  }
  else
  {
    document.form.submit();
        return true;
  }
   
   document.getElementById('myLocation').innerText=msg;
}

function regvalidate(){
    let msg1;
    let username=document.getElementById("uname").value;
    let password1=document.getElementById("pswd").value;
    let password2=document.getElementById("confirmpsw").value;
    let nameregex = /^[a-zA-Z0-9]+$/;
    let pswregex=/^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(username == "")
    {
         msg1="Username can't empty";
 
    }   
  else if((username.length <5 || username.length > 15))
  {
      msg1="Username should be between 5 and 15";
    
   }
   else if(!username.match(nameregex)){
          msg1="Username should contain characters A-Z,a-z and numbers 1-9 are acceptable and no space allowed";
   }
   else if(password1 == "")
   {
       msg1="Password can't empty";
   }
   else if(password2 == "")
   {
       msg1="Repeat password can't empty";
   }
   else if(!password1.match(pswregex)){
    msg1="Password should contain atleast one uppercase alphabet, one lowercase alphabet,one digit and no space allowed";
   }
   else if(password1 != password2)
   {
       msg1="password should be matched";
   }
   else
   {
    document.form.submit();
    return true;
   }
    
    document.getElementById('myLocation1').innerText=msg1;
 }
