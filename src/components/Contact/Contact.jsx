import React from "react";
import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.Contact}>
      <div className={s.textWrapper}>
        <div className={s.textWithIcon}>
          <FaUser className={s.icons} />
          <p className={s.text}>{name}</p>
        </div>
        <div className={s.textWithIcon}>
          <BsFillTelephoneFill className={s.icons} />
          <p className={s.text}>{number}</p>
        </div>
      </div>
      <button className={s.btn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
