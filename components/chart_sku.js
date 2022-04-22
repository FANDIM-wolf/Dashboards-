//third array
async function Process_data_sku_per_day(dateSince , dateTo , days_line_y , type_of_date , brand){


         
    var d_since = dateSince;
    var d_to= dateTo;
    url =" http://1c.hayler.ru/api/hs/revenue/total?token=Aak6Fwm000Sc-78309-LLgrz63bbD5-098Vvewlkvi&DataSince="+d_since+"&DataTo="+d_to+"&type_of_period="+type_of_date+"&brand="+brand;
    

    //get json
      var response =await fetch(url);
      var result  = await response.json();
      console.log("Response from server" ,result);
      console.log("REQUESTED BRAND:",brand);
      for ( var i =0; i<result.length; i++){
         days_line_y[i] = result[i].day;
         array_of_company_revenue_fourth[i] = result[i].revenue;
         console.log(days_line_y[i]);
         console.log(array_of_company_revenue_fourth[i]);
      }
      setTimeout(Create_chart_sku_per_days,3000);

      }        

async function Process_data_sku(dateSince , dateTo , names , type_of_date ,name){
  var d_since = dateSince;
  var d_to = dateTo;

       
    var d_since = dateSince;
    var d_to= dateTo;
    url =" http://1c.hayler.ru/api/hs/revenue/total?token=Aak6Fwm000Sc-78309-LLgrz63bbD5-098Vvewlkvi&DataSince="+d_since+"&DataTo="+d_to+"&type_of_period="+type_of_date+"&brand="+brand;
    

    //get json
      var response =await fetch(url);
      var result  = await response.json();
      console.log("Response from server" ,result);
     
      
      for ( var i =0; i<result.length; i++){
          
        console.log("name:", result[i].month)
         names[i] = result[i].month;
         
         array_of_company_revenue_fourth[i] = result[i].revenue;
         
      }
        console.log("Results:" , array_of_company_revenue_fourth)
        console.log("Names:" , names)
        setTimeout(Create_chart_sku,3000);

      }

      
async function Process_data_sku_week(dateSince , dateTo , days_line_y , type_of_date ){
  
     
  var d_since = dateSince;
    var d_to= dateTo;
    url =" http://1c.hayler.ru/api/hs/revenue/total?token=Aak6Fwm000Sc-78309-LLgrz63bbD5-098Vvewlkvi&DataSince="+d_since+"&DataTo="+d_to+"&type_of_period="+type_of_date+"&brand="+brand;
  

let response = await fetch(url);
var result  = await response.json();


position = 0
current = result[0].week;
  //summ array
  for (var i = 0; i < result.length ; i++){

    if(current == result[i].week ){
      array_of_company_revenue_fourth[position] =result[i].revenue;
      days_line_y[position] = current; 
          
    }
    else{
      position++;
      current = result[i].week;
      array_of_company_revenue_fourth[position] = result[i].revenue;
      days_line_y[position]= current;
    }
     
      
  }


  

  console.log(days_line_y , "week")
  setTimeout(Create_chart_sku_per_days,3000);
}