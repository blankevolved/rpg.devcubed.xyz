
var items = {
    'fist': {
        'boostType1': 'damage',
        'boostNum1': 0,
        'name': 'Fist',
        'slots': ['mainHand'],
        'sellPrice': 0,
        'desc': `Your first weapon, nothing!`
    },
    'dagger': {
        'boostType1': 'damage',
        'boostNum1': 2,
        'name': 'Dagger',
        'slots': ['mainHand'],
        'sellPrice':3,
        'desc': `A basic dagger
    ${green}+2 damage]`
    },
    'sword': {
        'boostType1': 'damage',
        'boostNum1': 4,
        'name': 'Sword',
        'slots': ['mainHand'],
        'sellPrice':7,
        'desc': `A basic sword
    ${green}+4 damage]`
    },
    // Helmets //
    'leather_helmet': {
        'boostType1': 'health',
        'boostNum1': 1.5,
        'name': 'Leather Helmet',
        'slots': ['head'],
        'sellPrice':2,
        'desc': `A leather helmet
    ${green}+1.5 Health]`
    },
    'iron_helmet': {
        'boostType1': 'health',
        'boostNum1': 3,
        'name': 'Iron Helmet',
        'slots': ['head'],
        'sellPrice':2,
        'desc': `A iron helmet
    ${green}+3 Health]`
    },
    // Chestplates //
    'leather_chestplate': {
        'boostType1': 'health',
        'boostNum1': 3,
        'name': 'Leather Chestplate',
        'slots': ['chest'],
        'sellPrice':2,
        'desc': `A leather chestplate
    ${green}+3 Health]`
    },
    // Leggings //
    'leather_leggings': {
        'boostType1': 'health',
        'boostNum1': 2,
        'name': 'Leather Leggings',
        'slots': ['legs'],
        'sellPrice':2,
        'desc': `A pair of leather leggings
    ${green}+2 Health]`
    },
    // Boots //
    'leather_boots': {
        'boostType1': 'health',
        'boostNum1': 1.5,
        'name': 'Leather Boots',
        'slots': ['boots'],
        'sellPrice':2,
        'desc': `A pair of leather boots
    ${green}+1.5 Health]`
    },
}


const enemys = {
    0: {
        'name': 'Goblin',
        'lvl0': {
            'baseHealth':5,
            'health':5,
            'maxHealth':5,
            'damage':1,
            'xpDrop':[1, 3, 5],
            'coinDrop': [13, 14, 15],
            'itemDrop': ['Dagger', 'Dagger', 'Dagger', 'Dagger', 'Sword', null, null, null, null, null],
        },
        'lvl1': {
            'baseHealth':8,
            'health':8,
            'maxHealth':8,
            'damage':3,
            'xpDrop':[2, 5, 8],
            'coinDrop': [17, 20, 22],
            'itemDrop': ['Dagger', 'Dagger', 'Dagger', 'Dagger', 'Dagger', 'Sword', 'Sword', null, null, null],
        },
    }
}

const levels = {
    0: {
        'req': 50,
        'hpBoost':null,
        'dmgBoost':null
    },
    1: {
        'req': 100,
        'hpBoost':.5,
        'dmgBoost':1
    },
    2: {
        'req': 150,
        'hpBoost':1,
        'dmgBoost':1.5
    }
}
var level = 0
var coins = 0
var health = 10
var maxHealth = 10
var damage = 1
var xp = 0
var xpToNext = levels[level].req
var currentEnemy = null
var currentEnemyName = null
var hasRun = false

var baseHealth = 10
var baseMaxHealth = 10
var baseDamage = 1

var currentHead = null
var currentChest = null
var currentLegs = null
var currentBoots = null

var currentWeapon = null
var currentOffhand = null

var bodyMap = null
var stats = null

var inv = ['Fist']
var equiped = []
var allBoosts = {
    'mainHand':{
        'healthBoost1':0,
        'damageBoost1':0,
        'healthDeboost1':0,
        'damageDeboost1':0
    },

    'head':{
        'healthBoost1':0,
        'damageBoost1':0,
        'healthDeboost1':0,
        'damageDeboost1':0
    },
    
    'chest':{
        'healthBoost1':0,
        'damageBoost1':0,
        'healthDeboost1':0,
        'damageDeboost1':0
    },
}

var devMode = false 


const baseName = 'RPG'

function removeFirst(arr, target) {
    var idx = arr.indexOf(target);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
    return arr;
  }

const osError = `${pink}{${white}os${pink}}`


refresh()


