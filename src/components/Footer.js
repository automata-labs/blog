
import styled from 'styled-components';

const Footer = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 13px;
  padding: 20px;
`;

const FooterInner = styled.div`
  display: flex;
  max-width: 652px;
  margin: 0 auto;
`;

const FooterInnerRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const HrefLink = styled.a`
  opacity: 0.25;
  transition: opacity .15s;

  &:hover {
    opacity: .5;
  }
`;

export default function FooterComponent() {
  return (
    <Footer>
      <FooterInner>
        <HrefLink href="https://automata.fi">Automata Labs Inc.</HrefLink>
        <FooterInnerRight>
          <HrefLink href="https://discord.gg/rXUgFXs4Pz" style={{ marginRight: 20 }}>Discord</HrefLink>
          <HrefLink href="https://twitter.com/AutomataFinance" style={{ marginRight: 20 }}>Twitter</HrefLink>
          <HrefLink href="https://github.com/automata-labs/">GitHub</HrefLink>
        </FooterInnerRight>
      </FooterInner>
    </Footer>
  );
}
