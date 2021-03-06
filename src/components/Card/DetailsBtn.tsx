import { Link } from 'react-router-dom';

function DetailsBtn(props) {
  return (
    <Link to={`/people/${props.id}`}>
      <button
        className='bg-teal-900 text-white rounded px-6 py-2 md:transition-all md:hover:bg-teal-700'
        data-testid='more-details'
      >
        MORE DETAILS
      </button>
    </Link>
  );
}

export default DetailsBtn;
