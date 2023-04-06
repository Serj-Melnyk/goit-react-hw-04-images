import PropTypes from "prop-types"
import { ButtonMore, ButtonCentre } from "./ButtonStyled"

export const Button = ({ onClick }) => {
    return (


        <ButtonCentre>
            <ButtonMore onClick={onClick}>Load more</ButtonMore>
        </ButtonCentre>

       
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}