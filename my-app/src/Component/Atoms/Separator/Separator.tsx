import React, { ReactElement } from 'react'

interface Props {
    dim : {w : number, h : number},
    backgroundColor : string
}

function Separator({dim, backgroundColor}: Props): ReactElement {
    return (
        <div style={{width : `${dim.w}px`, height : `${dim.h}px`, backgroundColor : backgroundColor}} />
    )
}

export default Separator
 