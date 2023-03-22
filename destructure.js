const person = { name:"parvej alom", age:22, job: "Electricity", gfName:"Ema wortion", friend:["Alom", "jahangir", "kasem", "rahim"], phone:016631654}

const {job, gfName, phone,salary, age}=person;
console.log(job,salary, gfName, age,);

const friend = ['Sakibj khan', 'Arman Khan', 'Amir Khan', 'Salman Khan'];
const [chotoFriend, secoundFrind, ...lastFriend] = friend;
console.log(chotoFriend, lastFriend)