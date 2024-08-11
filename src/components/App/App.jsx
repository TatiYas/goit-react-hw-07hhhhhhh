import s from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";


function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <b>Ooops ... something went wrong!</b>}
      {loading && <Loader />}
      <ContactList />
    </div>
  );
}
export default App;