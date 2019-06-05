import React, { Fragment } from 'react';
import './config/reactotron';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Sidebar from './components/SideBar';
import Player from './components/Player';
import Header from './components/Header';
import { Wrapper, Container, Content } from './styles/components';
import Routes from './routes';
import store from './store';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
      </BrowserRouter>
    </Provider>
  </Fragment>
);

export default App;
