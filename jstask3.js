var today = new Date();

var dd = today.getDate() <  10 ? '0' + today .getDate(): today.getDate();
var mm = today.getMonth()+1 ; //January is 0!
var yyyy = today.getFullYear ();
today = mm+'/'+dd+'/'+ yyyy;
today1= mm +'-'+ dd + '-' + yyyy;
console.log(today);
console.log(today1);
