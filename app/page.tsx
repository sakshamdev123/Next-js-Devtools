import DevTools from "./components/devTools";
import HomePage from "./components/homePage";

export default function Home() {
  return (
    <div className="flex flex-row">
      <HomePage />
      <DevTools />
    </div>
  );
}
