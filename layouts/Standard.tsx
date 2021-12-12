import React from 'react';
import styled from 'styled-components';

import {
  COLOR_SWAP_TRANSITION_DURATION,
} from '../colors';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Spacer from '../components/Spacer/Spacer';
import MaxWidthWrapper from '../components/MaxWidthWrapper/MaxWidthWrapper';

const StandardLayout = ({
  mainContent,
  rightContent,
}: {
  mainContent: any,
  rightContent?: any
}) => {
  
  return (
    <Wrapper>
      <HeaderWrapper>
        <MaxWidthWrapper>
          <Header />
        </MaxWidthWrapper>
      </HeaderWrapper>
      <Main>
        <MainCol>
          { mainContent }
        </MainCol>
        {
          rightContent && <RightCol>{ rightContent }</RightCol>
        }
      </Main>
      <Spacer size="96" />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;
const HeaderWrapper = styled.div`
  background: var(--color-background);
  box-shadow: var(--color-box-shadow);
  transition: background ${COLOR_SWAP_TRANSITION_DURATION}ms;
`;
const RightCol = styled.aside`
  order: 2;
  width: 290px;
`;
const MainCol = styled.div`
  order: 1;
  flex: 1;
  box-sizing: border-box;
  padding-right: 20px;
  overflow: hidden;
`;
const Main = styled(MaxWidthWrapper)`
  display: flex;
  @media ${(p) => p.theme.breakpoints.mdAndSmaller} {
    display: block;
    ${ MainCol}{
      width: 100%;
      padding: 0;
    } 
    ${ RightCol}{
      display: none;
    }
  }
`;
export default StandardLayout;
