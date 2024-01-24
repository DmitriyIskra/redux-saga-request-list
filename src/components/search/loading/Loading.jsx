import styles from './css/style.module.css';
import { useSelector } from 'react-redux';

export default function Loading() {
    const { loading } = useSelector( store => store.list )

    return (
        <>
            {loading && <div>Loading...</div>}
        </>
    )
}
