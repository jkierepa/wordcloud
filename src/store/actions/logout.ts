import { setScore } from "@store/slices/score/scoreSlice"
import { clearUser } from "@store/slices/user/userSlice"
import { store } from "@store/store"

const logout = (): void => {
    store.dispatch(clearUser())
    store.dispatch(setScore(0))
}

export default logout

