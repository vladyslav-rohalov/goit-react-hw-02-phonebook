export default function ContactList({ contacts, filter, onDeleteContact }) {
  const normalizedFilter = filter.toLowerCase();
  const filtredPhonebook = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    contacts.length > 0 && (
      <ul>
        {filtredPhonebook.map(item => {
          return (
            <li key={item.id}>
              <p>
                {item.name}: {item.number}
              </p>
              <button type="button" onClick={() => onDeleteContact(item.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
}
