 function createGame(player1, hour, player2){
    return `
    <li>
        <img src="./img/icon-${player1}.svg" alt="bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./img/icon-${player2}.svg" alt="bandeira da ${player2}">
    </li>
    `
 }
 function createCard(date, day, games) {
    return `
    <div class="card">
    <h1>${date}<span>${day}</span></h2></h1>
      <ul>
          ${games}
      </ul>                   
  </div>         
    `             
 }
 document.querySelector('#app').innerHTML = `
    <header>
    <img src="./img/logo.svg" alt="logo da nlw">
    </header>
    <main id="cards">
        ${createCard('24/11', 'quinta-feira',
        createGame("brasil", "16:00", "servia")
        )}
        ${createCard('27/11', 'domingo', 
        createGame("alemanha", "16:00", "espanha")
        )}
        
        ${createCard('28/11', 'segunda-feira', 
        createGame("suiça", "13:00", "brasil")
        )}
        ${createCard('02/12', 'sexta-feira', 
        createGame("brasil","16:00", "camaroes")
        )}
    </main>
 `
    

