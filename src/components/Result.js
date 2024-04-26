import PropTypes from 'prop-types'

const Result = (props) => {
    const { value } = props
    return (
        <div className="result">
            {value}
        </div>
    )
}

Result.propTypes = { value: PropTypes.string.isRequired }
Result.defaultProps = { value: "0" }

export default Result