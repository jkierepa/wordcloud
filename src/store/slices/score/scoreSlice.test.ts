import reducer, { setScore, initialState} from './scoreSlice'

const testState = { score: 10 }
const testStateZero = {score: 0}
const testSateUndefined = {score: undefined}

describe("scoreSlice", () => {
    describe("initial state", () => {
        test('should return initial state', () => {
            expect(reducer(undefined, { type: {}})).toStrictEqual(initialState)
        })

        test('should return initial specified state', () => {
            expect(reducer(undefined, {type: {}})).toStrictEqual(testSateUndefined)
        })
    })

    describe("setScore", () => {
        test('should not change state', () => {
            expect(reducer(initialState, setScore(0))).toStrictEqual(testStateZero)
        })

        test('should set score to 10', () => {
            expect(reducer(initialState, setScore(10))).toStrictEqual(testState)
        })

        test('should set score to 0', () => {
            expect(reducer(initialState, setScore(0))).toStrictEqual(testStateZero)
        })

        test('should not reset score', () => {
            expect(reducer(initialState, setScore(0))).not.toStrictEqual(testSateUndefined)
        })
    })
})
