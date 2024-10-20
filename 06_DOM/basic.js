document.getElementById('title').id
document.getElementById('title').className
// document.getElementById('title').class // this will create an error

// Get Attributte
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')

// Set Attribute : will overwrite
document.getElementById('title').setAttribute('class', 'test')

const title = document.getElementById('title')
console.log(title)

// How to change styling of HTML using Js
title.style.backgroundColor = "Green"
title.style.padding = "15px"