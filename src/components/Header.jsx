import styles from './Header.module.css';
import {Calculator, Plus, ForkKnife} from '@phosphor-icons/react'


export function Header() {
    return(
        <header className={styles.header}>
            <div>
                <Calculator size={40}/>
                <Plus size={35}/>
                <ForkKnife size={40}/>        
            </div>
       
           
        </header>
    )
}