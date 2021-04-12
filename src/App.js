import React from "react";
import axios from "axios";

function App() {
  const lisaQuote = {
    quote: "Shut up, brain. I got friends now. I don't need you anymore.",
    character: "Lisa Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
    characterDirection: "Right",
  };

  const [simpsonsQuote, setSimpsonsQuote] = React.useState(lisaQuote);

  const getSimpsonsQuote = () => {
    axios("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => setSimpsonsQuote(response.data[0]))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <button onClick={getSimpsonsQuote}>Get Simpsons' quote!</button>
      <h1>{simpsonsQuote.character}</h1>
      <img src={simpsonsQuote.image} alt={simpsonsQuote.character} />
      <p>{simpsonsQuote.quote}</p>
    </div>
  );
}

export default App;
