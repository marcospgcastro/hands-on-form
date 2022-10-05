import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    font-weight: 500;
    border: none;
    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    margin-right: 10px;

    &:hover{
        background: #E4105D;
        cursor: pointer;
    }
    
    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 40px;
        border: none;
        background: #E4105D;
        font-family: 'Open-Sans';
        font-size: 18px;
        font-weight: 700;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -11px;
            left: -12px;
            width: calc(100% + 20px);
            height: calc(100% + 20px);
            border-radius: 36px;
        }
    `}
`