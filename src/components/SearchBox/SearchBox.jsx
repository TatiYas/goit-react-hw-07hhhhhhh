import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useId } from "react";
import s from "./SearchBox.module.css";

function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const onFilter = (e) => dispatch(changeFilter(e.target.value));
  return (
    <div className={s.box}>
      <label className={s.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        id={searchId}
        type="text"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}
export default SearchBox;