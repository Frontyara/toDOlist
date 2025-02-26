import { FC } from "react";
import { NavMap } from "./navMap";
import styles from "./index.module.scss";
import indexIcon from "../../../public/indexIcon.svg";

import { iNavLinks } from "./navLinks-data";
import { NavLink } from "react-router-dom";
import { DefaultButton } from "../../shared/buttons/defaultButton";

interface iItemsLinks {
  itemsLinks: iNavLinks[];
}

export const Navigation: FC<iItemsLinks> = (props) => {
  return (
    <div className={styles.container}>
      <header>
        <NavLink to={"/"}>
          <img src={indexIcon} alt="indexIcon" />
          toDO
        </NavLink>
      </header>
      {props.itemsLinks.map((item, index) => {
        return (
          <NavMap
            to={item.to}
            key={index}
            title={item.title}
            icon={item.icon}
          />
        );
      })}
      <div className={styles.BTNsContainer}>
      <DefaultButton fontSize={30} text="+" width={45} height={45} onClick={() => {}} isDisabled={false}/>
      </div>
    </div>
  );
};
