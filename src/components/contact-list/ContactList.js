import propTypes from 'prop-types';


const ContactList = ({ contacts, onDelete }) => (
    <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type='button' onClick={()=>onDelete(contact.id)}>Delete</button>
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