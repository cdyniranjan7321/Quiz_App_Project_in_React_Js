'use client'
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [aboutUsData, setAboutUsData] = useState<Array<{ id: number; Title: string; organization: string; field1: string; field2: string }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getAboutUs'); // Make a GET request to the server-side API route
        const data = await response.json();
        if (response.ok) {
          setAboutUsData(data.aboutUs);
        } else {
          setError(data.error || 'Failed to fetch data');
        }
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      







      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        aboutUsData.map(item => (
          <div key={item.id}>
            <h2>{item.Title}</h2>
            {/* <p>Organization: {item.organization}</p>
            <p>{item.field1}</p>
            <p>{item.field2}</p> */}
          </div>
        ))
      )}

    </div>
  );
};
export default AboutPage;