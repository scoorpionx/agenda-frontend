import styled from 'styled-components';

export const Container = styled.div`
    all: none;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    background: rgba(145, 145, 145, 0.97);

    .content {
        display: flex;
        justify-content: center;
        padding: 8px;
        margin: 20px;
        background-color: #ffffff;
        border-radius: 12px;
        margin-top: 200px;
        margin-bottom: 190px;
        height: 100%;
        box-shadow: 0 4px 8px 0 #5a5b5c;
        transition: box-shadow 0.3s, top 0.3s, left 0.3s;
        cursor: pointer;
    }

    .content:hover {
        top: 10px;
        left: 10px;
        box-shadow: none;
    }

    .div-form {
        display: flex;
        justify-content: center;
        height: auto;
        padding: 10px;
        margin: 10px;
        flex-direction: column;
    }

    .gform {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
    input, .confirm, .cancel {
        border: 1px solid #cccccc;
        border-radius: 5px;
        margin: 3px;
        box-sizing: border-box;
        cursor: pointer;
    }

    input {
        padding: 8px;
        resize: vertical;
        height: auto;
        width: 100%;
        font-size: 20px;
    }
    
    .div-btns {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        justify-content: space-between;
        padding: 3px;
    }

    .confirm, .cancel {
        font-weight: 200;
        font-size: 20px;
        height: 50px;
        width: 120px;
        margin: 0;
        margin-top: 3px;
    }

    .confirm:hover, .cancel:hover {
        background-color: #cccccc;
        font-weight: 300;
    }


`;