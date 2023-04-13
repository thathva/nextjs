import conn from '../../lib/db'
export const config = {
    api: {
      responseLimit: false,
      // responseLimit: '8mb',
    },
  }

export default async (req, res) => {
    try {
        
        const query = 'SELECT * FROM customer_small'
      const result = await conn.query(
          query,
      );
      res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(JSON.stringify(result));
  } catch ( error ) {
      console.log( error );
  }
  };
