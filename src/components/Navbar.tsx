import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link
        to='/'
        className='flex items-center justify-center gap-5 px-5 py-2 bg-teal-900 md:justify-start'
      >
        <img
          src={require('../assets/images/group.png')}
          alt=''
          className='w-16'
        ></img>
        <div className='text-5xl text-white font-bold font-handwr'>
          Grouplio
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
