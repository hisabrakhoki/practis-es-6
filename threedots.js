const ages = [12, 21, 41, 25, 30];
const ages2 = [22, 11, 21, 20, 20];
const ages3 = [14, 15, 11, 15, 10];
// const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3]
// console.log(allAges2);

const business = 600;
const minister = 500; 
const sochib = 200;
const maximum = Math.max(business, minister, sochib);
const takaPoisa = [600, 500, 200];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum);



