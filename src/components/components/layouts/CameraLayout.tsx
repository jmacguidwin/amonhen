import React, { ReactNode } from 'react'
import styled from '@emotion/styled';

type Props = {
    children: ReactNode
}

const CameraLayout = (props: Props) => {
    return (
        <Background>
            <Foreground>
                {props.children}    
            </Foreground>
        </Background>
    )
}
export default CameraLayout

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #eee;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
const Foreground = styled.div`
    width: 380px;
    height: 600px;
    background-color: #eee;
    overflow: hidden;
`
