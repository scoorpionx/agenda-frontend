import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;

    .Container {
        z-index: 3;
        right: 5vw;
        bottom: 3vw;
    }

    .btn {
        background-color: #000;
        width: 70px;
        height: 70px;
    }

    .btn:hover {
        background-color: #fff;
    }

    .plus-icon {
        color: #fff;
        font-size: 200%;
        text-shadow:0px 1px 0px #2f6627;
    }

    .btn:hover .plus-icon {
        color: #282c34;
    }
    
`;

