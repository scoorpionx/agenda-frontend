import styled from 'styled-components';

export const Container = styled.div`

    .content {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 8px;
        margin: 20px;
        background-color: #ffffff;
        border-radius: 12px;
        width: 350px;
        min-height: 90px;
        box-shadow: 0 4px 8px 0 #5a5b5c;
        transition: box-shadow 0.3s, top 0.3s, left 0.3s;
        position: relative;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    .content:hover {
        top: 10px;
        left: 10px;
        box-shadow: none;
    }
    
    .icons {
        display: flex;
        align-self: flex-end;
        position: absolute;
        font-size: 20px;
    }

    .trash, .edit {
        padding: 5px;
    }

    .name {
        display: flex;
        flex-direction: row;
        display: flex;
        flex-direction: column;
        width: 82%;
    }

    span {
        font-size: 20px;
        padding: 3px;
    }
`;