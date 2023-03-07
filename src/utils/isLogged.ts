import Cookies from 'js-cookie'
import { TWITTER_CLONE_USER } from './constants'

export default function isLogged(): boolean {
    const token = Cookies.get(TWITTER_CLONE_USER)
    if (!token) {
        return false
    }
    return true
}
