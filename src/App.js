import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

import Figure0 from './img/blg-0_fig-0.png';
import Figure1 from './img/blg-0_fig-1.png';
import Figure2 from './img/blg-0_fig-2.png';
import Figure3 from './img/blg-0_fig-3.png';
import Figure4 from './img/blg-0_fig-4.png';

const App = styled.div`
  padding-bottom: 4rem;
`;

const Main = styled.main`
  max-width: 652px;
  margin: 0 auto;
  padding: 6rem 1.25rem 1.25rem;
`;

const Tag = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.5);
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.02rem;
  line-height: 1.4211;
  margin-bottom: 10px;
  padding: 4px 6px;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.4211;
  margin-bottom: 0.5rem;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4211;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`;

const H3 = styled.h2`
  font-size: 1rem;
  line-height: 1.4211;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`;

const Code = styled.code`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 0.25em;
  display: inline;
  font-family: 'iA Writer Mono';
  padding: 0.1em 0.4em;
`;

const Italic = styled.span`
  font-style: italic;
`;

const Figure = styled.img`
  border: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: 4px;
  display: block;
  max-width: 100%;
  margin-bottom: 15px;
`;

const Caption = styled.div`
  font-size: 12px;
  margin-bottom: 2rem;
  opacity: 0.5;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.5211;
  opacity: 0.8;
  margin-bottom: 2em;
`;

const List = styled.ul`
  margin: 10px 0;
`;

const Item = styled.li`
  padding-left: 1.25rem;
  padding-bottom: 2px;
  position: relative;

  &:before {
    content: "";
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    top: 0.5em;
    height: 4px;
    left: 0;
    position: absolute;
    transform: translate(25%, 50%);
    width: 4px;
  }
`;

const HrefUnderline = styled.a`
  border-bottom: 1px solid;
  border-bottom-color: inherit;
  padding-bottom: 1px;

  &:hover {
    border-bottom-color: transparent;
  }
`;

export default function AppComponent() {
  return (
    <>
    <App>
      <Header />

      <Main>
        <Tag>PROTOCOL RELEASE</Tag>
        <H1>
          Introducing Automata's <Code>des-0</Code>
        </H1>
        <H3 style={{ opacity: 0.75, marginBottom: '2rem' }}>
          The new <Code>des-0</Code> DAO tokenizes proposals into <Code>ERC721</Code> tokens
          and introduces a new proposal methodology for staging, contesting and merging of proposals.
        </H3>
        <Figure src={Figure0} style={{ marginBottom: '2rem' }} />
        <Paragraph>
          Automata Labs Inc. is releasing a new DAO structure, called <Code>des-0</Code> (DAO Execution System V0).
          The <Code>des-0</Code> DAO contract-set introduces numerous new features:

          <List>
            <Item>Tokenization of proposals into <Code>ERC721</Code> tokens.</Item>
            <Item>A new lifecycles for proposals: <Italic>Drafts</Italic>, <Italic>Staging</Italic>, <Italic>Unstaging</Italic> and <Italic>Contesting</Italic> of proposals.</Item>
            <Item>Deployment of contracts is now performed by the DAO itself using <Code>create</Code>/<Code>create2</Code> opcodes</Item>
            <Item>Extendable to new proposal formats by creating additional <Code>ERC721</Code> token contracts</Item>
          </List>
        </Paragraph>

        <H2>Proposal Lifecycle</H2>
        <Paragraph>
          Every proposal starts out as a draft proposal. When the proposal is finalized and ready,
          it can be staged, which allows anyone with enough tokens to open the proposal for voting.
          This approach mirrors and is inspired by git/GitHub's process. If code is law, why not use
          methodologies from version control systems?
        </Paragraph>
        <Figure src={Figure1} />
        <Caption>Figure: A list of proposals.</Caption>
        <Paragraph>
          Another change that's introduced is to allow DAO members to contest a proposal's result.
          GovernorAlpha/GovernorBravo has one voting period, and the result is final. This allows
          for proposals to be sniped on the last block, without a chance for redo, even if on an extended
          period the proposal would not pass.
          <br />
          <br />
          To amend this, we allow anyone to contest a proposal after it passes the first stage of
          voting. And when a proposal is contested, only a single side will be able to vote, which
          flips to the opposite side on each contest. The contestations can continue forever, as long as both the for-
          and against votes' sides keep one-up:ing each other on every contest.
          <br />
          <br />
          When one side fails to get majority during a contestation, the proposal will reach finality. To some degree,
          this can be thought of as longest-chain rule, but for DAOs.
        </Paragraph>
        <Figure src={Figure2} />
        <Caption>Figure: A proposal being contested 3 times - the longest-chain rule for DAOs.</Caption>

        <H2>Technicalities, ERC721 and Transaction Messages</H2>
        <Paragraph>
          Every proposal is tokenized as an ERC721 token. This allows for users to transfer proposals,
          give approval to contracts or other accounts to enable collaboration on-chain.
          To increase the clarification of each proposal, each transaction in a proposal also have a message.
        </Paragraph>
        <Figure src={Figure3} />
        <Caption>Figure: An example transaction with a tx message.</Caption>
        <Paragraph>
          <Code>des-0</Code> also extends execution of arbitrary transactions to deployments of contracts.
          This offsets the contract deployment cost from the proposer to the DAO itself. And
          if a proposal doesn't pass, no contracts are deployed.
        </Paragraph>
        <Figure src={Figure4} />
        <Caption>Figure: The DAO will only deploy a contract if a proposal passes.</Caption>

        <H2>Comments and Links</H2>
        <Paragraph>
          Automata Labs Inc. is a DAO research and -deployment company with the goal of realizing the on-chain DAO.
          Peek into our <HrefUnderline href="https://discord.gg/rXUgFXs4Pz">Discord</HrefUnderline> or follow us on <HrefUnderline href="https://twitter.com/AutomataFinance">Twitter</HrefUnderline> to learn more.
          <br />
          <br />
          The <Code>des-0</Code> source code is available on <HrefUnderline href="https://github.com/automata-labs/des">GitHub</HrefUnderline>. Built- and tested with <HrefUnderline href="https://github.com/gakonst/foundry">Foundry</HrefUnderline>.
          <br />
          <Italic>Note: <Code>des-0</Code> has not been audited and is not production ready yet (as of this post).</Italic>
        </Paragraph>
      </Main>

    </App>
    <Footer />
    </>
  );
}
