import GoogleMap from "../GoogleMap.js";

const Market = (props) => {
    const handleAdd = (id) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ market_id: id }),
    };
  
    fetch("http://localhost:3000/user_markets", configObj, {
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.errors ? data.errors.join(", ") : data.error);
          });
        }
        return response.json();
      })
      .then(() => {
        alert("Market added successfully!");
        props.setDisplayAdd(false);
        props.handleDisplay(false);
      })
      .catch((error) => {
        if (error.message.includes("Unauthorized")) {
          alert("You are not authorized to add this market.");
        } else if (error.message.includes("Failed to fetch")) {
          alert("Network error. Please try again later.");
        } else {
          console.error("An error occurred while adding the market:", error.message);
        }
      });
  };

  return (
    <div>
      <h5 className="text-lg font-semibold">{props.market.name}</h5>

      <GoogleMap
        latitude={props.market.latitude}
        longitude={props.market.longitude}
        marketId={props.market.id}
      />

      {props.displayAdd && (
        <button
          className="btn"
          value={props.market.id}
          onClick={() => handleAdd(props.market.id)}
        >
          ADD
        </button>
      )}
    </div>
  );
};

export default Market;
