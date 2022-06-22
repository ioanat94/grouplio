import { PersonDetails } from '../../interfaces/PersonDetails';
import DetailsBtn from './DetailsBtn';

function Card(person: PersonDetails) {
  return (
    <div
      data-testid='card'
      className='card flex flex-col items-center justify-evenly gap-8 border-2 border-solid border-teal-900 rounded-lg w-72 h-80 shadow-xl py-2 md:transition-all md:hover:bg-white md:hover:shadow-none'
    >
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center justify-center bg-teal-900 rounded-full w-20 h-20 text-white text-4xl mb-4'>
          {person.name[0]}
        </div>
        <div className='text-xl font-semibold'>{person.name}</div>
        <div className='text-[#707070]'>@{person.username}</div>
        <a
          href={`http://${person.website}`}
          className='card-anchor text-teal-900 font-semibold border-b border-b-solid border-b-[#F5F5F5] pb-1 md:transition-all md:hover:text-[#707070]'
        >
          {person.website}
        </a>
      </div>
      <DetailsBtn id={person.id} />
    </div>
  );
}

export default Card;
