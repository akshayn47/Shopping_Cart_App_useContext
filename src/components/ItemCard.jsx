import React from "react";
import styles from "../styles/ItemCard.module.css";
import { itemContext } from "../itemContext";
import { useContext } from "react";
import { totalContext } from "../totalContext";

function ItemCard({ name, price }) {

  const {setItem, item} = useContext(itemContext);
 const {setTotal, total} = useContext(totalContext);
  const handleAdd = () => {
    setTotal((prevTotal)=>prevTotal+price);
    setItem((prevItem)=>prevItem+1);
  };

  const handleRemove = () => {
    if(total > 0){
    setTotal((prevTotal)=>prevTotal-price);
    }
    if(item>0){
     setItem((prevItem)=>prevItem-1);
    }
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
