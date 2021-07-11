const apiURL='https://api.covid19india.org/data.json';
const name=[];
var dta;
async function getData(){
  const response=await fetch(apiURL);
  const data=await response.json();
  dta=data;
  console.log(data);
  document.getElementById('total-confirmed').innerHTML = data.cases_time_series[data.cases_time_series.length-1].totalconfirmed;
  document.getElementById('total-recovered').innerHTML = data.cases_time_series[data.cases_time_series.length-1].totalrecovered;
  document.getElementById('total-deceased').innerHTML = data.cases_time_series[data.cases_time_series.length-1].totaldeceased;
  document.getElementById('total-vac').innerHTML = data.tested[data.tested.length-1].totalvaccineconsumptionincludingwastage;
  document.getElementById('total-reg').innerHTML = data.tested[data.tested.length-1].totalindividualsvaccinated;
  for(let i=0;i<data.statewise.length;i++){
    name[i]=data.statewise[i].state;
    name[i]=name[i].toLowerCase();
  }
}
getData();
//setTimeout(function(){

  console.log(dta);
  console.log(name);

  function stateData(){
    console.log(dta);
    var sName = document.getElementById('state-name').value;
    sName=sName.toLowerCase();
    var l=name.indexOf(sName);
    console.log(dta.statewise[l].confirmed);
    document.getElementById('s-total').innerHTML = dta.statewise[l].confirmed;
    document.getElementById('s-recovered').innerHTML = dta.statewise[l].recovered;
    document.getElementById('s-deceased').innerHTML = dta.statewise[l].deaths;
  }

//}, 100);
