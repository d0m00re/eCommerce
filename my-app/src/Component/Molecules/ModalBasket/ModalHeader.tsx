import React, { ReactElement } from 'react'
import styled from "styled-components";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {StyledModalTitle} from './../../../Style/general';

import Button from './../../Atoms/Button/Button';

interface Props {
    onClose : () => ({})
}

function ModalHeader({onClose}: Props): ReactElement {
    return (
        <StyledModalTitle>
            Your product
            <Button onClick={onClose}>
                <FontAwesomeIcon icon={faHome} />
            </Button>
        </StyledModalTitle>
    )
}

export default ModalHeader;
