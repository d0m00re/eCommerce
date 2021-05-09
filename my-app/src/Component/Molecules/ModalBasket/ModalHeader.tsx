import React, { ReactElement } from 'react'
import styled from "styled-components";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {StyledModalTitle} from './../../../Style/general';

interface Props {
    onClose : () => ({})
}

function ModalHeader({onClose}: Props): ReactElement {
    return (
        <StyledModalTitle>
            Your product
            <button onClick={onClose}>
                <FontAwesomeIcon icon={faHome} />
            </button>
        </StyledModalTitle>
    )
}

export default ModalHeader;
