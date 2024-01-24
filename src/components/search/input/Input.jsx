import styles from './css/style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { inputValue } from '../../../slices/listSlice';

export default function Input() {
    const { val } = useSelector( state => state.list );
    const dispatch = useDispatch();

    const handle = (e) => {
        let value = e.target.value;

        dispatch(inputValue(value));
    }

    return (
        <input type="text" value={val} onChange={handle} />
    )
}
