import React, { ReactElement, useState, useEffect } from 'react';
import * as TroisDForm from './../../../Data/asset/index';
import styled from 'styled-components';
import { StyledFlexRow } from '../../../Style/ThemeV2';

interface PropsDonnut {
    x : string,
    y : string,
    bottom : string,
    right : string,

}

interface Props {
    x : number,
    y : number,
    bottom : number;
    right : number;
    scalePosX : (pos : number) => number;
    scalePosY : (pos : number) => number;
    imgPath ?: 'donut' | 'buble'
}

const StyledDonut = styled.img<PropsDonnut> ` 
    position : absolute;
    left :auto;
    bottom : ${props => props.bottom};
    right : ${props => props.right};
    z-index : 10;
    max-width : 228px;
    right : 22%;
    transform: translate3d(${props => props.x}, ${props => props.y}, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
`;
//    transform: translate3d(-14.2435px, -25px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
//    transform: translate3d(${props => (true) ? `${props.x}px, -25px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)`) : ('');



function Animation({x, y,
                    bottom, right,
                    scalePosX,
                    scalePosY, imgPath = 'donut'}: Props): ReactElement {
    return (
        <>
        <StyledDonut src={(imgPath === 'donut') ? TroisDForm.donut : TroisDForm.buble}
                x = {scalePosX(x) + 'px'} y = {scalePosY(y) + 'px'}
                bottom = {bottom + '%'} right = {right + '%'}/>
        </>
        )
}

export default Animation
