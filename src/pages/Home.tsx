import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';

function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      ).then((res) => res.json());
      setPeople(response);
    };
    getPeople();
  }, []);

  return (
    <div className='flex items-center justify-center bg-[#F5F5F5] min-h-[calc(100vh-48px-80px)] py-10'>
      <div className='flex flex-wrap w-2/3 justify-evenly gap-x-8 gap-y-10'>
        {people.map((person) => (
          <Card key={person.id} {...person} />
        ))}
      </div>
    </div>
  );
}

export default Home;
