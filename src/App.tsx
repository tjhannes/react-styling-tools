import "./App.css";
import AntDesign from "./components/ant-design/AntDesign";
import ModuleCss from "./components/module-css/ModuleCss";
import MoreCoolLibraries from "./components/more-cool-libraries/MoreCoolLibraries";
import StyledComponents from "./components/styled-components/StyledComponents";
import Tailwind from "./components/tailwind/Tailwind";

function App() {
  return (
    <div className="app-container flex flex-col">
      <section className="bg-neutral-300 h-screen text-center">
        <p className="font-bold text-2xl p-4">Tailwind</p>
        <Tailwind />
        <p>
          Tailwind is a utility-first CSS framework for rapidly building custom
          designs.
        </p>
        <p>My notes</p>
      </section>
      <section className="bg-neutral-50 h-screen text-center">
        <p className="font-bold text-2xl p-4">Ant Design</p>
        <AntDesign />
        <p>
          Ant Design is a design system. It comes with a lot of components and
          styles.
        </p>{" "}
        <p>My notes</p>
      </section>
      <section className="bg-neutral-300 h-screen text-center">
        <p className="font-bold text-2xl p-4">Module CSS</p>
        <ModuleCss />
        <p>Module CSS is a way to scope CSS to a single component.</p>{" "}
        <p>My notes</p>
      </section>
      <section className="bg-neutral-50 h-screen text-center">
        <p className="font-bold text-2xl p-4">Styled components</p>
        <StyledComponents />
        <p>
          Styled components is a way to write CSS in JS. It allows you to write
          actual CSS code to style your components.
        </p>{" "}
        <p>My notes</p>
      </section>
      <section className="h-screen text-center">
        <p className="font-bold text-2xl p-4">More cool libraries</p>{" "}
        <p className="p-4">My notes</p>
        <MoreCoolLibraries />
      </section>
    </div>
  );
}

export default App;
