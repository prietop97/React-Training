import React from "react"
import styled from "styled-components"

export const CardContainer = styled.div`
    border: 4px #333 solid;
    margin: 2rem;
    width: 30%;
    border-radius: 5%;
`

export const CardName = styled.h2`
    color: black;
`

export const CardInfo = styled.p`
    color: black;
    font-size: 1.5rem;
`
export const CardsBigContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;   
`
