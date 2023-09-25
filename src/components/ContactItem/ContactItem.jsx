import PropTypes from 'prop-types';
import { useDeleteContactByIdMutation } from 'store/contacts.service';
import css from './ContactItem.module.css';

function ContactItem({ id, name, number }) {
  const [deleteContactById, { isLoading }] = useDeleteContactByIdMutation();

  return (
    <li key={id} className={css.item}>
      <span className={css.name}>
        {name}: {number}
      </span>
      <button
        className={css.btn}
        type="button"
        onClick={() => deleteContactById(id)}
        disabled={isLoading}
      >
        Delete{isLoading && <span>...</span>}
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
