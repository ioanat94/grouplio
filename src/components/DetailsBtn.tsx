import { Link } from 'react-router-dom';

function DetailsBtn(props) {
  return (
    <Link to={`/${props.id}`}>
      <button className='bg-teal-900 text-white rounded px-6 py-2 md:transition-all md:hover:bg-teal-700'>
        MORE DETAILS
      </button>
    </Link>
  );
}

export default DetailsBtn;
