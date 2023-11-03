import { HappyThoughts } from "./components/HappyThoughts";
import { Header } from "./components/Header";
// import { Header } from "./components/Header";

export const App = () => {
  return <div className="wrapper-main">
    <Header />
    <HappyThoughts />
  </div>;
};
