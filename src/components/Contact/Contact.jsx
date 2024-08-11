import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <div className={s.element}>
          <span className={s.icon}>
            <BsFillPersonFill size={30} color="black" />
          </span>
          <p className={s.text}>{name}</p>
        </div>
        <div className={s.element}>
          <span className={s.icon}>
            <BsFillTelephoneFill size={30} color="black" />
          </span>
          <p className={s.text}>{number}</p>
        </div>
      </div>

      <button className={s.btn} onClick={handleDelete} type="submit">
        Delete
      </button>
    </>
  );
};