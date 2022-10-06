import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const Wrapper = styled.div`
    max-width: 400px;
`

export const Column = styled.div`
    flex: 1;
    margin-left: 80px;
    margin-right: 80px;
    max-width: 600px;
    align-items: center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    max-width: 300px;
`

export const Title = styled.h2`
    font-family: 'Open-Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-top: 22px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open-Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open-Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const InformeText =  styled.p`
    font-family: 'Open-Sans';
    font-style: normal;
    font-weight: 180;
    font-size: 18px;
    line-height: 24px;
    margin-top: 40px;
    max-width: 320px;
    color: #FFFFFF;
`

export const LoginText =  styled.p`
    margin-left: 10px;
    color: #E4105D;

    &:hover{
        cursor: pointer;
        opacity: 0.6;
    }
`
export const TheCalling = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
