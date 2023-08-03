import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/router/tab';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}