import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import s from "./ContactList.module.css";

const getVisibleContacts = (contacts, statusFilter) => {
  return contacts.filter((contact) => {
    if (typeof contact.name === "string") {
      return contact.name.toLowerCase().includes(statusFilter.toLowerCase());
    }
    return false;
  });
};

function ContactList() {
  const contacts = useSelector(selectContacts);
  const statusFilter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <ul className={s.lists}>
      {visibleContacts.map((item) => {
        return (
          <li className={s.item} key={item.id}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;