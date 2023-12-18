$(function () {
  // TODO: **Add a listener for click events on the save button. 


  //Save Text In Local Storage
  //timeBlock.innerHTML = localStorage.getItem('timeBlock');
  $('.saveBtn').on('click', function(){
   
    var timeBlock = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
   
    localStorage.setItem(timeBlock, text);
  });

  //Saved events persist after page refresh
  //HOUR 9
  var hour9 = localStorage.getItem("hour-9");
  $("#hour-9 .description").val(hour9);

  //HOUR 10
   var hour10 = localStorage.getItem("hour-10");
  $("#hour-10 .description").val(hour10);

  //HOUR 11
  var hour11 = localStorage.getItem("hour-11");
  $("#hour-11 .description").val(hour11);

  //HOUR 12
  var hour12 = localStorage.getItem("hour-12");
  $("#hour-12 .description").val(hour12);

  //HOUR 1
  var hour1 = localStorage.getItem("hour-1");
  $("#hour-1 .description").val(hour1);
 
  //HOUR 2
  var hour2 = localStorage.getItem("hour-2");
  $("#hour-2 .description").val(hour2);
 
  //HOUR 3
  var hour3 = localStorage.getItem("hour-3");
  $("#hour-3 .description").val(hour3);
 
  //HOUR 4
  var hour4 = localStorage.getItem("hour-4");
  $("#hour-4 .description").val(hour4); 
  
  //HOUR 5
  var hour5 = localStorage.getItem("hour-5");
  $("#hour-5 .description").val(hour5); 

//Gets Current Hour of The Day
const currHour = dayjs().hour();
//Compares Current Hour With Hour Blocks
switch (currHour) {
  case 9:
    document.getElementById('hour-9').classList.add ('present');
    document.getElementById('hour-10').classList.add ('future');
    document.getElementById('hour-11').classList.add ('future');
    document.getElementById('hour-12').classList.add ('future');
    document.getElementById('hour-1').classList.add ('future');
    document.getElementById('hour-2').classList.add ('future');
    document.getElementById('hour-3').classList.add ('future');
    document.getElementById('hour-4').classList.add ('future');
    document.getElementById('hour-5').classList.add ('future');
    break;
  case 10:
    document.getElementById('hour-9').classList.add ('past');
    document.getElementById('hour-10').classList.add ('present');
    document.getElementById('hour-11').classList.add ('future');
    document.getElementById('hour-12').classList.add ('future');
    document.getElementById('hour-1').classList.add ('future');
    document.getElementById('hour-2').classList.add ('future');
    document.getElementById('hour-3').classList.add ('future');
    document.getElementById('hour-4').classList.add ('future');
    document.getElementById('hour-5').classList.add ('future');
    break;
  case 11:
    document.getElementById('hour-9').classList.add ('past');
    document.getElementById('hour-10').classList.add ('past');
    document.getElementById('hour-11').classList.add ('present');
    document.getElementById('hour-12').classList.add ('future');
    document.getElementById('hour-1').classList.add ('future');
    document.getElementById('hour-2').classList.add ('future');
    document.getElementById('hour-3').classList.add ('future');
    document.getElementById('hour-4').classList.add ('future');
    document.getElementById('hour-5').classList.add ('future');
    break;
  case 12:
    document.getElementById('hour-9').classList.add ('past');
    document.getElementById('hour-10').classList.add ('past');
    document.getElementById('hour-11').classList.add ('past');
    document.getElementById('hour-12').classList.add ('present');
    document.getElementById('hour-1').classList.add ('future');
    document.getElementById('hour-2').classList.add ('future');
    document.getElementById('hour-3').classList.add ('future');
    document.getElementById('hour-4').classList.add ('future');
    document.getElementById('hour-5').classList.add ('future');
    break;
  case 13:
    document.getElementById('hour-9').classList.add ('past');
    document.getElementById('hour-10').classList.add ('past');
    document.getElementById('hour-11').classList.add ('past');
    document.getElementById('hour-12').classList.add ('past');
    document.getElementById('hour-1').classList.add ('present');
    document.getElementById('hour-2').classList.add ('future');
    document.getElementById('hour-3').classList.add ('future');
    document.getElementById('hour-4').classList.add ('future');
    document.getElementById('hour-5').classList.add ('future');
    break;
  case 14:
    document.getElementById('hour-9').classList.add ('past');
    document.getElementById('hour-10').classList.add ('past');
    document.getElementById('hour-11').classList.add ('past');
    document.getElementById('hour-12').classList.add ('past');
    document.getElementById('hour-1').classList.add ('past');
    document.getElementById('hour-2').classList.add ('present');
    document.getElementById('hour-3').classList.add ('future');
    document.getElementById('hour-4').classList.add ('future');
    document.getElementById('hour-5').classList.add ('future');
    break;
  case 15:
    document.getElementById('hour-9').classList.add ('past');
    document.getElementById('hour-10').classList.add ('past');
    document.getElementById('hour-11').classList.add ('past');
    document.getElementById('hour-12').classList.add ('past');
    document.getElementById('hour-1').classList.add ('past');
    document.getElementById('hour-2').classList.add ('past');
    document.getElementById('hour-3').classList.add ('present');
    document.getElementById('hour-4').classList.add ('future');
    document.getElementById('hour-5').classList.add ('future');
    break;
  case 16:
    document.getElementById('hour-9').classList.add ('past');
    document.getElementById('hour-10').classList.add ('past');
    document.getElementById('hour-11').classList.add ('past');
    document.getElementById('hour-12').classList.add ('past');
    document.getElementById('hour-1').classList.add ('past');
    document.getElementById('hour-2').classList.add ('past');
    document.getElementById('hour-3').classList.add ('past');
    document.getElementById('hour-4').classList.add ('present');
    document.getElementById('hour-5').classList.add ('future');
    break;
  case 17:
    document.getElementById('hour-9').classList.add ('past');
    document.getElementById('hour-10').classList.add ('past');
    document.getElementById('hour-11').classList.add ('past');
    document.getElementById('hour-12').classList.add ('past');
    document.getElementById('hour-1').classList.add ('past');
    document.getElementById('hour-2').classList.add ('past');
    document.getElementById('hour-3').classList.add ('past');
    document.getElementById('hour-4').classList.add ('past');
    document.getElementById('hour-5').classList.add ('present');
    break;
};
//Conditions For Timeframes Outside of "Work Hours"
if (currHour < 9){
  document.getElementById('hour-9').classList.add ('past');
  document.getElementById('hour-10').classList.add ('past');
  document.getElementById('hour-11').classList.add ('past');
  document.getElementById('hour-12').classList.add ('past');
  document.getElementById('hour-1').classList.add ('past');
  document.getElementById('hour-2').classList.add ('past');
  document.getElementById('hour-3').classList.add ('past');
  document.getElementById('hour-4').classList.add ('past');
  document.getElementById('hour-5').classList.add ('past');
} else if (currHour >17){
  document.getElementById('hour-9').classList.add ('future');
  document.getElementById('hour-10').classList.add ('future');
  document.getElementById('hour-11').classList.add ('future');
  document.getElementById('hour-12').classList.add ('future');
  document.getElementById('hour-1').classList.add ('future');
  document.getElementById('hour-2').classList.add ('future');
  document.getElementById('hour-3').classList.add ('future');
  document.getElementById('hour-4').classList.add ('future');
  document.getElementById('hour-5').classList.add ('future');
};

//Displays date In Header
  var currentDay = dayjs();
  $('#currentDay').text(currentDay.format('MMM D, YYYY'));
  
});
