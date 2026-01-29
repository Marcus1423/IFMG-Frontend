let minhaDiv = document.getElementById('minhaDiv')

minhaDiv.addEventListener('mouseover', function mudaCor() {
  this.style.backgroundColor = 'yellow';
  
})

minhaDiv.addEventListener('mouseout', function mudaCor() {
    this.style.backgroundColor = 'white'
  })

console.log(minhaDiv)