
const items = {
    // Main Hand //
    fist: {
        boostType1: 'damage',
        boostNum1: 0,
        name: 'Fist',
        slots: ['mainHand'],
        sellPrice: null,
        desc: `+0 damage`
    },
    dagger: {
        boostType1: 'damage',
        boostNum1: 2,
        name: 'Dagger',
        slots: ['mainHand'],
        sellPrice:3,
        desc: `+2 damage`
    },
    sword: {
        boostType1: 'damage',
        boostNum1: 4,
        name: 'Sword',
        slots: ['mainHand'],
        sellPrice:7,
        desc: `+4 damage`
    },
    slime_sword: {
        itemReq:'Slime Ball',
        itemAmt:25,
        boostType1: 'damage',
        boostNum1: 6,
        name: 'Slime Sword',
        slots: ['mainHand'],
        sellPrice:1,
        desc: `+6 damage`
    },
    // Off Hand //
    small_shield: {
        boostType1: 'health',
        boostNum1: 1,
        name: 'Small Shield',
        slots: ['offHand'],
        sellPrice:2.5,
        desc: `+1 health`
    },
    xp_shield: {
        boostType1: 'xp',
        boostNum1: 0.1,
        name: 'XP Shield',
        slots: ['offHand'],
        sellPrice:2.5,
        desc: `+0.1 xp multi`
    },
    shield: {
        boostType1: 'health',
        boostNum1: 2.5,
        name: 'Shield',
        slots: ['offHand'],
        sellPrice:3.5,
        desc: `+2.5 health`
    },
    // Helmets //
    leather_helmet: {
        boostType1: 'health',
        boostNum1: 1.5,
        name: 'Leather Helmet',
        slots: ['head'],
        sellPrice:2,
        desc: `+1.5 Health`
    },
    iron_helmet: {
        boostType1: 'regen',
        boostNum1: .1,
        name: 'Iron Helmet',
        slots: ['head'],
        sellPrice:4,
        desc: `+0.1 Regen`
    },
    // Chestplates //
    leather_chestplate: {
        boostType1: 'health',
        boostNum1: 3,
        name: 'Leather Chestplate',
        slots: ['chest'],
        sellPrice:6,
        desc: `+3 Health`
    },
    // Leggings //
    leather_leggings: {
        boostType1: 'health',
        boostNum1: 2,
        name: 'Leather Leggings',
        slots: ['legs'],
        sellPrice:5,
        desc: `+2 Health`
    },
    // Boots //
    leather_boots: {
        boostType1: 'health',
        boostNum1: 1.5,
        name: 'Leather Boots',
        slots: ['boots'],
        sellPrice:2,
        desc: `+1.5 Health`
    },
    // Consumables //
    health_potion: {
        boostType1: 'health',
        boostNum1: 5,
        name: 'Health Potion',
        slots: ['consum'],
        sellPrice:5,
        desc: `A useful health potion`
    },
    // Crafting //
    slime_ball: {
        boostType1: 'health',
        boostNum1: 0,
        name: 'Slime Ball',
        slots: ['craft'],
        sellPrice:1,
        desc: `A slime ball used for crafting`
    },
}

const shopItems = {
    health_potion:{
        name: 'Health Potion',
        amt: null,
        price: 10
    }
}


