'use strict'
//1
function f1() {
    let sum = document.forms.oneForm.elements;
    sum[3].value = (+sum[0].value) + (+sum[1].value) + (+sum[2].value);
};
//2
function f2() {
    let arr ;
    let arr1 = [];
    arr = document.forms[1].elements[0].value;
    arr1 = arr.split(' ');
    let sum = 0;
    arr1.forEach(item=> {
        sum = sum + +item;
    });
    document.forms[1].elements[1].value = sum/arr1.length;
}
//3
function f3() {
    let arr = [];
    let arr1 = [];
    let name = document.forms.threeForm.elements;
    arr1 = document.forms.threeForm.elements[0].value;
    arr = arr1.split(' ');
    name[1].value = arr[0];
    name[2].value = arr[1];
    name[3].value = arr[2];
}
//4
function f4() {
    let sum = document.forms.fourForm.elements[0].value;
    +sum;
    console.log(sum);
    let date = new Date;
    let yourYear = date.getFullYear() - sum;
    document.forms.fourForm.elements[1].value = yourYear;
}
//5
document.forms[4].elements[0].value = 0;
function f5_1(){
    document.forms[4].elements[0].value++;
}
function f5_2(){
    if(document.forms[4].elements[0].value == 0){

    }else{
        document.forms[4].elements[0].value-- ;
    }
}
//6
function f6(){
    let arr = Array.from(document.forms[5].elements[0].value);
    let arr2 = Array.from(document.forms[5].elements[0].value);
    arr2.reverse();
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr2[i]){

        }else{
            sum++;
        }
    }
    if(sum == 0){
        document.forms[5].elements[1].value='true';
    }else{
        document.forms[5].elements[1].value='false';
    }
}