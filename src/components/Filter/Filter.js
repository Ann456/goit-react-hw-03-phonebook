import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({filter, input}) => {
    return (
        <form className={s.form}>
            <label className={s.label}>Find contact by name:</label>
            <input
                className={s.input}
                type="text"
                value={filter.trim()}
                onChange={input}
            />
        </form>
    );  
};

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string,
    input: PropTypes.func,
};