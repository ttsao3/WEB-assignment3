/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: ____Ting Chen Tsao____ Student ID: __107253239__ Date: __2024/06/06__
*
********************************************************************************/


const setData = require("../data/setData");
const themeData = require("../data/themeData");
let sets = [];

function initialize() {
    return new Promise((resolve, reject) => {
        setData.forEach(setElement => {
            let setThemeInSet = { ...setElement, theme: themeData.find(themeElement => themeElement.id == setElement.theme_id).name}
            sets.push(setThemeInSet);    
        });
        resolve();
    });    
}

function getAllSets(){
    return new Promise((resolve, reject) => {
        resolve(sets);
    });
}

function getSetByNum(setNum){
    return new Promise((resolve, reject) => {
        let getSet = sets.find(s => s.set_num == setNum);

        if (getSet){
            resolve(getSet);
        }
        else{
            reject("Unable to find requested set");
        }
    });
}

function getSetsByTheme(theme){

    return new Promise((resolve, reject) => {
        let getSets = sets.filter(s => s.theme.toLowerCase().includes(theme.toLowerCase()));

        if (getSets) {
            resolve(getSets);
        } else {
            reject("Unable to find requested sets");
        }
    });
}

module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme }