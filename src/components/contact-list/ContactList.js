import propTypes from 'prop-types';
import css from './contact-list.module.css'

const ContactList = ({ contacts, onDelete }) => (
    <ul className={css.list_contact}>
        {contacts.map(contact => (
          <li className={css.listItem_contact}  key={contact.id}>
            {contact.name}: {contact.number}
            <button className={css.bttn_contactList} type='button' onClick={()=>onDelete(contact.id)}>Delete</button>
           </li>  ))}
    </ul>
)
    

ContactList.propTypes = {
  contact: propTypes.shape(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  deleteContact: propTypes.func,
};


export default ContactList;