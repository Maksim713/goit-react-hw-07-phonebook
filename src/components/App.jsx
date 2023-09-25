import Section from './Section';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

function App() {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Contacts />
      </Section>
    </div>
  );
}

export default App;
