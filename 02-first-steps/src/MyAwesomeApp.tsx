import type { CSSProperties } from "react";

export const MyAwesomeApp = () => {
  const firstName = "Cristhian";
  const lastName = "Camacho";

  const favoriteGames = ["Elden Ring", "Smash", "Metal Gear"];
  const isActive = true;

  const address = {
    zipCode: "21387",
    country: "Mexico",
  };

  const myStyles: CSSProperties = {
    backgroundColor: "#f0eeee",
    borderRadius: 20,
    padding: 10,
    width: 'max-content',
    marginTop: 60
    
  };
  return (
    <>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>

      <p>{favoriteGames.join(", ")}</p>

      <h1>{isActive ? "Activo" : "No Activo"}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};

// export function MyAwesomeApp() {
//     return (
//         <>
//         <h1>Cristhian</h1>
//         <h2>Camacho</h2>
//         </>
//     )
// }
