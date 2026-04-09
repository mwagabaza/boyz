import Hero from "./components/Hero";
import Pitch from "./components/Pitch";
import Process from "./components/Process";
import Edge from "./components/Edge";
import Vault from "./components/Vault";
import Invitation from "./components/Invitation";
import Nameplate from "./components/Nameplate";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Pitch />
        <Process />
        <Edge />
        <Vault />
        <Invitation />
      </main>
      <Nameplate />
    </>
  );
}
