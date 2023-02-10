const data = {
   name: 'Akai Asakura',
  player: 'Hideki',
  occupation: 'Ronin',
  age: 32,
  sex: 'male',
  birthplace: 'Echizen, Asakura',
  points: 10,
  energy: 14,
  season: 12,
  focus: 10,

  life: {
    current: 16,
    max: 32,
  },

  sanity: {
    current: 15,
    max: 23,
  },

  stamina: {
    current: 10,
    max: 23,
  },

   mana: {
    current: 22,
    max: 22,
  },

  weapons: [
    {
      name: 'Katana',
      type: 'Katana',
      damage: '2d6+2',
      attack: 'Dex-3',
      penalty: '+10',
    },
    {
      name: 'Wakizachi',
      type: 'Wakizachi',
      damage: '1d6+4',
      attack: 'Dex-1',
      penalty: '+5',
    },
  ],

  attributes: [
    {
      type: 'Força',
      amount: 10,
    },
    {
      type: 'Dextreza',
      amount: 12,
    },
    {
      type: 'Inteligência',
      amount: 11,
    },
    {
      type: 'Saúde',
      amount: 10,
    },
    {
      type: 'Vontade',
      amount: 12,
    },
    {
      type: 'Percepção',
      amount: 11,
    },
    {
      type: 'Carisma',
      amount: 10,
    },
    {
      type: 'Intimidação',
      amount: 13,
    },
    {
      type: 'Parry',
      amount: 12,
    },
    {
      type: 'Bloqueio',
      amount: 13,
    },
    {
      type: 'Esquiva',
      amount: 10,
    },
  ],

    expertise: [
      {
      name: 'Audição Aguçada (+1)',
      cost: 3,
      description: '+1 em testes que envolvam a audição',
    },
      {
      name: 'Reflexos de Combate',
      cost: 5,
      description: '+1 em jogadas de Parry, Esquiva e Bloqueio, +2 para verificação de pânico e +6 para acordar',
    },
      {
      name: 'Noção de Perigo',
      cost: 6,
      description: 'O Yama pode alertar o personagem de certas situações de risco',
    },
      {
      name: 'Destemor',
      cost: 4,
      description: 'Some seu nível de Destemor toda vez que for resistir a uma intimidação ou a uma tentativa de possessão',
    },
      {
      name: 'Flexibilidade',
      cost: 4,
      description: '+3 em testes de escalada e fuga',
    },
      {
      name: 'Direção Absoluta',
      cost: 2,
      description: 'Você possui facilidade em identifcar o norte e retraçar passos que tenha feito a menos de 1 mês, +3 para testes de navegação e localização',
    },
      {
      name: 'Cerimonia Secreta',
      cost: 6,
      description: '+1 para jogada de cada jogador ao combinar habilidades sazonais',
    },
      {
      name: 'Nitojutsu',
      cost: 0,
      description: '+1 para jogadas de Katana e Wakizachi, +2 para Parry',
    },
      {
      name: 'Pulo do gato',
      cost: 6,
      description: 'Ao suceder em um teste de DEX, divida um dano de queda pela metade',
    },
      {
      name: 'Hipoalgia',
      cost: 6,
      description: '+3 em testes de HT para evitar quedas e +3 para resistir a dor física',
    },

  ],
        expertise2: [
    {
      name: 'Tornado de Torii',
      type: 'Youjutsu',
      cost: 4,
      damage: '3d6 (+2d6)',
      time: '1 turno',
      duration: '1 turno',
      penalty: '+40',
      description: 'Uma corrente de vento surge ao cortar com sua espada dando 3d6 de dano, qualquer criatura que for acertada deve suceder em um teste de STR+1 ou tomar 2d6 de dano a mais, para cada ponto de esoterica que você gastar, você pode tornar este teste mais dificil  ',
    },
    {
      name: 'Angirasa Veda',
      type: 'Youjutsu',
      cost: 3,
      damage: '2d6',
      time: '1 turno',
      duration: '1 turno',
      penalty: '-20 se o alvo falhar e -10 se suceder',
      description: 'A máscara de Kojo lhe orbita, ela lança um raio de luz em um alvo de sua escolha, causando 2d6 de dano. O alvo deve fazer um teste de DEX+1, se passar, tomará 1d6 de dano a mais, ou 2d6 se falhar',
    },
    {
      name: 'Terukuni brilha na terra e no céu',
      type: 'Youjutsu',
      cost: 6,
      damage: '2d6+2',
      time: '1 turno',
      duration: '1 turno',
      penalty: '-5 por alvo cegado',
      description: 'A máscara de Kojo abre sua boca e preenche a sala de luz, qualquer alvo pego em um cone fará um teste de HT, se falhar receberá 2d6+2 e ficará 2 turnos cego, se suceder, ficará apenas 1',
    },
   {
      name: 'Ciclo Solar',
      type: 'Youjutsu',
      cost: 4,
      damage: 0,
      time: '1 turno',
      duration: '1d6 turnos',
      penalty: 'Ganha o dobro de pontos positivos',
      description: 'Intensifica a luz solar na área, danos de fogo e luz ficam mais forte enquantos danos de escuridão e gelo ficam mais fracos. Você passa a fazer testes de STR e DEX com +3',
    },
   {
      name: 'Feiticeiro de Abril',
      type: 'Sazonal',
      cost: 1,
      damage: 0,
      time: '1 turno',
      duration: '1d6-1',
      penalty: '.',
      description: 'Pode drenar a habilidade de um alvo de ter vantagens e desvantagens com a primavera, você pode gastar uma ação bônus e gerar uma primavera artificial',
    },
      {
      name: 'Míriades das 8 mil flores de Sakura',
      type: 'Sazonal',
      cost: 4,
      damage: '3d6 (+2d6+2)',
      time: '1 turno',
      duration: '1 turno',
      penalty: '.',
      description: 'Você faz um dash com sua espada dando 3d6 em inimigos próximos, eles devem suceder em um teste de DEX ou sofrer 2d6+2. Durante a primavera, o dano inicial aumentará para 3d6+5, durante o outono o dano adicional reduzirá para 1d6+4',
    },
       {
      name: 'Tambor do Tengu',
      type: 'Sazonal',
      cost: 3,
      damage: '2d6 (+4d6)',
      time: '1 turno',
      duration: '1 turno',
      penalty: '.',
      description: 'Você gera um turbilhão de cerejeiras, o turbilão em si dá 2d6 de dano, ele logo se desfaz em flores de cerejeira explosivas, os alvos do ataque anterior devem fazer um teste de DEX, tomando 4d6 de dano em caso de falha, ou metade em caso de sucesso',
    },
  ],
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.expertise.map((expertise, index) => {
   addExpertiseToTable(expertise, index)
})

data.expertise2.map((expertise2, index) => {
   addExpertise2ToTable(expertise2, index)
})

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#birthplace').val(data.birthplace)
$('#points').val(data.points)
$('#energy').val(data.energy)
$('#season').val(data.season)
$('#focus').val(data.focus)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.sanityBar').css('width', `${calculateBar(data.sanity.current, data.sanity.max)}%`)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)

$('.staminaBar').css('width', `${calculateBar(data.stamina.current, data.stamina.max)}%`)
$('#staminaCount').text(`${data.stamina.current}/${data.stamina.max}`)
$('#staminaCurrent').val(data.stamina.current)
$('#staminaMax').val(data.stamina.max)

$('.manaBar').css('width', `${calculateBar(data.mana.current, data.mana.max)}%`)
$('#manaCount').text(`${data.mana.current}/${data.mana.max}`)
$('#manaCurrent').val(data.mana.current)
$('#manaMax').val(data.mana.max)

const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const sanityModal = $('#sanityModal')
const staminaModal = $('#staminaModal')
const manaModal = $('#manaModal')

const input = document.querySelector("input");
input.addEventListener("input", function(event) {
  console.log(event.target.value);
});


$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  } else if (event.target.id == 'addExpertiseModal') {
     closeModal('#addExpertiseModal')
  } else if (event.target.id == 'addExpertise2Modal') {
     closeModal('#addExpertise2Modal')
  } 
})

