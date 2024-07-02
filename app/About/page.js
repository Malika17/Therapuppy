import About_comp from "../components/About_comp";
import About_text from "../components/About_text";
import Rotate from "../components/Rotate";
import "../components/About.css";
import Example from "../components/Example";
import Visit from "../components/Visit";

export default function About() {
  return (
    <div className="about-wrapper">
      <About_comp />
      <Rotate />
      <About_text />
      <Example />
      <Visit />
    </div>
  );
}
