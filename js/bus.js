function validate(){
    let msg;
    let name=document.getElementById("fname").value;
    let pswd=document.getElementById("psw").value;
    let phn=document.getElementById("phone").value;
    let pickloc=document.getElementById("ploc").value;
    let droploc=document.getElementById("dloc").value;
    let pickdate=document.getElementById("pickdate").value;
    let picktime=document.getElementById("picktime").value;
    let nameregex = /^[a-zA-Z0-9]+$/;
    let pswregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    if(name == "")
   {
        msg="Username can't empty";

   }   
  else if((name.length <5 || name.length > 15))
  {
     msg="Username should be between 5 and 15";
   
  }
  else if(!name.match(nameregex)){
         msg=" Username should contain only characters A-Z,a-z and numbers 1-9 are acceptable and no space allowed";
  }
  else if(pswd == "")
  {
      msg="Password can't empty";
  }
  else if(!pswd.match(pswregex)){
      msg="Password should contain atleast one uppercase alphabet, one lowercase alphabet,one digit and no space allowed ";
  }
  else if(phn == "")
  {
      msg="Phone number cannot empty";
  }
 else if((phn.length < 10 || phn.length > 10))
  {
      msg="Length should be 10";
  }
  else if(pickloc == "")
  {
      msg="Pickup location cannot empty";
  }
  else if (droploc == "")
  {
      msg="Dropoff location cannot empty";
  }
  else if (pickdate == "")
  {
      msg="Pickup date cannot empty";
  }
  else if (picktime == "")
  {
      msg="pickup time cannot empty";
  }
  else
  {
    document.form.submit();
        return true;
  }
   
   document.getElementById('myLocation').innerText=msg;
}