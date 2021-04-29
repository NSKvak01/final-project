let history;
let hist = JSON.parse(localStorage.getItem('history'))
if (hist===null){
    history=[]
    history=$(history)
} else{
    history = $(hist)
}

let time =''
let areas =''
let pace =''
let workout=[]
let journal = {}
let width = $('#header').css('width')
let info=''







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
