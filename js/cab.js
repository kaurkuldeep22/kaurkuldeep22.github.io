$(document).ready(function() {
$('#search').click(function(e) {
// Initializing Variables With Form Element Values
var pick = $('#pick').val();
var drop = $('#drop').val();
var carType = $('#carType').val();
var rentCompany = $('#rentCompany').val();

// Initializing Variables With Regular Expressions
var pick_regex = /^[0-9a-zA-Z]+$/;
var drop_regex = /^[0-9a-zA-Z]+$/;

// To Check Empty Form Fields.
if (pick.length == 0) {
$('#head').text("* All fields are mandatory *"); // This Segment Displays The Validation Rule For All Fields
$("#pick").focus();
return false;
}
// Validating Select Field.
else if (carType == "No Preference") {
$('#p3').text("* Please Choose any one option"); // This Segment Displays The Validation Rule For Selection
$("#carType").focus();
return false;
}
// Validating Select Field.
else if (rentCompany== "No Preference") {
$('#p4').text("* Please Choose any one option"); // This Segment Displays The Validation Rule For Selection
$("#rentCompany").focus();
return false;
}
// Validating Address Field.
else if (!pick.match(pick_regex) || pick.length == 0) {
$('#p1').text("* For Address please use numbers and letters *"); // This Segment Displays The Validation Rule For Address
$("#pick").focus();
return false;
}
// Validating Address Field.
else if (!drop.match(drop_regex) || drop.length == 0) {
$('#p2').text("* For Address please use numbers and letters *"); // This Segment Displays The Validation Rule For Address
$("#drop").focus();
return false;
}

else {
alert("Please Wait Searching!");
return true;
}
});
});
