const companies=[
    {name: "company one" , category:"finance", start:"1981", end:"2003"},
    {name: "company tow" , category:"retail", start:"1992", end:"2008"},
    {name: "company three" , category:"tech", start:"1999", end:"2007"},
    {name: "company four" , category:"auto", start:"1989", end:"2010"},
    {name: "company five" , category:"finance", start:"2009", end:"2014"},
    {name: "company six" , category:"auto", start:"1987", end:"2010"},
    {name: "company seven" , category:"retail", start:"1986", end:"1996"},
    {name: "company eight" , category:"tech", start:"2011", end:"2016"},
    {name: "company nine" , category:"finance", start:"1981", end:"1989"}
];
const ages=[32,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

for(let i=0; i<companies.length;i++){
    console.log(companies[i]);}

//for each
companies.forEach(function(company){
    console.log(company.name)
});

//filter
/*
let canDrink=[];
for(i=0;i<ages.length;i++){
if(ages[i]>21){
    canDrink.push(ages[i]);
}}
console.log(canDrink);*/

//OR using filter
const canDrink=ages.filter(age=>age>=21);
console.log(canDrink);

//filter
const retailCompanies=companies.filter(company=>company.category==="retail");
console.log(retailCompanies);

//map
const ageMap= ages
 .map(age=>Math.sqrt(age))
 .map(age=>age*2);
console.log(ageMap);

//sort
const sortedCompanies=companies.sort((a,b)=>(a.start>b.start?1:-1));
console.log("sorted companies by start year"+sortedCompanies)
//sort ages
const sortAges=ages.sort((a,b)=>a-b);
console.log(sortAges);


//reduce

const ageSum=ages.reduce((total,age)=>total+age,0);
console.log("Age sum is :"+ageSum);