#!/usr/bin/node

function helloSomeone(param) {
    if (typeof param == 'string') {
        if (param == '') {
            console.log("Who are you?");
        }
        else {
            console.log("Hello ${param}!")
        }
    }
}