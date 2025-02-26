import { FC } from "react";
import styles from "./X-button.module.scss";
import closeSVG from '../../../../../public/close-x.svg'

interface tX_button {
  funcToClose: () => void;
}

export const X_button: FC<tX_button> = ({ funcToClose }) => {
  return (
    <div
      onClick={() => {
        funcToClose();
      }}
      className={styles.container}
    >
      <div>
        <img src={closeSVG} alt="close"/>
      </div>
    </div>
  );
};
