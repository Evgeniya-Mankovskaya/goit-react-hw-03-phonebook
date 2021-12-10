import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactItem = ({ name, number, onClick }) => (
  <li className={s.item}>
    <p className={s.contact}>
      {name}: {number}
    </p>
    <button className={s.button} type="button" onClick={onClick}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactItem;
