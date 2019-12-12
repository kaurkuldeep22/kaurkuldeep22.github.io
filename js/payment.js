function validate() {
    
    var name = document.forms["form"]["fname"]; 
    var cardnum = document.forms["form"]["fnum"];
    var cvv = document.forms["form"]["fcvv"];

    if (name.value == "") {
        window.alert("Please enter your name");
        name.focus(); 
        return false;
    }
    if ( cardnum.value == ""){
        window.alert("Please fill card number");
        cardnum.focus();
        return false;
    }
    if ( cvv.value == ""){
        window.alert("Please fill cvv number");
        cvv.focus();
        return false;
    }
    
    else {
        document.form.submit();
        return true;
    }
    
    /*document.getElementById('name').innerText = msg;*/
}