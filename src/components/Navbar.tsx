import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to='/' className='flex items-center gap-5 px-5 py-2 bg-teal-900'>
        <img
          src={require('../assets/images/group.png')}
          alt=''
          className='w-20'
        ></img>
        <div className='text-5xl text-white font-bold font-handwr'>
          Grouplio
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
