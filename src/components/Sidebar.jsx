import styles from '../components/Sidebar.module.css'

import {PencilLine} from "phosphor-react"

export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/limarich.png" />

                <strong>Richard Lima</strong>
                <span>Web developer</span>
            </div>
            <footer> 
                <a href="#">
                <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}