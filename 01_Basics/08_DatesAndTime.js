//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)//In JS the first month is denoted by '0' not '1'.
// let myCreatedDate1 = new Date(2023, 0, 23, 5,3)//After 25 the 5 and 3 is the time for the date
// let myCreatedDate2 = new Date("2002-01-10")
let myCreatedDate3 = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());
// console.log(myCreatedDate3.toString());
// console.log(myCreatedDate3.getTime());//we get time in millisecond bcoz that is easy to compare and do calculations
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));//by this method we convert the milli second into seconds

let newDate = new Date()
// console.log(newDate.getMonth());//this is also based on the zero based month system where zero is the january
// console.log(newDate.getDay());//this is 1 based
// console.log(newDate.getMonth()+1);//sometimes developers do this for getting rid of the confusion after adding one it will became the 1 based


console.log(newDate.toLocaleString('default',{
    weekday:"long",
})
)