function refresh() {
    levelUp()
    if (health <= 0) {
        death()
    }
    if (currentWeapon == null) {
        equip(items['fist'])
    }
    if (health > maxHealth) {
        health = maxHealth
    }

    stats = `${white}Stats:
    ${white}Coins: ${yellow}{ ${coins.toFixed(2)} }]
    ${white}Level: ${green}{ ${level} }]
    ${white}XP: ${darkGreen}{ ${xp}/${xpToNext} }]
    ${white}HP: ${red}{ ${health}/${maxHealth} } ( +${levels[level].hpBoost} )]
    ${white}Damage: ${blue}{ ${damage} } ( +${levels[level].dmgBoost} )]`.replaceAll(null, '0')

    bodyMap = `
    ${white}Helmet: ${redPink}{ ${currentHead} }]
    ${white}Chest: ${redPink}{ ${currentChest} }]
    ${white}Legs: ${redPink}{ ${currentLegs} }]
    ${white}Boots: ${redPink}{ ${currentBoots} }]

    ${white}Weapon: ${purple}{ ${currentWeapon} }]
    ${white}Offhand: ${purple}{ ${currentOffhand} }]`.replaceAll(null, 'None')
}

function showStats() {
    return `${stats}
${bodyMap}`
}

function invList(page) {
    if (page == 1) {
        return`${white}Inventory Page 1:
        {${inv[0]}}    {${inv[1]}}    {${inv[2]}}    {${inv[3]}}    {${inv[4]}}
        {${inv[5]}}    {${inv[6]}}    {${inv[7]}}    {${inv[8]}}    {${inv[9]}}
        {${inv[10]}}    {${inv[11]}}    {${inv[12]}}    {${inv[13]}}    {${inv[14]}}
        {${inv[15]}}    {${inv[16]}}    {${inv[17]}}    {${inv[18]}}    {${inv[19]}}
        {${inv[20]}}    {${inv[21]}}    {${inv[22]}}    {${inv[23]}}    {${inv[24]}}
        {${inv[25]}}    {${inv[26]}}    {${inv[27]}}    {${inv[28]}}    {${inv[29]}}
        {${inv[30]}}    {${inv[31]}}    {${inv[32]}}    {${inv[33]}}    {${inv[34]}}
        {${inv[35]}}    {${inv[36]}}    {${inv[37]}}    {${inv[38]}}    {${inv[39]}}
        {${inv[40]}}    {${inv[41]}}    {${inv[42]}}    {${inv[43]}}    {${inv[44]}}
        {${inv[45]}}    {${inv[46]}}    {${inv[47]}}    {${inv[48]}}    {${inv[49]}}]
    `.replaceAll('{undefined}', '')
    }
    if (page == 2) {
        return`${white}Inventory Page 2:
        {${inv[50]}}    {${inv[51]}}    {${inv[52]}}    {${inv[53]}}    {${inv[54]}}
        {${inv[55]}}    {${inv[56]}}    {${inv[57]}}    {${inv[58]}}    {${inv[59]}}
        {${inv[60]}}    {${inv[61]}}    {${inv[62]}}    {${inv[63]}}    {${inv[64]}}
        {${inv[65]}}    {${inv[66]}}    {${inv[67]}}    {${inv[68]}}    {${inv[69]}}
        {${inv[70]}}    {${inv[71]}}    {${inv[72]}}    {${inv[73]}}    {${inv[74]}}
        {${inv[75]}}    {${inv[76]}}    {${inv[77]}}    {${inv[78]}}    {${inv[79]}}
        {${inv[80]}}    {${inv[81]}}    {${inv[82]}}    {${inv[83]}}    {${inv[84]}}
        {${inv[85]}}    {${inv[86]}}    {${inv[87]}}    {${inv[88]}}    {${inv[89]}}
        {${inv[90]}}    {${inv[91]}}    {${inv[92]}}    {${inv[93]}}    {${inv[94]}}
        {${inv[95]}}    {${inv[96]}}    {${inv[97]}}    {${inv[98]}}    {${inv[99]}}]
    `.replaceAll('{undefined}', '')
    }
    else {
        return `${white}That page dosent exist]`
    }
}


function death() {
    health = maxHealth
    hasRun = false
    currentEnemy.health = currentEnemy.baseHealth
    currentEnemy = null
    currentEnemyName = null
    coins = coins / 2
    refresh()
}

