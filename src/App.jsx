import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import PhoneList from './components/PhoneList/PhoneList';
import './styles/shared.scss';

export const App = () => {
  return (
    <div className="container">
      <h1>Phone book</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <PhoneList />
    </div>
  );
};
