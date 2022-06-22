import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className='flex items-center justify-center px-5 py-2 bg-teal-900 md:justify-start'>
        <Link
          to='/'
          className='flex items-center gap-5'
          data-testid='link-home'
        >
          <img
            src={require('../../assets/images/group.png')}
            alt='Website Logo'
            className='w-16'
          ></img>
          <div className='text-5xl text-white font-bold font-handwr'>
            Grouplio
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