function fight(id, level) {
    var enemy = enemys[id]['lvl' + level.toString()]
    var enemyName = enemys[id].name
    if (enemy === undefined) {
        enemy = enemys[id]['lvl' + (level - 1).toString()]
    }
    refresh()
    var enemyStats = `${showStats()}

${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]
`

    if (currentEnemy !== null) return enemyStats

    currentEnemy = enemy
    currentEnemyName = enemyName
    return enemyStats
}

function run() {
    if (currentEnemy === null) return `${white}Cant run until you intiate a fight with the ]${blue}fight] ${white}command]`
    var enemy = currentEnemy
    var enemyName = currentEnemyName
    if (hasRun == true) {
        health = health - currentEnemy.damage
        refresh()
        if (currentEnemy == null) {
            return `${white}You couldnt run away and died]
${showStats()}` 
        }
        else {
        return `${white}You already tried to run]
${showStats()}
    ${red}-${currentEnemy.damage} HP] 

${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]`
        }
    }
    else {
        var ran = Math.floor(Math.random() * 2)
    }     
    if (ran == 0) {
        currentEnemy.health = currentEnemy.baseHealth
        currentEnemy = null
        currentEnemyName = null
        hasRun = true
        return `${white}You ran away]
${showStats()}`
    }
    else if (ran == 1) {
        hasRun = true
        health = health - currentEnemy.damage
        refresh()
        if (currentEnemy == null) {
            return `${white}You couldnt run away and died]
${showStats()}` 
        }
        else {
        return `${white}You couldnt run away]
${showStats()}
    ${red}-${currentEnemy.damage} HP] 

${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]`
        }
    }
}

function attack() {
    if (currentEnemy === null) return `${white}Cant attack until you intiate a fight with the ]${blue}fight] ${white}command]`
    currentEnemy.health = currentEnemy.health - damage
    health = health - currentEnemy.damage

    if (currentEnemy.health <= 0 && currentEnemy !== null) {
        currentEnemy.health = currentEnemy.baseHealth
        coinsLength = Math.floor(Math.random() * currentEnemy.coinDrop.length)
        itemLength = Math.floor(Math.random() * currentEnemy.itemDrop.length)
        xpLength = Math.floor(Math.random() * currentEnemy.xpDrop.length)
        addedCoins = currentEnemy.coinDrop[coinsLength]
        addedWeapons = currentEnemy.itemDrop[itemLength]
        addedXP = currentEnemy.xpDrop[xpLength]
        if (addedWeapons !== null) inv.push(addedWeapons)
        coins = coins + addedCoins
        xp = xp + addedXP
        refresh()
        currentEnemy = null
        currentEnemyName = null
        hasRun = false
        refresh()
        return `${white}Drops:
    ${yellow}( + ${addedCoins} ) coins]
    ${green}( + ${addedXP} ) XP]
    ${blue}( + ${addedWeapons} ) to your inventory]

${showStats()}
    `.replaceAll(null, 'None')
    } 
    var enemy = currentEnemy
    var enemyName = currentEnemyName
    refresh()

    if (currentEnemy === null) return `You've died\n${showStats()}`

    return `${showStats()}
    ${red}-${currentEnemy.damage} HP] 

${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]
    ${red}-${damage} HP]
`
}

function sell(item) {
    if (item.sellPrice !== null && inv.includes(item.name)) {
        removeFirst(inv, item.name)
        coins = coins + item.sellPrice
        refresh()
        if (inv.includes(item.name) == false) {
            equip(items.fist)
            refresh()
        }
        return showStats()
    }
    else {
        equip(items.fist)
        refresh()
        return `${white}You dont have that item] 
${showStats()}`
    }
}

function levelUp() {
    if (xp >= xpToNext) {
        level = level + 1
        if (levels[level] === undefined) {
            level = level - 1
            xpToNext = levels[level].req
        }
        else {
            xp = xp - xpToNext 
            xpToNext = levels[level].req
            maxHealth = maxHealth + levels[level].hpBoost
            damage = damage + levels[level].dmgBoost
        }
    }
}


