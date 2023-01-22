import propTypes from 'prop-types';

const Filter =({value, onChange}) => {
 return (
      <div>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={onChange}
        />
      </div>
    );
}
  
Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};


export default Filter;
