import React, { ReactElement } from 'react'

interface Props {
    onClose : () => ({})
}

function ModalBottom({onClose}: Props): ReactElement {
    return (
        <div>
             <button onClick={onClose}>Continue</button>
            <button onClick={onClose}>Buy</button>
        </div>
    )
}

export default ModalBottom
