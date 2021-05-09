import React, { ReactElement } from 'react'
import styled, {keyframes} from "styled-components";


interface Props {
    
}

/*
const move = keyframes `
	0%,100%{
		transform: translate(25px, 0);
	}

	25%, 75%{
		transform: translate(0, 0);
	}
	50%{
		transform: translate(-25px, 0);
	}
`;
*/

const rotate = keyframes ` 
	0%{
		transform:rotate(0deg) translate(500px, 0) ;
	}
	100%{
		transform:rotate(360deg) translate(500px, 0) ;
	}
`;

let Rotate = styled.div ` 
    position : absolute;
    width : 100vw;
    height : 100vh;
    z-index : 7707;
`;

let ElemRotate = styled.div ` 
    position : relative;
    animation: ${rotate} 3s linear infinite;
    width : 50px;
    height : 50px;
    background-color :'yellow';
    z-index : 7708;

`;

function ElypseRotate({}: Props): ReactElement {
    return (
        <Rotate>
            <ElemRotate />    
        </Rotate>
    )
}

export default ElypseRotate
