import reducer, { fetchGameSets, fetchRandomSet, fetchSpecifiedWordSet, initialState } from './gameSlice'
import sets from '../../../../public/set.json'
import animalsSet from '../../../../public/animals.json'
import vehiclesSet from '../../../../public/vehicles.json'
import colorsSet from '../../../../public/colors.json'

const prevState = {availableGameSets: sets.set, wordSet: undefined, correctWords: []}

describe("gameSlice", () => {
    describe("initial state", () => {
        test('should return initial state', () => {
            expect(reducer(undefined, { type: {}})).toStrictEqual(initialState)
        })

        test('should return initial specified state', () => {
            expect(reducer(undefined, {type: {}})).toStrictEqual({availableGameSets: [], wordSet: undefined, correctWords: []})
        })
    })

    describe("fetchGameSets", () => {
        test('should update state with game sets', () => {
            const action = fetchGameSets.fulfilled(sets.set, "")
            expect(reducer(initialState, action)).toStrictEqual({
                availableGameSets: sets.set, wordSet: undefined, correctWords: []})
        })
    })

    describe("fetchSpecifiedWordSet", () => {
        test('should fetch animals word set', () => {
            const action = fetchSpecifiedWordSet.fulfilled(animalsSet, "", "animals")

            expect(reducer(prevState, action)).toStrictEqual({
                availableGameSets: sets.set, wordSet: animalsSet, correctWords: animalsSet.good_words})
        })

        test('should fetch vehicles word set', () => {
            const action = fetchSpecifiedWordSet.fulfilled(vehiclesSet, "", "vehicles")

            expect(reducer(prevState, action)).toStrictEqual({
                availableGameSets: sets.set, wordSet: vehiclesSet, correctWords: vehiclesSet.good_words})
        })

        test('should fetch colors word set', () => {
            const action = fetchSpecifiedWordSet.fulfilled(colorsSet, "", "colors")

            expect(reducer(prevState, action)).toStrictEqual({
                availableGameSets: sets.set, wordSet: colorsSet, correctWords: colorsSet.good_words})
        })
    })

    describe('fetchRandomSet', () => {
        test('should fetch random word set', () => {
            const action = fetchRandomSet.fulfilled(colorsSet, "")
            expect(reducer(prevState, action)).toMatchObject(
                {
                availableGameSets: expect.any(Array), 
                wordSet: expect.any(Object),
                correctWords: expect.any(Array)
            })
        })
    })
})