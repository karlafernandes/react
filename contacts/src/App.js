import React, { Component } from "react";
import ListContacts from "./ListContacts";

const contacts = [
    {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://thefader-res.cloudinary.com/images/w_760,c_limit,f_auto,q_auto:best/cover-story-tyler-the-creator_1_xcva8t/tyler-the-creator.jpg"
    },
    {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://thefader-res.cloudinary.com/images/w_760,c_limit,f_auto,q_auto:best/cover-story-tyler-the-creator_1_xcva8t/tyler-the-creator.jpg"
    },
    {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://thefader-res.cloudinary.com/images/w_760,c_limit,f_auto,q_auto:best/cover-story-tyler-the-creator_1_xcva8t/tyler-the-creator.jpg"
    }
];

class App extends Component {
    render() {
        return (
            <div>
                <ListContacts contacts={contacts} />
            </div>
        )
    }
}

export default App;