const enemys = {
    goblin: {
        name: 'Goblin',
        lvl0: {
            baseHealth:5,
            health:5,
            maxHealth:5,
            damage:1,
            xpDrop:[3, 5, 7],
            coinDrop: [13, 14, 15],
            itemDrop: [
                'Dagger', 
                'Dagger', 
                'Dagger', 
                'Shield', 
                'Sword', 
                'Leather Helmet', 
                'Leather Chestplate', 
                'Leather Leggings', 
                'Leather Boots',
                'Small Shield',
                'Small Shield',
                null, 
                null,
                null, 
                null,
                null, 
                null, 
                null, 
                null, 
                null
            ],
        },
        lvl1: {
            baseHealth:8,
            health:8,
            maxHealth:8,
            damage:3,
            xpDrop:[5, 8, 13],
            coinDrop: [17, 20, 22],
            itemDrop: [
                'Dagger',
                'Dagger', 
                'Small Shield', 
                'Small Shield', 
                'Small Shield', 
                'Sword', 
                'Sword', 
                'Leather Helmet', 
                'Leather Helmet', 
                'Leather Helmet', 
                'Leather Chestplate', 
                'Leather Leggings', 
                'Leather Leggings', 
                'Leather Boots', 
                'Leather Boots', ,
                'Shield', 
                'Shield', 
                null,
                null
            ],
        },
    },
    skeleton: {
        name: 'Skeleton',
        lvl0: {
            baseHealth:10,
            health:10,
            maxHealth:10,
            damage:2,
            xpDrop:[7, 10, 13],
            coinDrop: [2, 3, 5],
            itemDrop: [
                'Dagger',
                'Dagger',
                'Dagger',
                'Dagger',
                null,
                'Iron Helmet',
                'Iron Helmet',
                null,
                null,
                'XP Shield',
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
        },
    },
    slime: {
        name: 'Slime',
        lvl2: {
            baseHealth:20,
            health:20,
            maxHealth:20,
            damage:0.5,
            xpDrop:[5, 3, 2],
            coinDrop: [2, 3, 5],
            itemDrop: [
                null
            ],
            alwaysDrop: ['Slime Ball'],
            alwaysAmt: 1
        },
    },
}

const levels = {
    0: {
        req: 50,
        hpBoost:null,
        dmgBoost:null,
        regenBoost:null
    },
    1: {
        req: 100,
        hpBoost:.5,
        dmgBoost:1,
        regenBoost:0.1
    },
    2: {
        req: 250,
        hpBoost:1,
        dmgBoost:1.5,
        regenBoost:0.15
    },
    3: {
        req: 350,
        hpBoost:2,
        dmgBoost:2.5,
        regenBoost:0.25
    }
}
var level = 0
var coins = 0
var health = 10
var maxHealth = 10
var damage = 1
var xp = 0
var xpMulti = 1
var regen = 0.05
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

var currentEnemyID = null
var currentEnemyLVL = null

var bodyMap = null
var stats = null

var inv = {
    fist: {
        name:'Fist',
        amt:1
    }
}

var equipped = []

var devMode = false 
const version = '2.0.0a'


const help = `Help:
    help: get some help

    stats: show your stats

    fight: initiate a fight (f)
    
    attack: attack your enemy (a)
    
    run: run away from a fight (one time per fight) (r)
    
    inv: open your inventory
        page: 1, 2
    
    equip: use/put on a item in your inventory

    unequip: put away a item in your inventory
    
    sell: sell any item in your inventory

    shop: open the shop

    buy: buy an item

    craft: craft an item

    recipes: check out the recipes for crafting
    
    listItems: list every item in the game
    
    inspect: inspect any item in the game
    
    save: saves your game
`
function removeFirst(arr, target) {
    var idx = arr.indexOf(target);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
    return arr;
}

function death() {
    health = maxHealth
    hasRun = false
    currentEnemy.health = currentEnemy.baseHealth
    currentEnemy = null
    currentEnemyName = null
    coins = coins / 2
    document.querySelector(`.enemy`).style.visibility = 'hidden'
}

function unequip(item) {
    if (equipped.includes(item.name)) {
        if (item.slots.includes('mainHand')) {
            equip(items.fist)
        }
        if (item.slots.includes('offHand')) {
            if (items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                maxHealth = maxHealth - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentOffhand)

            }
            if (items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                damage = damage - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentOffhand)
            }
            if (items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostType1 == 'xp') {
                xpMulti = xpMulti - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentOffhand)
            }
            if (items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostType1 == 'regen') {
                regen = regen - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentOffhand)
            }
            document.querySelector(`#${currentOffhand.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
            currentOffhand = null
        }
        if (item.slots.includes('head')) {
            if (items[currentHead.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                maxHealth = maxHealth - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentHead)

            }
            if (items[currentHead.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                damage = damage - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentHead)
            }
            if (items[currentHead.toLowerCase().replaceAll(' ', '_')].boostType1 == 'xp') {
                xpMulti = xpMulti - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentHead)
            }
            if (items[currentHead.toLowerCase().replaceAll(' ', '_')].boostType1 == 'regen') {
                regen = regen - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentHead)
            }
            document.querySelector(`#${currentHead.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
            currentHead = null
        }
        if (item.slots.includes('chest')) {
            if (items[currentChest.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                maxHealth = maxHealth - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentChest)

            }
            if (items[currentChest.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                damage = damage - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentChest)
            }
            if (items[currentChest.toLowerCase().replaceAll(' ', '_')].boostType1 == 'xp') {
                xpMulti = xpMulti - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentChest)
            }
            if (items[currentChest.toLowerCase().replaceAll(' ', '_')].boostType1 == 'regen') {
                regen = regen - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentChest)
            }
            document.querySelector(`#${currentChest.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
            currentChest = null
        }
        if (item.slots.includes('legs')) {
            if (items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                maxHealth = maxHealth - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentLegs)

            }
            if (items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                damage = damage - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentLegs)
            }
            if (items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostType1 == 'xp') {
                xpMulti = xpMulti - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentLegs)
            }
            if (items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostType1 == 'regen') {
                regen = regen - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentLegs)
            }
            document.querySelector(`#${currentLegs.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
            currentLegs = null
        }
        if (item.slots.includes('boots')) {
            if (items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                maxHealth = maxHealth - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentBoots)

            }
            if (items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                damage = damage - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentBoots)
            }
            if (items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostType1 == 'xp') {
                xpMulti = xpMulti - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentBoots)
            }
            if (items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostType1 == 'regen') {
                regen = regen - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentBoots)
            }
            document.querySelector(`#${currentBoots.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
            currentBoots = null
        }
        update()
        return `Unequipped`
    }
    return `You don't have that item equipped`
}

function equip(item) {
    if (item == undefined || item == null) {
        console.log(null)
    }
    if ((item.name).toLowerCase().replaceAll(' ', '_') in inv) {
        function addBoosts(type) {
            if (type == 'mainHand' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentWeapon)) {
                        maxHealth = maxHealth - items[currentWeapon.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentWeapon)
                        document.querySelector(`#${currentWeapon.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                    }
                    equipped.push(item.name)
                    currentWeapon = item.name
                    document.querySelector(`#${currentWeapon.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentWeapon)) {
                        damage = damage - items[currentWeapon.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentWeapon)
                        document.querySelector(`#${currentWeapon.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        damage = damage + item.boostNum1
                    }
                    equipped.push(item.name)
                    currentWeapon = item.name
                    document.querySelector(`#${currentWeapon.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'xp') {
                    console.log('xp')
                    if (equipped.includes(currentWeapon)) {
                        xpMulti = xpMulti - items[currentWeapon.toLowerCase().replaceAll(' ', '_')].boostNum1
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentWeapon)
                        document.querySelector(`#${currentWeapon.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentWeapon)
                    }
                    equipped.push(item.name)
                    currentWeapon = item.name
                    document.querySelector(`#${currentWeapon.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'regen') {
                    console.log('regen')
                    if (equipped.includes(currentWeapon)) {
                        regen = regen - items[currentWeapon.toLowerCase().replaceAll(' ', '_')].boostNum1
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentWeapon)
                        document.querySelector(`#${currentWeapon.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentWeapon)
                    }
                    equipped.push(item.name)
                    currentWeapon = item.name
                    document.querySelector(`#${currentWeapon.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
            }
            if (type == 'offHand' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentOffhand)) {
                        maxHealth = maxHealth - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                        document.querySelector(`#${currentOffhand.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                    }
                    equipped.push(item.name)
                    currentOffhand = item.name
                    document.querySelector(`#${currentOffhand.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentOffhand)) {
                        damage = damage - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                        document.querySelector(`#${currentOffhand.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                    }
                    equipped.push(item.name)
                    currentOffhand = item.name
                    document.querySelector(`#${currentOffhand.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'xp') {
                    console.log('xp')
                    if (equipped.includes(currentOffhand)) {
                        xpMulti = xpMulti - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                        document.querySelector(`#${currentOffhand.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                    }
                    equipped.push(item.name)
                    currentOffhand = item.name
                    document.querySelector(`#${currentOffhand.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'regen') {
                    console.log('regen')
                    if (equipped.includes(currentOffhand)) {
                        regen = regen - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                        document.querySelector(`#${currentOffhand.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                    }
                    equipped.push(item.name)
                    currentOffhand = item.name
                    document.querySelector(`#${currentOffhand.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
            }
            if (type == 'head' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentHead)) {
                        maxHealth = maxHealth - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentHead)
                        document.querySelector(`#${currentHead.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentHead)
                    }
                    equipped.push(item.name)
                    currentHead = item.name
                    document.querySelector(`#${currentHead.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentHead)) {
                        damage = damage - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentHead)
                        document.querySelector(`#${currentHead.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentHead)
                    }
                    equipped.push(item.name)
                    currentHead = item.name
                    document.querySelector(`#${currentHead.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'xp') {
                    console.log('xp')
                    if (equipped.includes(currentHead)) {
                        xpMulti = xpMulti - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentHead)
                        document.querySelector(`#${currentHead.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentHead)
                    }
                    equipped.push(item.name)
                    currentHead = item.name
                    document.querySelector(`#${currentHead.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'regen') {
                    console.log('regen')
                    if (equipped.includes(currentHead)) {
                        regen = regen - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentHead)
                        document.querySelector(`#${currentHead.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentHead)
                    }
                    equipped.push(item.name)
                    currentHead = item.name
                    document.querySelector(`#${currentHead.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
            }
            if (type == 'chest' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentChest)) {
                        maxHealth = maxHealth - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentChest)
                        document.querySelector(`#${currentChest.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentChest)
                    }
                    equipped.push(item.name)
                    currentChest = item.name
                    document.querySelector(`#${currentChest.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentChest)) {
                        damage = damage - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentChest)
                        document.querySelector(`#${currentChest.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentChest)
                    }
                    equipped.push(item.name)
                    currentChest = item.name
                    document.querySelector(`#${currentChest.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'xp') {
                    console.log('xp')
                    if (equipped.includes(currentChest)) {
                        xpMulti = xpMulti - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentChest)
                        document.querySelector(`#${currentChest.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentChest)
                    }
                    equipped.push(item.name)
                    currentChest = item.name
                    document.querySelector(`#${currentChest.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'regen') {
                    console.log('regen')
                    if (equipped.includes(currentChest)) {
                        regen = regen - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentChest)
                        document.querySelector(`#${currentChest.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentChest)
                    }
                    equipped.push(item.name)
                    currentChest = item.name
                    document.querySelector(`#${currentChest.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
            }
            if (type == 'legs' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentLegs)) {
                        maxHealth = maxHealth - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentLegs)
                        document.querySelector(`#${currentLegs.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentLegs)
                    }
                    equipped.push(item.name)
                    currentLegs = item.name
                    document.querySelector(`#${currentLegs.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentLegs)) {
                        damage = damage - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentLegs)
                        document.querySelector(`#${currentLegs.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentLegs)
                    }
                    equipped.push(item.name)
                    currentLegs = item.name
                    document.querySelector(`#${currentLegs.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'xp') {
                    console.log('xp')
                    if (equipped.includes(currentLegs)) {
                        xpMulti = xpMulti - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentLegs)
                        document.querySelector(`#${currentLegs.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentLegs)
                    }
                    equipped.push(item.name)
                    currentLegs = item.name
                    document.querySelector(`#${currentLegs.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'regen') {
                    console.log('regen')
                    if (equipped.includes(currentLegs)) {
                        regen = regen - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentLegs)
                        document.querySelector(`#${currentLegs.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentLegs)
                    }
                    equipped.push(item.name)
                    currentLegs = item.name
                    document.querySelector(`#${currentLegs.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
            }
            if (type == 'boots' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentBoots)) {
                        maxHealth = maxHealth - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentBoots)
                        document.querySelector(`#${currentBoots.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentBoots)
                    }
                    equipped.push(item.name)
                    currentBoots = item.name
                    document.querySelector(`#${currentBoots.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentBoots)) {
                        damage = damage - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentBoots)
                        document.querySelector(`#${currentBoots.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentBoots)
                    }
                    equipped.push(item.name)
                    currentBoots = item.name
                    document.querySelector(`#${currentBoots.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'xp') {
                    console.log('xp')
                    if (equipped.includes(currentBoots)) {
                        xpMulti = xpMulti - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentBoots)
                        document.querySelector(`#${currentBoots.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        xpMulti = xpMulti + item.boostNum1
                        removeFirst(equipped, currentBoots)
                    }
                    equipped.push(item.name)
                    currentBoots = item.name
                    document.querySelector(`#${currentBoots.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
                if (item.boostType1 === 'regen') {
                    console.log('regen')
                    if (equipped.includes(currentBoots)) {
                        regen = regen - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentBoots)
                        document.querySelector(`#${currentBoots.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equip'
                    }
                    else {
                        regen = regen + item.boostNum1
                        removeFirst(equipped, currentBoots)
                    }
                    equipped.push(item.name)
                    currentBoots = item.name
                    document.querySelector(`#${currentBoots.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
                }
            }
        }
        if ((item.slots).includes('mainHand')) {
            addBoosts('mainHand')
        }
        if ((item.slots).includes('offHand')) {
            addBoosts('offHand')
        }
        if ((item.slots).includes('head')) {
            addBoosts('head')
        }
        if ((item.slots).includes('chest')) {
            addBoosts('chest')
        }
        if ((item.slots).includes('legs')) {
            addBoosts('legs')
        }
        if ((item.slots).includes('boots')) {
            addBoosts('boots')
        }
    }
}

function fight(id, enlevel) {
    if (enlevel <= level) {
        var enemy = enemys[id]['lvl' + enlevel.toString()]
        var enemyName = enemys[id].name
        document.querySelector(`.enemy`).style.visibility = 'visible'
        document.querySelector(`.enemy #name`).innerHTML = `${enemyName} level ${enlevel}`
        document.querySelector(`.enemy #health #num`).innerHTML = enemy.health.toFixed(2)
        document.querySelector(`.enemy #health #maxnum`).innerHTML = enemy.maxHealth.toFixed(2)
        document.querySelector(`.enemy #damage #num`).innerHTML = enemy.damage.toFixed(2)
        document.querySelector(`.fight #output`).innerHTML = ''
    }
    else {
        document.querySelector(`.fight #output`).innerHTML = `Your Level isn't high enough`
    }
    if (enlevel !== undefined && enemys[id]['lvl' + enlevel.toString()] == undefined) {
        document.querySelector(`.fight #output`).innerHTML = `That level dosen't exist!`
    }

    currentEnemy = enemy
    currentEnemyName = enemyName
}

function attack() {
    if (currentEnemy === null) return `Cant attack until you initiate a fight with the fight] command`
    currentEnemy.health = currentEnemy.health - damage
    health = health - currentEnemy.damage
    document.querySelector(`.enemy #health #num`).innerHTML = currentEnemy.health.toFixed(2)

    if (currentEnemy.health <= 0 && currentEnemy !== null) {
        currentEnemy.health = currentEnemy.baseHealth
        document.querySelector(`.enemy`).style.visibility = 'hidden'
        document.querySelector(`.drops`).style.visibility = 'visible'
        if (currentEnemy.alwaysDrop !== undefined) {
            var alwaysLength = Math.floor(Math.random() * currentEnemy.alwaysDrop.length)
            var addedAlways = currentEnemy.alwaysDrop[alwaysLength]
            var alwaysAmt = currentEnemy.alwaysAmt
            if (addedAlways in inv == false) {
                inv = {
                    ...inv,
                    [addedAlways]: {
                        'name': addedAlways,
                        'amt': 0
                    }
                }
                inv[addedAlways].amt = inv[addedAlways].amt + alwaysAmt
            }
        }
        var coinsLength = Math.floor(Math.random() * currentEnemy.coinDrop.length)
        var itemLength = Math.floor(Math.random() * currentEnemy.itemDrop.length)
        var xpLength = Math.floor(Math.random() * currentEnemy.xpDrop.length)
        var addedCoins = currentEnemy.coinDrop[coinsLength]
        var addedWeapons = currentEnemy.itemDrop[itemLength]
        var addedXP = currentEnemy.xpDrop[xpLength]
        if (addedWeapons !== null) {
            var lowAddedWeapons = addedWeapons.toLowerCase().replaceAll(' ', '_')
            if (lowAddedWeapons in inv == false) {
                inv = {
                    ...inv,
                    [lowAddedWeapons]: {
                        'name': lowAddedWeapons,
                        'amt': 0
                    }
                }
            }
            inv[lowAddedWeapons].amt = inv[lowAddedWeapons].amt + 1
        }
        coins = coins + addedCoins
        xp = xp + (addedXP * xpMulti)
        currentEnemy = null
        currentEnemyName = null
        hasRun = false
        document.querySelector(`.drops #coins #num`).innerHTML = addedCoins
        document.querySelector(`.drops #xp #num`).innerHTML = addedXP
        document.querySelector(`.drops #xp #multi`).innerHTML = xpMulti
        document.querySelector(`.stats #xp #num`).innerHTML = xp.toFixed(2)
        if (addedWeapons !== null) document.querySelector(`.drops #items #name`).innerHTML = addedWeapons
        else document.querySelector(`.drops #items #name`).innerHTML = 'None'
        setTimeout(function(){
            document.querySelector(`.drops`).style.visibility = 'hidden';
        },5000);
    } 
    update()
    document.querySelector(`.stats #health #num`).innerHTML = health.toFixed(2)

    if (currentEnemy === null) return `You've died`
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
            maxHealth = maxHealth - levels[level - 1].hpBoost
            maxHealth = maxHealth + levels[level].hpBoost
            damage = damage - levels[level - 1].dmgBoost
            damage = damage + levels[level].dmgBoost
            regen = regen - levels[level - 1].regenBoost
            regen = regen + levels[level].regenBoost
        }
    }
}

function updateFight() {
    if (document.querySelector(`.fight #enemy`).value === 'goblin') {
        document.querySelector(`.fight #level`).innerHTML = 
        `<option value="0">Level 0</option>
        <option value="1">Level 1</option>`
    }
    if (document.querySelector(`.fight #enemy`).value === 'skeleton') {
        document.querySelector(`.fight #level`).innerHTML = 
        `<option value="0">Level 0</option>`
    }
}

function update() {
    levelUp();
    if (health <= 0) {
        death()
    }
    if (currentWeapon == null) {
        equip(items['fist'])
    }
    if (health > maxHealth) {
        health = maxHealth
    }
    function stat(id, num, idvar) {
        document.querySelector(`.stats #${id} #${num}`).innerHTML = idvar.toFixed(2)
    }
    function item(id) {
        document.querySelector(`#${id} #name #text`).innerHTML = items[id].name
        document.querySelector(`#${id} #boost #text`).innerHTML = items[id].desc
        if (currentWeapon !== null) document.querySelector(`#${currentWeapon.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
        if (currentOffhand !== null) document.querySelector(`#${currentOffhand.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
        if (currentHead !== null) document.querySelector(`#${currentHead.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
        if (currentChest !== null) document.querySelector(`#${currentChest.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
        if (currentLegs !== null) document.querySelector(`#${currentLegs.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
        if (currentBoots !== null) document.querySelector(`#${currentBoots.toLowerCase().replaceAll(' ', '_')} #equip #text`).innerHTML = 'Equipped'
        $(`#${id} #equip`).click(function(){
            equip(items[id]);
        });
        var img = new Image()
        img.src = `/images/items/${id}.png`
        if (img.onload) {
            document.querySelector(`#${id} #image`).src = `/images/items/${id}.png`
        }
        else {
            img.src =`/images/placeholder.png`
            document.querySelector(`#${id} #image`).src = `/images/placeholder.png`
        }
        if (inv[id] !== undefined){
            document.querySelector(`#${id} #amt #text`).innerHTML = inv[id].amt
        }
        else {
            document.querySelector(`#${id} #amt #text`).innerHTML = 0
        }
    }

    // stats
    stat('health', 'num', health)
    stat('health', 'maxnum', maxHealth)

    stat('damage', 'num', damage)

    stat('coins', 'num', coins)

    stat('level', 'num', level)

    stat('xp', 'num', xp)
    stat('xp', 'maxnum', xpToNext)
    // items
    item('fist')
    item('dagger')
    item('sword')
    item('slime_sword')

    item('small_shield')
    item('shield')
    item('xp_shield')

    item('leather_helmet')
    item('iron_helmet')

    item('leather_chestplate')

    item('leather_leggings')

    item('leather_boots')

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
        equipped: equipped,
        regen: regen,
        xpMulti: xpMulti
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
    if (typeof savedGame.equipped !== 'undefined') equipped = savedGame.equipped
    if (typeof savedGame.regen !== 'undefined') regen = savedGame.regen
    if (typeof savedGame.xpMulti !== 'undefined') xpMulti = savedGame.xpMulti
    // if (typeof savedGame.a !== 'undefined') a = savedGame.a
    
}

window.onload = function() {
    document.querySelector('#version').innerHTML = `v${version}`
    document.getElementById("start").click();
    load();
    update();
    updateFight();
}

window.setInterval(function(){
    // call your function here
    if (currentEnemy === null) health = health + regen
    if (health > maxHealth) {
        health = maxHealth
    }
    update()
}, 1000);  // Change Interval here to test. For eg: 5000 for 5 sec

window.setInterval(function(){
    // call your function here
    save()
}, 10000);  // Change Interval here to test. For eg: 5000 for 5 sec

function changePage(evt, page) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("page");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("pagelinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(page).style.display = "block";
    evt.currentTarget.className += " active";
  }

function give(item) {
    if (items[item] !== undefined) {
        inv = {
            ...inv,
            [item]: {
                name: items[item].name,
                amt: 1
            }
        }
    }
}