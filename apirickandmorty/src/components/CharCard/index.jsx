import "./styles.css";

function CharCard({ char: { name, image, status, species } }) {
  /*   function filterLongNames ({name}) {
  return (name.map((letters) => {
      if (letters.length <= 15) {
        return letters;
      } else {
        let sum = "";
        for (let i = 0; i <= 15; i++) {
          sum += letters[i];
        }
        sum += "...";
        return sum;
      }
    }))
  }; */

  return (
    <>
      {/*         {if (name="Morty Smith") {style={color:"red"}}} */}

      <div className="card">
        {/*         <div className="cardson" style={{color:{status === "Alive" ? "green" : "red"}}}> */}

        {/*         {status === "Alive" ? <div className="green"></div> : <div className="red"></div>} */}

        <img className="picture" src={image} alt={name}></img>
        <label>
          <h4>{name}</h4>
        </label>
        <span>{species}</span>
        {status === "Alive" ? (
          <div className="aliveChars" /* style={{color:"green"}} */></div>
        ) : (
          <div className="deadChars"></div>
        )}
      </div>
    </>
  );
}

export default CharCard;
