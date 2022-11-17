import propTypes from "prop-types";

const Header = ({bgColor, color}) => {

    return(
        <header style={{ backgroundColor: bgColor, 
                         color: color}}>
            Encabe
        </header>
    )
}

// valores oir defecto para las prop suministradas
Header.defaultProps = {
    bgColor:'rgba(0,0,0,0.4)',
    color: 'ff6a95'
}

//validar las props con PropTypes
Header.propTypes = {
    bgColor: propTypes.string.isRequired,
    color: propTypes.string
}

export default Header;