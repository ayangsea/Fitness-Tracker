import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogut'

export default function Navbar() {

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to="/"><h1>Workout Buddy</h1></Link>
                <nav>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log Out</button>
                        </div>)}
                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="signup">Sign Up</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}