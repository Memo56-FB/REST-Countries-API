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
    .preloader{
        background-color:${props => props.theme.color.body};
    }
    header{
        background-color:${props => props.theme.color.backgroundColorElements};
        box-shadow: 0 0 7px ${props => props.theme.color.shadow}
    }
    header button {
        color: ${props => props.theme.color.text};
    }
    header button::after{
        content: "${props => props.theme.name}";
    }
    .country{
        background-color: ${props => props.theme.color.backgroundColorElements};
        box-shadow: 0 0 7px ${props => props.theme.color.shadow};
    }
    .search-bar{
        background-color: ${props => props.theme.color.backgroundColorElements};
        box-shadow: 0 0 7px ${props => props.theme.color.shadow};
    }
    input{
        background-color: ${props => props.theme.color.backgroundColorElements};
        color: ${props => props.theme.color.text};
    }
    input::placeholder{
        color: ${props => props.theme.color.text};
    }
    .region-filter,.about__btn-back{
        background-color: ${props => props.theme.color.backgroundColorElements};
        color: ${props => props.theme.color.text};
        box-shadow: 0 0 7px ${props => props.theme.color.shadow};
    }
    .border{
        background-color:${props => props.theme.color.backgroundColorElements};
        box-shadow: 0 0 7px ${props => props.theme.color.shadow}
    }

    ::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    }
    ::-webkit-scrollbar-thumb{
    background:grey;
    border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
    background:#848d95 ;
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px 0px #F0F0F0;
}
`