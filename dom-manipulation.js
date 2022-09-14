
// 1
document.getElementById('container')

// 2
document.querySelector('#container')

// 3
document.querySelectorAll('.second')

// 4
document.querySelector('ol .third')

// 5
const section = document.querySelector('#container')
section.innerText = "Hello!"

// 6
const footer = document.querySelector('.footer')
footer.className = 'main'

// 7
footer.className = ''

// 8
const newLi = document.createElement('li')

// 9
newLi.innerText = 'four'

// 10
const ul = document.querySelector('ul')
ul.append(newLi)

// 11
const li = document.querySelectorAll('ol li');
for(let list of li){
  list.style.backgroundColor = 'green';
}

// 12
footer.remove()
