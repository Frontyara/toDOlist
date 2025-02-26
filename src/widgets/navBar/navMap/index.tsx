import { FC } from "react";
import { iNavLinks } from "../navLinks-data";
import { NavLink } from "react-router-dom";

import styles from './index.module.scss'

export const NavMap: FC<iNavLinks> = ({to, title, icon}) => {
    return(
        <NavLink className={styles.link} to={to}><img src={icon} alt="icon" className={styles.icon}/>{title}</NavLink>
    )
}