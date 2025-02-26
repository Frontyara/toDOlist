import { FC } from "react";
import { NavMap } from "./navMap";
import styles from './index.module.scss'

import { iNavLinks } from "./navLinks-data";

interface iItemsLinks {
    itemsLinks: iNavLinks[]
}

export const Navigation: FC<iItemsLinks> = (props) => {
    return(
        <div className={styles.container}>
            {props.itemsLinks.map(item => {
                return <NavMap to={item.to} title={item.title} icon={item.icon}/>
            })}
        </div>
    )
}