let history;
let hist = JSON.parse(localStorage.getItem('history'))
if (hist===null){
    history=[]
    history=$(history)
} else{
    history = $(hist)
}

let favorite;
let favor = JSON.parse(localStorage.getItem('favorite'))
if(favor !== null){
    favorite = $(favor)
}else{
    favorite=[]
}

let time =''
let areas =''
let pace =''
let workout=[]
let journal = {}
let width = $('#header').css('width')
let info=''

const j= $('#journal')
let d;
let t;
let a;
let p;
let l;



let i;
let u;


let saved={}


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


const findVideo = document.querySelector('#find')
let link=''
let player = $('#player')


const timeOptions = $('.time')
const areaOptions = $('.area')
const paceOptions = $('.pace')
