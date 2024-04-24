
// QUESTIPN: 55
let numbers:number[]=[1,2,3,4,5,6,7,8];

// to doubled each number
let numberdoubled=numbers.map(number => number *2)
console.log(numberdoubled);



// QUESTION: 56
let mixedAraay=[5,6,"hooriya","mahnoor",5,"computer"];
let onlywords:any =[];

// only pick the words!
mixedAraay.forEach(element => {
    if(typeof(element)=== "string"){
        onlywords.push(element)
    }
});
// only excess words in a list
console.log(onlywords);


// QUESTION: 57
let gradesArray:number[]=[44,66,74,89,92,96];

let AverageGrade=gradesArray.reduce((total,grades)=> total+grades,0)
console.log(AverageGrade)




