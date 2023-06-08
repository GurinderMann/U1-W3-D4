const celle1 = [];
const celle2 = []
const celle3 =[]
const celle4=[]
for (let i = 1; i <= 20; i++) {
  celle1.push(i);
}
const celleContainer = document.getElementById("celle1");

celle1.forEach(function(cella) {
const cellaElement = document.createElement("div");
    cellaElement.classList.add('numeri')
  cellaElement.textContent = " " + cella;
  celleContainer.appendChild(cellaElement);
});

for (let i = 21; i <= 40; i++) {
    celle2.push(i);
  }
  const celleContainer2 = document.getElementById("celle2");
  
  celle2.forEach(function(cella2) {
  const cellaElement = document.createElement("div");
      cellaElement.classList.add('numeri')
    cellaElement.textContent = " " + cella2;
    celleContainer2.appendChild(cellaElement);
  });

  for (let i = 41; i <= 60; i++) {
    celle3.push(i);
  }
  const celleContainer3 = document.getElementById("celle3");
  
  celle3.forEach(function(cella3) {
  const cellaElement = document.createElement("div");
      cellaElement.classList.add('numeri')
    cellaElement.textContent = " " + cella3;
    celleContainer3.appendChild(cellaElement);
  });

  for (let i = 61; i <= 76; i++) {
    celle4.push(i);
  }
  const celleContainer4 = document.getElementById("celle4");
  
  celle4.forEach(function(cella4) {
  const cellaElement = document.createElement("div");
      cellaElement.classList.add('numeri')
    cellaElement.textContent = " " + cella4;
    celleContainer4.appendChild(cellaElement);
  });


  const button = document.getElementById('button')

  button.addEventListener('click', function(e){
    e.preventDefault()
    const numeroCasuale = Math.floor(Math.random()*76) +1
    const casual = document.createElement ('div')
    casual.classList.add ('casual')
    casual.textContent = numeroCasuale
    
    document.body.appendChild(casual);

    const celle = document.querySelectorAll('.numeri');
    celle.forEach(function(cella) {
      const numeroCella = parseInt(cella.textContent.trim());
      if (numeroCella === numeroCasuale) {
        cella.classList.add('illuminata');
      }
    });

  })

