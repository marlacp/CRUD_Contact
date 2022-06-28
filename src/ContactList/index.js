import React from 'react';
import './ContactList.css';

function ContactList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { ContactList };