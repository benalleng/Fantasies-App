import { login, logout } from '../firebase'
import { Link } from "react-router-dom";

function Header({ user }) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Fantasies</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            <section>
                {
                    user ?
                        <>
                            <div>Welcome, {user.displayName}</div>
                            <div onClick={logout}>Logout</div>
                        </>
                        :
                        <div onClick={login}>Login</div>

                }
            </section>

        </nav>

    );
}

export default Header;