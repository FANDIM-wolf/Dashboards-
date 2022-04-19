/*functions for calculations of additional charts*/







/****/
async function get_number_of_sales_companies(names_of_sales,array_of_company_revenue_sales , type_of_date ){
    let token = "Aak6Fwm000Sc-78309-LLgrz63bbD5-098Vvewlkvi";
    if(type_of_date == "month"){
        let response = await fetch('http://1c.hayler.ru/api/hs/numberofsales/companies/month?token='+token);
        console.log(response);
        var result = await response.json();
    }
    if(type_of_date == "week"){
        let response = await fetch('http://1c.hayler.ru/api/hs/numberofsales/companies/week?token='+token)
        console.log(response);
        var result = await response.json();
    }
    if(type_of_date == "day"){
        let response = await fetch('http://1c.hayler.ru/api/hs/numberofsales/companies/day?token='+token)
        console.log(response);
        var result = await response.json();
    }
    
    for ( var i =0; i<result.length; i++){
       names_of_sales[i] = result[i].name;
       array_of_company_revenue_sales[i] = result[i].numberofsales;
       console.log("Number of sales", result[i].numberofsales);
    }

}



/****/




/****/
async function get_number_of_trading_profit(names_of_sales,array_of_company_revenue_sales , type_of_date ){
    let token = "Aak6Fwm000Sc-78309-LLgrz63bbD5-098Vvewlkvi";
    if(type_of_date == "month"){
        let response = await fetch('http://1c.hayler.ru/api/hs/tradingprofit/companies/month?token='+token);
        console.log(response);
        var result = await response.json();
    }
    if(type_of_date == "week"){
        let response = await fetch('http://1c.hayler.ru/api/hs/tradingprofit/companies/week?token='+token)
        console.log(response);
        var result = await response.json();
    }
    if(type_of_date == "day"){
        let response = await fetch('http://1c.hayler.ru/api/hs/tradingprofit/companies/day?token='+token)
        console.log(response);
        var result = await response.json();
    }
    
    for ( var i =0; i<result.length; i++){
       names_of_sales[i] = result[i].name;
       array_of_company_revenue_sales[i] += result[i].tradingprofit;
       console.log("Trade profit", array_of_company_revenue_sales[i]);
    }

}



/****/


/****/





async function get_data_about_average_check(average_check_names,average_check_result , type_of_date){
    
    let token = "Aak6Fwm000Sc-78309-LLgrz63bbD5-098Vvewlkvi";
    if(type_of_date == "month"){
        let response = await fetch('http://1c.hayler.ru/api/hs/averagecheck/companies/month?token='+token);
        console.log(response);
        var result = await response.json();
    }
    if(type_of_date == "week"){
        let response = await fetch('http://1c.hayler.ru/api/hs/averagecheck/companies/week?token='+token)
        console.log(response);
        var result = await response.json();
    }
    if(type_of_date == "day"){
        let response = await fetch('http://1c.hayler.ru/api/hs/averagecheck/companies/day?token='+token)
        console.log(response);
        var result = await response.json();
    }

    
   
    //console.log(result)
    name_of_average_check = result[0].name;
    var position = 0 
    average_check_names[position] = name_of_average_check;
    
    for( var i = 0; i< result.length; i++ ){
        if(name_of_average_check == result[i].name){
            average_check_result[position] += result[i].averagecheck;
            console.log(average_check_names[position]);
        }
        if(name_of_average_check != result[i].name){
            position = position + 1;
            name_of_average_check = result[i].name;
            average_check_names[position] = result[i].name;
            average_check_result[position] += result[i].averagecheck;
            console.log(average_check_result[position]);
        }
        
    }
    console.log(consumptions_names);
    console.log(average_check_result);

}


/** AUXIILIARY TOOLS*/

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
    for(j=0; j<=30;j++){
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


//is object in array or no ? 

function is_element_in_array(element , array)
{
    var elements_for_test = create_array_of_revenues();

    for (var i = 0 ; i< array.length ; i++){
        if(element == array[i]){
            return true; // element is in array
        }
        else{
            elements_for_test[i] = 0;
        }    
    }
    

    var result = summ_of_array(elements_for_test);
    
    if(result == 0){
        return false; // element isn't in array
    }
}


//reverse array

function reverse_array(array){
    var new_array = [];
    for(var i = array.length ; i>0 ; i--){
        new_array[i] = array[i]
    }

    return new_array;
}

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
