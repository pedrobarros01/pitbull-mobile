import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text, VStack } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Container from './components/Container';
import Title from './components/Title';
import {CardButton, CardButtonProps} from './components/CardButton';

const cardArrays: CardButtonProps[] = [
  { "id": "1", "status": "ligado" },
  { "id": "2", "status": "desligado" },
  { "id": "3", "status": "ligado" },
  { "id": "4", "status": "desligado" },
  { "id": "5", "status": "ligado" },
  { "id": "6", "status": "desligado" },
  { "id": "7", "status": "ligado" },
  { "id": "8", "status": "desligado" }
]

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}
const Home = () => {
  return (
    <Container>
        <Title title='Escolha o LED a ser ligado !' />
          <VStack h='$5/6' bg='$white' flexDirection='column' alignItems='center' justifyContent='flex-start' marginTop='$10' space='4xl'>
            {cardArrays.map((value, index) => {
              return (<CardButton key={index} id={value.id} status={value.status} />);
            })}
          </VStack>
    </Container>
  );
};

