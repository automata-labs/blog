import styled from 'styled-components';

const Header = styled.header`
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.17);
  position: fixed;
  font-size: 13px;
  width: 100%;

  z-index: 100;
  -webkit-backdrop-filter: saturate(180%) blur(8px);
`;

const HeaderInner = styled.div`
  display: flex;
  max-width: 652px;
  margin: 0 auto;
  padding: 20px;
`;

const HeaderInnerRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const HrefLink = styled.a`
  opacity: 0.5;
  transition: opacity .15s;

  &:hover {
    opacity: 1;
  }
`;

export default function HeaderComponent() {
  return (
    <Header>
      <HeaderInner>
        <HrefLink href="https://automata.fi">Automata</HrefLink>
        <HeaderInnerRight>
          <HrefLink href="https://blog.automata.fi" style={{ marginRight: 20 }}>Blog</HrefLink>
          <HrefLink href="https://discord.gg/rXUgFXs4Pz" style={{ marginRight: 20 }}>Discord</HrefLink>
          <HrefLink href="https://twitter.com/AutomataFinance" style={{ marginRight: 20 }}>Twitter</HrefLink>
          <HrefLink href="https://github.com/automata-labs/">GitHub</HrefLink>
        </HeaderInnerRight>
      </HeaderInner>
    </Header>
  );
}
