import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";


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