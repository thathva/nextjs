// import { useState, useEffect } from "react";
// import dynamic from 'next/dynamic'

// const ApiCall = () => {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     fetch("api/fetchpost")
//   .then((response) => response.json())
//   .then((data) => setCharacters(data.rows)) // update this line
//   .catch((error) => console.log(error));
//   }, []);
//   return (
//     // <div className="container" style={{ 'maxWidth': '800px', 'margin': '0 auto' }}>
//     //   <h1>Characters</h1>
//     //   <div className="grid" style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(200px, 1fr))', 'gap': '20px' }}>
//     //     {characters.map((character) => (
//     //       <div key={character.id} className="card" style={{
//     //         'backgroundColor': '#fff',
//     //         'padding': '20px',
//     //         'borderRadius': '10px',
//     //         'boxShadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
//     //         'textAlign': 'center'
//     //       }}>
//     //         <img src={character.image} alt={character.name} style={{
//     //           'display': 'block',
//     //           'width': '100%',
//     //           'borderRadius': '5px',
//     //           'marginBottom': '10px'
//     //         }} />
//     //         <h2 style={{
//     //           'fontSize': '1.5rem',
//     //           'margin': '0 0 10px'
//     //         }}>{character.name}</h2>
//     //         <p style={{ 'margin': '0' }}>Status: {character.status}</p>
//     //         <p style={{ 'margin': '0' }}>Species: {character.species}</p>
//     //         <p style={{ 'margin': '0' }}>Gender: {character.gender}</p>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//     <div className="container" style={{ 'maxWidth': '800px', 'margin': '0 auto' }}>
//     <h1>Customers</h1>
//     <div className="grid" style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(200px, 1fr))', 'gap': '20px' }}>
//       {characters.map((character) => (
//         <div key={character.customer_id} className="card" style={{
//           'backgroundColor': '#fff',
//           'padding': '20px',
//           'borderRadius': '10px',
//           'boxShadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
//           'textAlign': 'center'
//         }}>
//           <h2 style={{
//             'fontSize': '1.5rem',
//             'margin': '0 0 10px'
//           }}>{character.age}</h2>
//           <p style={{ 'margin': '0' }}>Status: {character.Active}</p>
//           <p style={{ 'margin': '0' }}>News: {character.fashion_news_frequency}</p>
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// };

// export default ApiCall;