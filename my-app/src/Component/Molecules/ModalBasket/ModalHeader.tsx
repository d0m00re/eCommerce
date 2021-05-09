import React, { ReactElement } from 'react'
import styled from "styled-components";

import { StyledModalTitle } from './../../../Style/general';

import Button from './../../Atoms/Button/Button';

interface Props {
    onClose: () => ({})
}

let StyledFlexRow = styled.div`
    display : flex;
    justify-content : space-between;
`;

let StyledTitleModal = styled.h2` 
    color : orange;
`;

function ModalHeader({ onClose }: Props): ReactElement {
    return (
        <StyledModalTitle>
            <StyledFlexRow>
                <StyledTitleModal>Your Products:</StyledTitleModal>
                <Button onClick={onClose} sizeElem='small' form='circle'>
                    <div style={{width : '20px', height : '20px'}}>
                    X
                    </div>
                </Button>
            </StyledFlexRow>

        </StyledModalTitle>
    )
}

export default ModalHeader;