function equip(item) {
    if (item == undefined || item == null) return 'you dont own that item'
    if (inv.includes(item.name)) {
        function addBoosts(type) {
            if (type == 'mainHand' && equiped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equiped.includes(currentWeapon)) {
                        maxHealth = maxHealth - items[currentWeapon.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equiped, currentWeapon)
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equiped, currentWeapon)
                    }
                    equiped.push(item.name)
                    currentWeapon = item.name
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equiped.includes(currentWeapon)) {
                        damage = damage - items[currentWeapon.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equiped, currentWeapon)
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equiped, currentWeapon)
                    }
                    equiped.push(item.name)
                    currentWeapon = item.name
                }
            }
            if (type == 'head' && equiped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equiped.includes(currentHead)) {
                        maxHealth = maxHealth - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equiped, currentHead)
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equiped, currentHead)
                    }
                    equiped.push(item.name)
                    currentHead = item.name
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equiped.includes(currentHead)) {
                        damage = damage - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equiped, currentHead)
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equiped, currentHead)
                    }
                    equiped.push(item.name)
                    currentHead = item.name
                }
            }
            if (type == 'chest' && equiped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equiped.includes(currentChest)) {
                        maxHealth = maxHealth - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equiped, currentChest)
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equiped, currentChest)
                    }
                    equiped.push(item.name)
                    currentChest = item.name
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equiped.includes(currentChest)) {
                        damage = damage - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equiped, currentChest)
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equiped, currentChest)
                    }
                    equiped.push(item.name)
                    currentChest = item.name
                }
            }
        }
        if ((item.slots).includes('mainHand')) {
            addBoosts('mainHand')
        }
        if ((item.slots).includes('head')) {
            addBoosts('head')
        }
        else if ((item.slots).includes('chest')) {
            addBoosts('chest')
        }
        return 'equiped'
    }
    return 'you dont own that item'
}

function inspect(item) {
    return `${item.name}:
    ${item.desc}`
}

function listAllItems() {
    function listItem(item) {
        return `${items[item].name}:
    ${items[item].desc}`
    }
    return `${white}Items:

${listItem('fist')}

${listItem('dagger')}

${listItem('sword')}

${listItem('leather_helmet')}

${listItem('leather_chestplate')}

${listItem('leather_leggings')}

${listItem('leather_boots')}
    `
}

function save() {
    var gameSave = {
        coins: coins,
        health: health,
        maxHealth: maxHealth,
        damage: damage,
        currentHead: currentHead,
        currentChest: currentChest,
        currentLegs: currentLegs,
        currentBoots: currentBoots,
        currentWeapon: currentWeapon,
        currentOffhand: currentOffhand,
        inv: inv,
        level: level,
        xp: xp,
        xpToNext: xpToNext,
        allBoosts: allBoosts,
        equiped: equiped
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function load() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if (typeof savedGame.coins !== 'undefined') coins = savedGame.coins
    if (typeof savedGame.health !== 'undefined') health = savedGame.health
    if (typeof savedGame.maxHealth !== 'undefined') maxHealth = savedGame.maxHealth
    if (typeof savedGame.damage !== 'undefined') damage = savedGame.damage
    if (typeof savedGame.currentHead !== 'undefined') currentHead = savedGame.currentHead
    if (typeof savedGame.currentChest !== 'undefined') currentChest = savedGame.currentChest
    if (typeof savedGame.currentLegs !== 'undefined') currentLegs = savedGame.currentLegs
    if (typeof savedGame.currentBoots !== 'undefined') currentBoots = savedGame.currentBoots
    if (typeof savedGame.currentWeapon !== 'undefined') currentWeapon = savedGame.currentWeapon
    if (typeof savedGame.currentOffhand !== 'undefined') currentOffhand = savedGame.currentOffhand
    if (typeof savedGame.inv !== 'undefined') inv = savedGame.inv
    if (typeof savedGame.level !== 'undefined') level = savedGame.level
    if (typeof savedGame.xp !== 'undefined') xp = savedGame.xp
    if (typeof savedGame.xpToNext !== 'undefined') xpToNext = savedGame.xpToNext
    if (typeof savedGame.allBoosts !== 'undefined') allBoosts = savedGame.allBoosts
    if (typeof savedGame.equiped !== 'undefined') equiped = savedGame.equiped
    // if (typeof savedGame.a !== 'undefined') a = savedGame.a
    
    refresh()
}

window.onload = function() {
    load();
}

window.setInterval(function(){
    // call your function here
    if (currentEnemy === null) health = health + 1
    if (health > maxHealth) {
        health = maxHealth
    }
    refresh()
}, 15000);  // Change Interval here to test. For eg: 5000 for 5 sec

window.setInterval(function(){
    // call your function here
    save()
}, 10000);  // Change Interval here to test. For eg: 5000 for 5 sec

function addcoins(num) {
    coins = coins + num
    refresh()
}

function addxp(num) {
    xp = xp + num
    refresh()
}

function additem(item) {
    if (item.name !== undefined) {
        inv.push(item.name)
        refresh()
        return true
    }
    else {
        return false
    }
}