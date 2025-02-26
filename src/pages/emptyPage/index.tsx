import { FC } from "react";
import styles from './index.module.scss'
import noEmpty from '../../../public/404.png'

export const EmptyPage = () => {
    return(
        <div className={styles.layout}>
            <div>Несуществующая страница, перейдите на другую, выбрав в левом боковом меню</div>
            <img src={noEmpty} alt="no find"/>
        </div>
    )
}