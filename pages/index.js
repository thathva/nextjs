import { useState, useEffect } from "react";

const Home = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setLoading] = useState(false)
  // const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    setLoading(true)
    fetch("api/lightDataFetch")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data.customers)
        setLoading(false)
      }) // update this line
      .catch((error) => console.log(error));
  }, []);
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No customer data</p>
  return (
    <div className="container" style={{ 'maxWidth': '800px', 'margin': '0 auto' }}>
      <h1>LightDataFetch</h1>
      <h2>Customer Data From AWS RDS Postgresql</h2>
      <div>
        {customers.map((customer) => (
          <div key={customer.customer_id}>
            <h1>Customer ID: {customer.customer_id}</h1>
            <h2>Customer Member Status: {customer.club_member_status}</h2>
            <p>Customer FashionNews Frequency: {customer.fashion_news_frequency}</p>
            <p>Customer Age: {customer.age}</p>
            <p>-----------------------------------</p>
          </div>
        ))}
      </div>
    </div>
  );

//   useEffect(() => {
//     fetch("api/hello")
//   .then((response) => response.json())
//   .then((data) => setCharacters(data.characters)) // update this line
//   .catch((error) => console.log(error));
//   }, []);
//   return (
//     <div className="container" style={{ 'maxWidth': '800px', 'margin': '0 auto' }}>
//       <h1>Characters</h1>
//       <div className="grid" style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(200px, 1fr))', 'gap': '20px' }}>
//         {characters.map((character) => (
//           <div key={character.id} className="card" style={{
//             'backgroundColor': '#fff',
//             'padding': '20px',
//             'borderRadius': '10px',
//             'boxShadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
//             'textAlign': 'center'
//           }}>
//             <img src={character.image} alt={character.name} style={{
//               'display': 'block',
//               'width': '100%',
//               'borderRadius': '5px',
//               'marginBottom': '10px'
//             }} />
//             <h2 style={{
//               'fontSize': '1.5rem',
//               'margin': '0 0 10px'
//             }}>{character.name}</h2>
//             <p style={{ 'margin': '0' }}>Status: {character.status}</p>
//             <p style={{ 'margin': '0' }}>Species: {character.species}</p>
//             <p style={{ 'margin': '0' }}>Gender: {character.gender}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

};

export default Home;