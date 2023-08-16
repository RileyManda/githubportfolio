
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchField = ({ setSearchKeyword }) => {


    const handleInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    return (
        <div>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleInputChange}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    );
};

SearchField.propTypes = {
    setSearchKeyword: PropTypes.func.isRequired,
};

export default SearchField;