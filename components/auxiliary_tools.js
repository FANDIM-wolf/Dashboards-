

//consumptions : get array of results and array of names(consumptions)
async function get_data_about_consumptions(consumptions_names,consumptions_result , type_of_date){
    
    let token = "Aak6Fwm000Sc-78309-LLgrz63bbD5-098Vvewlkvi";
    if(type_of_date == "month"){
        let response = await fetch('http://1c.hayler.ru/api/hs/expenses/last30day?token='+token);
        console.log(response);
        var result = await response.json();
    }
    if(type_of_date == "week"){
        let response = await fetch('http://1c.hayler.ru/api/hs/expenses/last7day?token='+token)
        console.log(response);
        var result = await response.json();
    }
    if(type_of_date == "day"){
        let response = await fetch('http://1c.hayler.ru/api/hs/expenses/companies/day?token='+token)
        console.log(response);
        var result = await response.json();
    }


  /*
  var items = [];
  for(var i = 0; i < result.length ; i++){
      if(is_element_in_array(result[i].item , items) == false){
        items.push(result[i].item);
      }
  }
    
    console.log("expenses: " , items)

    
  for(var k = 0 ; k<items.length; k++){
      for(var j = 0; j<result.length ; j++){
        if(items[k] == result[j].item){
            
          consumptions_result[k] += result[j].expenses; 
        }
      }
  }
  consumptions_names = items;
  console.log("consumptions result:" , consumptions_result)
  console.log("consumptions names :" , consumptions_names)
    */
  
  for(var i= 0; i<result.length; i++ ){
      consumptions_names[i] = result[i].day;
      consumptions_result[i] = result[i].expenses;
  }
  
   //consumptions_names = reverse_array(consumptions_names);
   console.log(consumptions_result)
  
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