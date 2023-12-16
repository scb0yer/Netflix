import "./App.css";
import movies from "./assets/movies.json";
import Section from "./components/Section";
import logo from "./assets/logo.png";

function App() {
  return (
    <body>
      <header>
        <img class="logo" alt="logo" src={logo} />
      </header>
      <main>
        {movies.map((section, index) => {
          return (
            <Section
              key={index}
              category={section.category}
              images={section.images}
            />
          );
        })}
      </main>
    </body>
  );

  // return tab.map((element, index) => {
  //   console.log(tab);
  //   return (
  //     <>
  //       <p key={index}> {element.category} </p>
  //       {element.images.map((image, indexImg) => {
  //         return <img alt={indexImg} src={image} />;
  //       })}
  //       <div key={index}></div>
  //       <br></br>
  //     </>
  //   );
  // });
}

export default App;
