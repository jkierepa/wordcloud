import reducer, { setUser, clearUser, initialState} from './userSlice'

const testState = { name: 'TEST', id: new Date().getTime() }

describe("userSlice", () => {
    describe("initial state", () => {
        test('should return initial state', () => {
            expect(reducer(undefined, { type: {}})).toStrictEqual(initialState)
        })

        test('should return initial specified state', () => {
            expect(reducer(undefined, {type: {}})).toStrictEqual({name: '', id: 0})
        })
    })

    describe("setUser", () => {
        test('should not change state', () => {
            expect(reducer(initialState, setUser(""))).toStrictEqual(initialState)
        })

        test('should set user name', () => {
            expect(reducer(initialState, setUser("TEST"))).toEqual({ name: 'TEST', id: new Date().getTime() })
        })

        test('should not reset name', () => {
            expect(reducer(testState, setUser(""))).toStrictEqual(testState)
        })
    })

    describe("clearUser", () => {
        test('should reset to inital state', () => {
            expect(reducer(testState, clearUser())).toStrictEqual(initialState)
        })

        test('should work on initial state', () => {
            expect(reducer(initialState, clearUser())).toStrictEqual(initialState)
        })
    })
})
