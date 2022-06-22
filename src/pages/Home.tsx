import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../components/Card/Card';

function Home() {
  const [people, setPeople] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const searchPeople = (searchValue) => {
    setQuery(searchValue);
    if (query) {
      const filteredData = people.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(people);
    }
  };

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
    <div
      className='flex flex-col items-center gap-10 bg-[#F5F5F5] min-h-[calc(100vh-48px-80px)] py-10'
      data-testid='home-page'
    >
      <input
        type='search'
        placeholder='Search...'
        onChange={(e) => searchPeople(e.target.value)}
        className='rounded-lg px-4 h-10 w-72 border-2 border-solid border-teal-900 bg-[#F5F5F5] focus:outline-none focus:bg-white md:w-[500px]'
      ></input>
      <div
        className='flex flex-wrap w-2/3 justify-evenly gap-x-8 gap-y-10'
        data-testid='card-list'
      >
        {query.length > 1
          ? filteredResults.map((person) => (
              <Card key={person.id} {...person} />
            ))
          : people.map((person) => <Card key={person.id} {...person} />)}
      </div>
    </div>
  );
}

export default Home;
