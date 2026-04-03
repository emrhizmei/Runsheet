const basic = document.getElementById('basic');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

basic.addEventListener('click', () =>{
    modal_container.classList.add('show');
})

close.addEventListener('click', () =>{
    modal_container.classList.remove('show');
})

const purpose = document.getElementById('purpose');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('close1');

purpose.addEventListener('click', () =>{
    modal_container1.classList.add('show');
})

close1.addEventListener('click', () =>{
    modal_container1.classList.remove('show');
})

const when = document.getElementById('when');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');

when.addEventListener('click', () =>{
    modal_container2.classList.add('show');
})

close2.addEventListener('click', () =>{
    modal_container2.classList.remove('show');
})

const pre = document.getElementById('pre');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');

pre.addEventListener('click', () =>{
    modal_container3.classList.add('show');
})

close3.addEventListener('click', () =>{
    modal_container3.classList.remove('show');
})


const step = document.getElementById('step');
const modal_container4 = document.getElementById('modal_container4');
const close4 = document.getElementById('close4');

step.addEventListener('click', () =>{
    modal_container4.classList.add('show');
    document.body.style.overflow = "hidden";
})

close4.addEventListener('click', () =>{
    modal_container4.classList.remove('show');
    document.body.style.overflow = "auto"; 
})

const escalation = document.getElementById('escalation');
const modal_container5 = document.getElementById('modal_container5');
const close5 = document.getElementById('close5');

escalation.addEventListener('click', () =>{
    modal_container5.classList.add('show');
})

close5.addEventListener('click', () =>{
    modal_container5.classList.remove('show');
})


const communication = document.getElementById('communication');
const modal_container6 = document.getElementById('modal_container6');
const close6 = document.getElementById('close6');

communication.addEventListener('click', () =>{
    modal_container6.classList.add('show');
})

close6.addEventListener('click', () =>{
    modal_container6.classList.remove('show');
})


const valid = document.getElementById('valid');
const modal_container7 = document.getElementById('modal_container7');
const close7 = document.getElementById('close7');

valid.addEventListener('click', () =>{
    modal_container7.classList.add('show');
})

close7.addEventListener('click', () =>{
    modal_container7.classList.remove('show');
})

const docu = document.getElementById('docu');
const modal_container8 = document.getElementById('modal_container8');
const close8 = document.getElementById('close8');

docu.addEventListener('click', () =>{
    modal_container8.classList.add('show');
})

close8.addEventListener('click', () =>{
    modal_container8.classList.remove('show');
})