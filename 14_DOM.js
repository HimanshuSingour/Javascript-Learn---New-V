console.log(window) // this will give window scope
console.log(document) // this will give HTML document of website
console.dir(document) // this will give HTML methods of website

// Element Manuplucation basic id, class , attributes
document.getElementById('mw-teleport-target') 
document.getElementByClassName('target-shdy') 
document.getElementById('mw-teleport-target').getAttribute('class')
document.getElementById('mw-teleport-target').setAttribute('class', "Himasnhu")
document.getElementById('mw-teleport-target').innerHTML = "Himanshu"


// ------------------- ////// -----------------

const idN = document.getElementById('mw-teleport-target')
idN.innerHTML // this will give u the inner text only
idN.innerContent // this will give the the nested inner text

// select the 1 iteam
document.querySelector('title') // tag
document.querySelector('#id') // this is for id
document.querySelector('.him') // this is for class name
document.querySelector('h1') // tag
document.querySelector('*') // All Element
document.querySelector('input=[type="password"]')

// it will return NodeList we can treat this array (but this is not an array)
document.querySelectorAll('h1')
const qury = document.querySelectorAll('h1')
qury[0].style.color = 'green'

// you can convert nodelist to array
Array.from(qury) // this will return array
