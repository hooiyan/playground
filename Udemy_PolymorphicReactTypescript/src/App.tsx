import "./App.css";
import { Input } from "./components/Input";
import { Text } from "./components/Text";

function App() {
  return (
    <>
      <Text as="h1">Hello React + TypeScript</Text>

      <Text as="h2" href="https://google.com">
        Start editing to see some magic happen!
      </Text>

      <Text as="a" href="https://google.com">
        Hello World
      </Text>

      <Text emmanual="haha">This is a text node with no as</Text>

      <Input value="test" emmanual="hello" />
    </>
  );
}

export default App;
