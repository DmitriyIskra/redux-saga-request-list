import styles from './css/style.module.css';
import { useSelector } from 'react-redux';

export default function Error() {
    const { error } = useSelector( store => store.list );

    return (
        <>
            {error && <div className={styles.error}>Упс, произошла ошибочка...</div>}
        </>
        
    )
}
