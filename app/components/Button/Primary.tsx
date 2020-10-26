import styled from 'styled-components';

const ButtonPrimary = styled.button`
    margin: 0.5rem;
    color: #fff;
    background-color: var(--themeBlueIndigo);
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    padding: 0.5rem 1.2rem;
    font-size: 0.875rem;
    min-width: 6rem;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.1em;
    text-decoration: none;

    &:hover {
        background-color: var(--themeBlueOxford);
        text-shadow: -2px -2px 2px #21577e, 2px 2px 2px #21577e, -2px -2px -2px #21577e, 2px 2px -2px #21577e;
    }

    &:active {
        box-shadow: -2px -2px 2px #21577e, 2px 2px 2px #21577e;
        background-color: var(--themeBlueIndigo);
        text-shadow: -2px -2px 2px #21577e, 2px 2px 2px #21577e, -2px -2px -2px #21577e, 2px 2px -2px #21577e;
    }
`;

export default ButtonPrimary;