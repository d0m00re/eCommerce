import React, { ReactElement, useState, useEffect } from 'react'

interface Props {
    show : boolean    
}

function Modal({show}: Props): ReactElement {

    const showModalOrNot = () => {
        return (show) ? <p>show modal</p> : <></>;
    }

    return (showModalOrNot())
}

export default Modal
