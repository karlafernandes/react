import React, {Component} from "react";

class ListContacts extends Component {
    render() {
        let contacts = this.props.contacts;
        return(
            <ol className="contact-list">
                {contacts.map((contact) => (
                    <li key={contact.id} className="contact-list-item">
                        <div className="contact-avatar" style={{ backgroundImage: `url(${contact.avatarURL})` }}/>
                        <div className="contact-details">
                            <h1>{contact.name}</h1>
                            <p>{contact.email}</p>
                            {contact.avatarURL}
                        </div>
                        <button className="contact-remove">Remove</button>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListContacts;