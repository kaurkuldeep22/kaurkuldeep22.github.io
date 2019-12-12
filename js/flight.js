
//dropdown list
var arr = ["Select a location...","Toronto","Calgary","Vancouver","Beijing","Shanghai","Los Angeles","Moscow"];


$(document).ready(function(){
    arr.forEach(function(element, index, arr){
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        let option3 = document.createElement('option');
        option1.append(element);
        option2.append(element);
        option3.append(element);
        $('#select1').append(option1);
        $('#select2').append(option2);
        $('#select3').append(option3);
    });

//datepicker
$('.flight-date').datepicker();

$(".hotel-date").datepicker();

//validation
$('#submit').click(function(){
    if($("#dep-date").val() == ""){
        alert('Please select a departure date.');
    } 
    if($("#ret-date").val() == ""){
        alert('Please select a return date.');
    }
})


$('#search').click(function(){
    if($("#checkin").val() == ""){
        alert('Please select a check in date.');
    } 
    if($("#checkout").val() == ""){
        alert('Please select a check out date.');
    }
})
});

$(window).scroll(function() {
        $(".pop").each( function() {
            if( $(window).scrollTop() > $(this).offset().top - 500 ) {
                $(this).css('opacity',1);
            } 
            else {
                $(this).css('opacity',0);
            }
        }); 
    });

$(window).scroll(function() {
          $(".intro").each( function() {
            if( $(window).scrollTop() > $(this).offset().top - 500 ) {
                $(this).css('opacity',1);
            } 
            else {
                  $(this).css('opacity',0);
             }
         }); 
    });