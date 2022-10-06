import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open-Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    width: 600px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleHighlight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 40;
    font-size: 18px;
    line-height: 32px;
    width: 560px;
    margin-top: 30px;
    color: #FFFFFF;
`
export const Limiter = styled.div`
    font-family: 'Open-Sans';
    font-size: 24px;
    margin-top: 40px;
    max-width: 300px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
export const Column = styled.div`
    flex: 1;
    margin-right: 80px;
    margin-left: 80px;
`