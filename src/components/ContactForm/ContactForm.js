import { Component } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component{
    state = {
        name: '',
        number: '',
    };

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value, });
    };

    render() {
        return (
            
            <form onSubmit={this.handleSubmit} className={s.form}>
                <label className={s.label} htmlFor={this.nameInputId}> Name: </label>
                    <input
                        className={s.input}
                        onChange={this.handleChange}
                        id={this.nameInputId}
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />

                <label className={s.label} htmlFor={this.numberInputId}> Number: </label>
                    <input
                        className={s.input}
                        onChange={this.handleChange}
                        id={this.numberInputId}
                        value={this.state.number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />

                <button type="submit" className={s.btn}>
                    Add contact
                </button>
            </form>
                
        )
    }
}

export default ContactForm;