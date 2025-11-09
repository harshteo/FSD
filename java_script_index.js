// let a = 30;
// if(a>20){
//     let a=50;
//     console.log("a inside value="+a);
// }else{
//     console.log("inside else statement");
// }
// console.log("a outside value="+a);
// a =30;
// console.log(a);
// function greetings(msg){
//     return "hii.....hello" + msg;
// }

// const msg = greetings("good morning");
// console.log(msg);
// const data=function greetings(msg){
//     return "hii.....hello" + msg;
// }
// const msg = data(" good morning");
// console.log(msg);

// const msg = greetings(" good morning");
// function greetings(msg){
//     return "hii.....hello" + msg;
// }
// console.log(msg);

//arrow function

// const data =(msg)=>{
//     return "hii...hello"+msg;
// }
// const msg1 = data("good morning");
// console.log(msg1);

// const data = msg=>msg;
// const data1=data("hello");
// console.log(data1);

//IIFE Imediate invoke function
// (()=>{
//     console.log("Hiii....Hello");
// })();

// setTimeout(()=>{console.log("helllo")},5000); //5000ms i.e 5sec
// setInterval(()=>{console.log("hey...")},1000);// repeat after set interval

// function greetings(msg="hii"){
//     console.log("hello "+msg);
// }
// greetings("Welvome to ABEs");

function selectLang(lang){
    let data;
    if(lang=="java"){
        function javacompiler(){
            return "hey, java compiler calling...";
        }
        data =javacompiler();
    }
    else if(lang=='c'){
        function cCompiler(){
            return "hey, c compiler calling";
        }
        data=cCompiler();
    }
    else{
        data="no compiler calling";
    }
    return data;
}
console.log(selectLang("py"));