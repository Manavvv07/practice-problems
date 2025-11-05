function findIndexOf(str, target){
    console.log("The original string is: ", str);
    console.log("index: ", str.indexOf(target));
}
findIndexOf("hello world", "world");

function getSliceOf(str, start, end){
    console.log("original string: ", str);
    console.log("after slice: ", str.slice(start, end));
}
getSliceOf("i am manav", 2, 5);

function replaceStr(str, target, end){
    console.log("original string: ", str);
    console.log("string after being replaced: ", str.replace(target, end));
}
replaceStr("Hello world", "world", "Manav");

function splitStr(str, seperator){
    console.log("original string: ", str);
    console.log("after splitting: ", str.split(seperator));
}
splitStr("My name is Manav", " ");