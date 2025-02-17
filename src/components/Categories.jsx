import './Categories.css';
import { Link } from 'react-router-dom';

function Categories(props) {
    return (
        <div className='cbox'>
            <Link to={props.link} className='cname'>{props.title}</Link>
        </div>
    );
}

export default Categories;