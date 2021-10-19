import { alligator } from "../models/alligator.js"
import { bengalTiger } from "../models/bengalTiger.js"
import { chupacabra } from "../models/chupacabra.js"
import { dragon } from "../models/dragon.js"
import { earwig } from "../models/earwig.js"
import { fox } from "../models/fox.js"
import { gharial } from "../models/gharial.js"
import { hamster } from "../models/hamster.js"
import { icelandicYeti } from "../models/icelandicYeti.js"
import { jaguar } from "../models/jaguar.js"
import { kangaroo } from "../models/kangaroo.js"
import { lion } from "../models/lion.js"
import { manEater } from "../models/manEater.js"
import { lochness } from "../models/lochness.js"
import { Oobleck } from "../models/oobleck.js"

export class ZooController {
    constructor() {
        console.log('test-successful')
        _draw()
    }
    testZoo() {
        console.log('test')
    }
}

let _animalEnclosures = {
    aloysius: new alligator('aloysius', 'alligator', 'humans', 15),
    benny: new bengalTiger('benny', 'bengalTiger', 'humans', 8),
    chuey: new chupacabra('chuey', 'chupacabra', 'humans', 4),
    daniel: new dragon('daniel', 'dragon', 'humans', 300),
    ernie: new earwig('ernie', 'earwig', 'ears', 0.1),
    eloise: new earwig('eloise', 'earwig', 'ernie', 0.2),
    fanny: new fox('fanny', 'fox', 'bunnies', 2),
    gary: new gharial('gary', 'gharial', 'humans', 6),
    hammin: new hamster('hammin', 'hamster', 'humans', 0.75),
    irma: new icelandicYeti('irma', 'icelandicYeti', 'frozen humans', 12),
    johnny: new jaguar('johnny', 'jaguar', 'other jaguars', 5),
    killa: new kangaroo('killa', 'kangaroo', 'weaklings', 6),
    leo: new lion('leo', 'lion', 'humans', 8),
    manny: new manEater('manny', 'manEater', 'humans', 1),
    nessy: new lochness('nessy', 'lochness', 'swimmers', 250),
    orwell: new Oobleck('orwell', 'Oobleck', 'everything', 0),



}
function _draw() {
    let template = ''


    for (let key in _animalEnclosures) {
        let animal = _animalEnclosures[key]
        template += `<p class="p-2 m-5">${animal.name} the ${animal.species} eats mainly ${animal.diet}</p>`
    }
    document.getElementById('animals').innerHTML = template
}