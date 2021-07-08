import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 1.6rem;
        background-color: ${props => props.theme.color.body};
        color: ${props => props.theme.color.text};
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    header{
        background-color:${props => props.theme.color.backgroundColorElements};
    }
    header button {
        color: ${props => props.theme.color.text};
    }
    header button::after{
        content: "${props => props.theme.name}";
    }
    .country__information{
        background-color: ${props => props.theme.color.backgroundColorElements};
    }
    input{
        background-color: ${props => props.theme.color.input};
        color: ${props => props.theme.color.text};
    }
`