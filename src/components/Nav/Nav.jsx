import styles from './Nav.module.css';

function Nav() {
    return (
        <nav className={styles.Nav}>
            <a>Profile</a>
            <a>Messages</a>
            <a>Users</a>
        </nav>
    )
}

export default Nav;