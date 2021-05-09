import React, { ReactElement } from 'react'
import styled from "styled-components";

const StyledModalTitle = styled.h4`
    color : orange;
`;

interface Props {
    onClose : () => ({})
}

function ModalHeader({onClose}: Props): ReactElement {
    return (
        <StyledModalTitle>
            Your product
            <button onClick={onClose}>CROSS</button>
        </StyledModalTitle>
    )
}

export default ModalHeader
