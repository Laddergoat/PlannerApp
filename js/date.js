/**
 * Created by andy on 04/12/13.
 */


/**
 * This script adds the JQuery DatePicker and sets the default start date to the current date.
 */
var currentDate = (date.getMonth() +1 ) + "/" + date.getDate() + "/" + date.getFullYear();


$(" #plandate").val(currentDate);

$(function(){
    $( "#plandate").datepicker();
});


