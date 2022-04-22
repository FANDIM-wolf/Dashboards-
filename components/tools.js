function define_month(string){
    var month;
    if( string ==  "01"){
        month = 0;
    }
    if( string ==  "02"){
        month = 1;
    }
    if( string ==  "03"){
        month = 2;
    }
    if( string ==  "04"){
        month = 3;
    }
    if( string ==  "05"){
        month = 4;
    }
    if( string ==  "06"){
        month = 5;
    }
    if( string ==  "07"){
        month = 6;
    }
    if( string ==  "08"){
        month = 7;
    }
    if( string ==  "09"){
        month = 8;
    }
    if( string ==  "10"){
        month = 9;
    }
    if( string ==  "11"){
        month = 10;
    }
    if( string ==  "12"){
        month = 11;
    }
    
    return month;
}

function define_day(string){
    var day;
    if( string ==  "01"){
        day = 0;
    }
    if( string ==  "02"){
        day = 1;
    }
    if( string ==  "03"){
        day = 2;
    }
    if( string ==  "04"){
        day = 3;
    }
    if( string ==  "05"){
        day = 4;
    }
    if( string ==  "06"){
        day = 5;
    }
    if( string ==  "07"){
        day = 6;
    }
    if( string ==  "08"){
        day = 7;
    }
    if( string ==  "09"){
        day = 8;
    }
    if( string ==  "10"){
        day = 9;
    }
    if( string ==  "11"){
        day = 10;
    }
    if( string ==  "12"){
        day = 11;
    }
    if( string ==  "13"){
        day = 12;
    }
    if( string ==  "14"){
        day = 13;
    }
    if( string ==  "15"){
        day = 14;
    }
    if( string ==  "16"){
        day = 15;
    }
    if( string ==  "17"){
        day = 16;
    }
    if( string ==  "18"){
        day = 17;
    }
    if( string ==  "19"){
        day = 18;
    }
    if( string ==  "20"){
        day = 19;
    }
    if( string ==  "21"){
        day = 20;
    }
    if( string ==  "22"){
        day = 21;
    }
    if( string ==  "23"){
        day = 22;
    }
    if( string ==  "24"){
        day = 23;
    }
    if( string ==  "25"){
        day = 24;
    }
    if( string ==  "26"){
        day = 25;
    }
    if( string ==  "27"){
        day = 26;
    }
    if( string ==  "28"){
        day = 27;
    }
    if( string ==  "29"){
        day = 28;
    }
    if( string ==  "30"){
        day = 29;
    }
    if( string ==  "31"){
        day = 30;
    }
    
    
    return day;
}


function summ_of_array(array){
    let result_sum = 0;
    for(var i = 0 ; i< array.length; i++){
        result_sum += array[i];
    }
    return result_sum;
}         

function create_array_of_revenues(){
    array_of_revenues = []
    for(j=0; j<=100;j++){
        array_of_revenues[j] = 0;
    }
    return array_of_revenues;

}
function create_array_of_revenues_double(){
    array_of_revenues = []
    for(j=0; j<=100;j++){
        array_of_revenues[j] = 0,1;
    }
    return array_of_revenues;

}  

function fill_data_in_array(posts){ 

let array_of_labels_test = []
for (var i=0; i< posts.length; i++){
    array_of_labels_test[i] = posts[i].title;
    console.log(array_of_labels_test[i]);
  }
return array_of_labels_test;

}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
