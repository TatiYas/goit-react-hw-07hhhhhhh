import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import s from "./ContactList.module.css";


function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.lists}>
      {contacts.map((contact) => {
        return (
          <li className={s.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;