function rollAtribute(atribute, amount) {
  console.log(this)

  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    const diceNumber = rollDice('3d6')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}

$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})

$('.staminaBar').click(function () {
  console.log(this)
  staminaModal.css('display', 'block')
})

$('.manaBar').click(function () {
  console.log(this)
  manaModal.css('display', 'block')
})

$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})

$('#addExpertise').click(function() {
   openModal('#addExpertiseModal')
})

$('#addExpertise2').click(function() {
   openModal('#addExpertise2Modal')
})

$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#possession').change(function () {
  if (this.checked) {
    console.log('Modo possessão ativado!')
  } else {
    console.log('Modo possessão desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})

$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})

$('#addWeaponForm').submit(function (event) {
  var weaponType = ''

  if ($('#weaponType').val() == 'fire') {
    weaponType = 'Fogo'
  } else if ($('#weaponType').val() == 'arch') {
    weaponType = 'Arco'
  } else if ($('#weaponType').val() == 'fight') {
    weaponType = 'Briga'
  }

  const weapon = {
    name: $('#weaponName').val(),
    type: weaponType,
    damage: $('#weapondamage').val(),
    attack: $('#weaponAttack').val(),
    penalty: $('#weaponPenalty').val(),
  }

  data.weapons.push(weapon)
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

  closeModal('#addWeaponModal')
  event.preventDefault()
})

