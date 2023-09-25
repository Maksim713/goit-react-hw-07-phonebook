import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilterValue } from 'store/phonebook.slice';
import { useGetAllContactsQuery } from 'store/contacts.service';
import InputField from 'components/InputField';
import ContactItem from 'components/ContactItem';
import css from './Contacts.module.css';

const Contacts = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const { data: contacts, error, isLoading } = useGetAllContactsQuery();
  const handleInputChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  const filteredContacts =
    contacts !== undefined
      ? contacts.filter(it => it.name.includes(filter))
      : [];

  return (
    <>
      <div className={css.input}>
        <InputField
          label="Find contacts by name"
          value={filter}
          type="text"
          name="filter"
          onChange={handleInputChange}
        />
      </div>

      <div className={css.container}>
        {isLoading && <h1>Loading...</h1>}
        {error && <h3>Error: {error}</h3>}
        {contacts && (
          <ul>
            {filteredContacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Contacts;
