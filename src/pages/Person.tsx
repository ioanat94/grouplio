import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PersonDetails } from '../interfaces/PersonDetails';

function Person() {
  const [personDetails, setPersonDetails] = useState<PersonDetails>(null);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const getPersonDetails = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      ).then((res) => res.json());
      setPersonDetails(response);
    };
    getPersonDetails();
  }, [id]);

  return (
    personDetails && (
      <div className='flex flex-col gap-20 justify-center py-8 min-h-[calc(100vh-48px-80px)]'>
        <div className='flex flex-col items-center gap-8 mx-auto w-5/6 h-max py-6 px-6 border-2 border-solid border-teal-900 rounded-lg shadow-xl md:w-1/2 lg:w-1/3 xl:w-1/4'>
          <div className='flex items-center justify-center bg-teal-900 rounded-full w-20 h-20 text-white text-4xl mb-4'>
            {personDetails.name[0]}
          </div>
          <table className='w-full'>
            <tbody>
              <tr>
                <th className='text-left'>Name:</th>
                <td className='text-right'>{personDetails.name}</td>
              </tr>
              <tr>
                <th className='text-left'>Username:</th>
                <td className='text-right'>{personDetails.username}</td>
              </tr>
              <tr>
                <th className='text-left'>Email:</th>
                <td className='text-right'>{personDetails.email}</td>
              </tr>
              <tr>
                <th className='text-left'>Phone:</th>
                <td className='text-right'>{personDetails.phone}</td>
              </tr>
              <tr>
                <th className='text-left'>Company:</th>
                <td className='text-right'>{personDetails.company.name}</td>
              </tr>
              <tr>
                <th className='text-left'>Website:</th>
                <td className='text-right'>{personDetails.website}</td>
              </tr>
              <tr>
                <th className='text-left'>Address:</th>
              </tr>
              <tr>
                <th className='text-left indent-4'>Street:</th>
                <td className='text-right'>{personDetails.address.street}</td>
              </tr>
              <tr>
                <th className='text-left indent-4'>Suite:</th>
                <td className='text-right'>{personDetails.address.suite}</td>
              </tr>
              <tr>
                <th className='text-left indent-4'>City:</th>
                <td className='text-right'>{personDetails.address.city}</td>
              </tr>
              <tr>
                <th className='text-left indent-4'>Zipcode:</th>
                <td className='text-right'>{personDetails.address.zipcode}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={() => navigate('/')}
          className='w-max mx-auto bg-teal-900 text-white rounded px-6 py-2 md:transition-all md:hover:bg-teal-700'
        >
          GO BACK
        </button>
      </div>
    )
  );
}

export default Person;
