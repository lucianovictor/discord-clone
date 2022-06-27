import { Container, HashtagIcon, Title, Separator, Description} from './styles'

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Chat-livre</Title>

      <Separator />

      <Description> Canal Aberto Para Conversa</Description>
    </Container>
  );
};

export default ChannelInfo;
