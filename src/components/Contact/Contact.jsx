import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDelete }) {
    return (
        <div className={css.container}>
          <div className={css.info_container}>
        <span className={css.contact_line}><FaUser />
          <p>{name}</p></span>
        <span className={css.contact_line}><FaPhoneAlt />
        <p>{number}</p></span>
      </div>
      <button className={css.deleteCntBtn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
    );
}