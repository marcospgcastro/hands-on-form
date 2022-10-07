import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="JavaScript" image="https://avatars.githubusercontent.com/u/23128572?v=" percentual={25}/>
                <UserInfo nome="NodeJs" image="https://avatars.githubusercontent.com/u/23128572?v=" percentual={65}/>
                <UserInfo nome="ReactJs" image="https://avatars.githubusercontent.com/u/23128572?v=" percentual={45}/>
                <UserInfo nome="React Native" image="https://avatars.githubusercontent.com/u/23128572?v=" percentual={72}/>
                <UserInfo nome="VueJs" image="https://avatars.githubusercontent.com/u/23128572?v=" percentual={22}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
