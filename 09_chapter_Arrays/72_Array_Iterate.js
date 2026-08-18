

let tests = ['login','checkout','search'];

for(let i=0;i<tests.length;i++){

    console.log(i,tests[i]);
}

console.log('=========');

for(let test of tests){
    console.log(test);
}

console.log('==========');

tests.forEach((test,index)=> {
    console.log(`${index}:${test}`);
})