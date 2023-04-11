// pages/api/hello.js
export const config = {
  runtime: 'edge',
}

export default async function handler(req, res) {
  try {
    const characters = [];
    let url = 'https://rickandmortyapi.com/api/character'
    do {
      const response = await fetch(url);
      const data = await response.json();
      url = data.next;
      characters.push(...data.results);
    } while (url && data.pages<10);

    // const response = await fetch("https://rickandmortyapi.com/api/character"); // /?page=20
    // const data = await response.json();
    // const characters = data.results;
    res.status(200).json({ url });

    return new Response(
      JSON.stringify({
        characters
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      }
    )
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        msg: error
      }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      }
    )
  }
}