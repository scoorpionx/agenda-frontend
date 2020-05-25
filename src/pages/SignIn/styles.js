import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;

    .content {
        padding: 8px;
        margin: 20px;
        background-color: #ffffff;
        border-radius: 12px;
        margin-top: 200px;
        box-shadow: 0 4px 8px 4px #5a5b5c;
        transition: box-shadow 0.3s, top 0.3s, left 0.3s;
        top: 0;
        position: relative;
        cursor: pointer;
    }

    .content:hover {
        top: -10px;
        box-shadow: none;
    }

    h1 {
        padding: 12px 0 4px 0;
        text-align: center;
        font-size: 30px;
        font-weight: 300;
    }

    .div-form {
        display: flex;
        justify-content: center;
    }

    .gform {
        display: flex;
        flex-direction: column;
        padding: 10px;
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
        color: #474747;
    }

    .confirm:hover, .cancel:hover, input:hover {
        color: #000000;
        background-color: #cccccc;
        font-weight: 300;
    }


`;