$('#addExpertiseForm').submit(function (event) {
  var expertiseCost = ''

  if ($('#expertiseCost').val() == 1) {
    expertiseCost = 1
  } else if ($('#expertiseCost').val() == 2) {
    expertiseCost = 2
  } else if ($('#expertiseCost').val() == 3) {
    expertiseCost = 3
  }

  const expertise = {
    name: $('#expertiseName').val(),
    cost: $('#expertiseCost').val(),
    description: $('#expertiseDescription').val(),
  }

  data.expertise.push(expertise)
  const id = data.expertise.length - 1
  addExpertiseToTable(expertise, id)

  closeModal('#addExpertiseModal')
  event.preventDefault()
})

$('#addExpertise2Form').submit(function (event) {
  var expertise2Type = ''

  if ($('#expertise2Type').val() == 'seasonal') {
    expertise2Type = 'Sazonal'
  } else if ($('#expertise2Type').val() == 'esoterica') {
    expertise2Type = 'Esoterica'
  } else if ($('#expertise2Type').val() == 'youjutsu') {
    expertise2Type = 'Youjutsu'
  }

  const expertise2 = {
    name: $('#expertise2Name').val(),
    type: $('#expertise2Type').val(),
    cost: $('#expertise2Cost').val(),
    damage: $('#expertise2Damage').val(),
    time: $('#expertise2Time').val(),
    duration: $('#expertise2Duration').val(),
    penalty: $('#expertise2Penalty').val(),
    description: $('#expertise2Description').val(),
    
  }

  data.expertise2.push(expertise2)
  const id = data.expertise2.length - 1
  addExpertise2ToTable(expertise2, id)

  closeModal('#addExpertise2Modal')
  event.preventDefault()
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

  $('#changeStamina').submit(function (event) {
  let current = Number($('#staminaCurrent').val())
  const max = Number($('#staminaMax').val())

  if (current > max) {
    alert('A stamina atual não pode ser maior que a maxima!')
    current = max
  }

  data.stamina.current = current
  data.stamina.max = max
  $('.staminaBar').css('width', `${calculateBar(current, max)}%`)
  $('#staminaCount').text(`${current}/${max}`)

  closeModal('#staminaModal')
  event.preventDefault()
})

$('#changeMana').submit(function (event) {
  let current = Number($('#manaCurrent').val())
  const max = Number($('#manaMax').val())

  if (current > max) {
    alert('A mana atual não pode ser maior que a maxima!')
    current = max
  }

  data.mana.current = current
  data.mana.max = max
  $('.manaBar').css('width', `${calculateBar(current, max)}%`)
  $('#manaCount').text(`${current}/${max}`)

  closeModal('#manaModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function calcDice(ability, dice) {

  const table = [
    { normal: 18 },
    { normal: 17, good: 18 },
    { normal: 16, good: 18 },
    { normal: 15, good: 17 },
    { normal: 14, good: 17, extreme: 18 },
    { normal: 13, good: 16, extreme: 18 },
    { normal: 12, good: 16, extreme: 36 },
    { normal: 11, good: 15, extreme: 34 },
    { normal: 10, good: 15, extreme: 34 },
    { normal: 9, good: 14, extreme: 34 },
    { normal: 9, good: 14, extreme: 32 },
    { normal: 8, good: 13, extreme: 32 },
    { normal: 8, good: 13, extreme: 32 },
    { normal: 7, good: 12, extreme: 30 },
    { normal: 7, good: 12, extreme: 30 },
    { normal: 6, good: 11, extreme: 30 },
    { normal: 6, good: 11, extreme: 28 },
    { normal: 5, good: 10, extreme: 28 },
    { normal: 5, good: 10, extreme: 26 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Falha Crítica'
    if (dice >= type.good) return 'Falha Normal'
    return 'Sucesso Normal'
  } else if (type.good) {
    if (dice >= type.good) return 'Falha'
    return 'Sucesso Normal'
  } 
  return 'Sucesso Crítico'
}

function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}

function addWeaponToTable(weapon, id) {
  const newWeapon = $(`<tr id="weapon_${id}">
        <td>
            <button onclick="deleteWeapon(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${weapon.name}
        </td>
        <td>${weapon.type}</td>
        <td>${weapon.damage}</td>
        <td>${weapon.attack}</td>
        <td>${weapon.penalty}</td>
    </tr>`)
  $('table#weapons').append(newWeapon)
}

function addExpertiseToTable(expertise, id) {
  const newexpertise = $(`<tr id="expertise_${id}">
        <td>
            <button onclick="deleteExpertise(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise.name}
        </td>
        <td>${expertise.cost}</td>
        <td>${expertise.description}</td>
    </tr>`)
  $('table#expertise').append(newexpertise)
}

function addExpertise2ToTable(expertise2, id) {
  const newexpertise2 = $(`<tr id="expertise2_${id}">
        <td>
            <button onclick="deleteExpertise2(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise2.name}
        </td>
        <td>${expertise2.type}</td>
        <td>${expertise2.cost}</td>
        <td>${expertise2.damage}</td>
        <td>${expertise2.time}</td>
        <td>${expertise2.duration}</td>
        <td>${expertise2.penalty}</td>
        <td>${expertise2.description}</td>
    </tr>`)
  $('table#expertise2').append(newexpertise2)
}

function addAttribute(attribute, id) {
  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
    <a onclick="rollAtribute('${attribute.type}', ${attribute.amount})">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}" id="attribute_input_${id}" disabled>
  </div>`)
  $('#attributesList').append(newAttribute)
}

function deleteWeapon(id) {
  $(`tr#${id}`).remove()
}

function deleteExpertise(id) {
  $(`tr#${id}`).remove()
}

function deleteExpertise2(id) {
  $(`tr#${id}`).remove()
}



/// Árvore de Foco

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");
});

 function convertNumber() {
      // Get the input value
      var input = document.getElementById("input").value;
      // Perform the conversion
      var output = input / 3;
      // Display the results
      document.getElementById("inputDisplay").innerHTML = "Input: " + input;
      document.getElementById("outputDisplay").innerHTML = "Output: " + output;
    }


  const button = document.querySelector('.login-button');
  button.addEventListener('click', function() {
    window.location.href = 'https://reysouza.github.io/Akari/';
  });

function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "250px") {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
}

   const areas = document.querySelectorAll("area");
  const sidebar = document.getElementById("mySidebar");

  for (let area of areas) {
    area.addEventListener("click", function() {
      toggleNav();
      updateSidebarContent(area.title);
    });
  }

  function toggleNav() {
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  }

  function updateSidebarContent(title) {
    let content;
    switch (title) {
      case "A Lenda da Guerreira que Celebra a Maidono":
        content = "This is some custom content for the 'A Lenda da Guerreira que Celebra a Maidono' section.";
        break;
      case "A Verdadeira Face do Deus Secreto":
        content = "This is some custom content for the 'A Verdadeira Face do Deus Secreto' section.";
        break;
      case "Fé Nativa em meio a terra morta":
        content = "This is some custom content for the 'Fé Nativa em meio a terra morta' section.";
        break;
      default:
        content = "This is some default content for an undefined section.";
    }
    sidebar.innerHTML = `
      <a href="#" class="closebtn" onclick="toggleNav()">&times;</a>
      <br></br>
      <br></br>
      <h3>${title}</h3>
      <p>${content}</p>
    `;
  }
