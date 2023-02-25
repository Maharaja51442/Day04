// 2.using rest countries API URL:https://restcountries.com/v3.1/all and dislay all countries flags in the console.
//Answer;
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);{
        console.log(result);
    }
    
for(var i=0;i<result.length;i++){
    console.log(result[i].flag);
}
// 3.use the same rest countries url and all the countries names ,regions,sub-region and populations
//Answer;
for(var i=0;i<result.length;i++){
    console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
}
}