import styles from '../components/Sidebar.module.css'

export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
                <strong>Richard Lima</strong>
                <span>Web developer</span>
            </div>
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    )
}