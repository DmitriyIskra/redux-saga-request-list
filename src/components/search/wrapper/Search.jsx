import styles from './css/style.module.css';
import Input from '../input/Input';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import List from '../list/List';

export default function Search() {
    return (
        <div className={styles.wrapper}>
            <Input />
            <Error />
            <Loading />
            <List />
        </div>
    )
}
