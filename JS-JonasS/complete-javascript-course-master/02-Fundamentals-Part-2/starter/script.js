// 'use strict'

// /* Write your code below. Good luck! 🙂 */

// const calcAverage = (scr1,scr2,scr3) => (scr1+scr2+scr3)/3;

// const scoreDolphins = calcAverage(85,54,41); 
// const scoreKoalas = calcAverage(23,34,27);

// const checkWinner = function (avgDolphins,avgKoalas){
//     if(avgDolphins >= avgKoalas*2){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }else if(avgKoalas >= avgDolphins*2){
//         console.log(`Koalas win ( ${avgKoalas} vs. ${avgDolphins})`);
//     }else {
//         console.log('No team wins!');
//     }
// }

// // const calcTip = (bill) => {
// //     const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.20;
// //     return tip
// // }

// console.log(calcTip(100));

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(bills,tips,total);


// /* Write your code below. Good luck! 🙂 */
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.BMI = this.mass / (this.height*this.height)
//         return this.BMI
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.BMI = this.mass / (this.height*this.height)
//         return this.BMI
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// if(mark.BMI > john.BMI){
//     console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`)
// }else{
//     console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`)
// }


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
  
/* Write your code below. Good luck! 🙂 */
  
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];
  
for (let i=0; i<bills.length; i++){
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + calcTip(bills[i]);
}
  
console.log(tips,totals);
  
const calcAverage = function (arr){
    let sum = 0;
        
      for(let i = 0; i<arr.length; i++){
          sum += arr[i];
          
      }
    let prom = sum/arr.length
    return prom;
    }

const average = calcAverage(totals);
console.log(average);