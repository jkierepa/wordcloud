import fetchRandomWordSet from "./fetchRandomWordSet";
import fetchSets from "./fetchSets";
import fetchWordSet from "./fetchWordSet";

import sets from '../../public/set.json'
import animalsSet from '../../public/animals.json'
import vehiclesSet from '../../public/vehicles.json'
import colorsSet from '../../public/colors.json'
import { SetObject } from "@appTypes/appTypes";


describe('api fetchSets', () => {
    test('should fetch sets', async () => {
        expect(fetchSets()).resolves.toStrictEqual(sets.set)
    })
})

describe('api fetchWordSet', () => {
    test('should fetch animal word set', async () => {
        expect(fetchWordSet('animals')).resolves.toStrictEqual(animalsSet)
    })

    test('should fetch vehicle word set', async () => {
        expect(fetchWordSet('vehicles')).resolves.toStrictEqual(vehiclesSet)
    })

    test('should fetch color word set', async () => {
        expect(fetchWordSet('colors')).resolves.toStrictEqual(colorsSet)
    })
})

describe('api fetchRandomWordSet', () => {
    test('should fetch random word set', async () => {
        const randomSet = [sets.set[Math.floor(Math.random() * sets.set.length)]]

        const setObject: SetObject = {"animals": animalsSet, "vehicles": vehiclesSet, "colors": colorsSet}
        const expectedSet = setObject[randomSet[0]]

        expect(fetchRandomWordSet(randomSet)).resolves.toStrictEqual(expectedSet)
    })
})

