// This is querySelector: We can select queries with this. For example:
document.querySelector('#title') // Used to select element with id = "title"
document.querySelector('.heading') // Used to select element with class = 'heading'
document.querySelector('p') // Used to select the first parahgrah element in Document
document.querySelector('ul') // Used to select the ul in Document

const myUl = document.querySelector('ul') // Now, we contained this ul in a variable
myUl.querySelector('li').style.color = 'green' //  We can use same properties on this variable now.

// Query Selector All : Selects all the elements with given parameter and returns a node list
document.querySelectorAll('li') 
// Node List is not an Array
// But Still there are several properties which we can use on NodeList which are of array.

const myList = document.querySelectorAll('li') // This list contains all the elements of "li"
myList[0].style.color = 'green' // Will change first index of list

const myH1 = document.querySelectorAll('h1')
myH1[0].style.color = 'green'

// forEach in NodeList
myList.forEach((item) => (item.style.color = 'green'))

// Class Name : It will return a HTMLCollection (It is different from Arrays and NodeList) 
const htmlColl = document.getElementsByClassName('list-item') // Will return a HTMLCollection

// Now we will convert HTMLCollection to Array, so that we can apply arrays methods to it.
const myConvertedArray = Array.from(htmlColl)

myConvertedArray.forEach((item) => (item.style.backgroundColor = "White"))