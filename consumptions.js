//third array
async function Process_data_consumptions_per_day(dateSince , dateTo , days_line_y , type_of_date){


         
    var d_since = dateSince;
    var d_to= dateTo;
    url =" http://1c.hayler.ru/api/hs/expenses/total?token=Aak6Fwm000Sc-78309-LLgrz63bbD5-098Vvewlkvi&DataSince="+d_since+"&DataTo="+d_to+"&type_of_period="+type_of_date;
    

    //get json
      var response =await fetch(url);
      var result  = await response.json();
      console.log("Response from server" ,result);
      
      for ( var i =0; i<result.length; i++){
         days_line_y[i] = result[i].day;
         array_of_company_revenue_third[i] = result[i].expenses;
         console.log(days_line_y[i]);
         console.log(array_of_company_revenue_third[i]);
      }
      setTimeout(Create_chart_consumptions_per_days,3000);

      }        

async function Process_data_consumptions(dateSince , dateTo , names , type_of_date){
  var d_since = dateSince;
  var d_to = dateTo;

       
    var d_since = dateSince;
    var d_to= dateTo;
    url =" http://1c.hayler.ru/api/hs/expenses/total?token=Aak6Fwm000Sc-78309-LLgrz63bbD5-098Vvewlkvi&DataSince="+d_since+"&DataTo="+d_to+"&type_of_period="+type_of_date;
    

    //get json
      var response =await fetch(url);
      var result  = await response.json();
      console.log("Response from server" ,result);
     
      
      for ( var i =0; i<result.length; i++){
        console.log("name:", result[i].month)
         names[i] = result[i].month;
         
         array_of_company_revenue_third[i] += result[i].expenses;
         
      }
        console.log("Results:" , array_of_company_revenue_third)
        console.log("Names:" , names)
        setTimeout(Create_chart_consumptions,3000);

      }

      
async function Process_data_consumptions_week(dateSince , dateTo , days_line_y , type_of_date){
  
     
  var d_since = dateSince;
    var d_to= dateTo;
    url =" http://1c.hayler.ru/api/hs/expenses/total?token=Aak6Fwm000Sc-78309-LLgrz63bbD5-098Vvewlkvi&DataSince="+d_since+"&DataTo="+d_to+"&type_of_period="+type_of_date;
  

let response = await fetch(url);
var result  = await response.json();


position = 0
current = result[0].week;
  //summ array
  for (var i = 0; i < result.length ; i++){

    if(current == result[i].week){
      array_of_company_revenue_third[position] +=result[i].expenses;
      days_line_y[position] = current; 
        
    }
    else{
      position++;
      current = result[i].week;
      array_of_company_revenue_third[position] += result[i].expenses;
      days_line_y[position]= current;
    }
     
      
  }

  //days_line_y[week] = week;
   //console.log(days_line_y[i] , "week")
   //array_of_company_revenue[week] += result[i].revenue;
   //console.log(array_of_company_revenue[i],"revenue");
   //week++;
  

  console.log(days_line_y , "week")
  setTimeout(Create_chart_consumptions_per_days,3000);
}