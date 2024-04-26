import PropTypes from 'prop-types'
import './Button.css'

const Button = (props) => {
    const { text, type, clickHandler } = props
    return (
        <button className={type} onClick={() => clickHandler(text)}>
            <span>{ text }</span>
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
}

export default Button