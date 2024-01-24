import styles from './css/style.module.css';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import Item from '../item/Item';

export default function List() {
    const { list } = useSelector( store => store.list );

    return (
        <>
            {list?.length > 0 &&
                <ul>
                    {list.map( item => <Item key={v4()} data={item.name} /> )}
                </ul>
            }
        </>
        
    )
}
