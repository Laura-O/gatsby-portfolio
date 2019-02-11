import styled from 'styled-components'

export const Divider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    font-size: 3em;
    margin: 0 3em;

    &:before {
        content: '';
        height: .125em;
        background: black;
        flex: 1;
        margin: 0 .25em 0 0;
    }

    &:after {
        content: '';
        height: .125em;
        background: black;
        flex: 1;
        margin: 0 0 0 .25em;
    }

    @media (max-width: 768px){
        margin: 0 1em;
    }

    @media (min-width: 768) and (max-width: 1200px){
        margin: 0 2em;
    }
`


export const bla = styled.div`
    color: blue;
`
