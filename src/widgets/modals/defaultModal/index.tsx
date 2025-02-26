import { FC } from "react";
import { createPortal } from "react-dom";

import styles from './index.module.scss'
import { X_button } from "../../../shared/buttons/closeButtons/x-button/X-button";

interface iDefaultModal {
    title: string;
    closeModal: () => void
}

const modalID = document.getElementById('modal')

export const DefaultModal: FC<iDefaultModal> = ({title, closeModal}) => {
    if(modalID)
    return createPortal(
        <div className={styles.wrapper}>
            <X_button funcToClose={() => {closeModal()}}/>
            <div className={styles.modal}>
                <header>{title}</header>
            </div>
        </div>,
        modalID
    )
}