import Layout from '../../components/layout/Layout';
import Imprint from './imprint';
import Datenschutz from './datenschutz';

import styles from './imprint.module.scss';

const Index = () => {
    return (
        <main className={styles.imprint}>
            <Imprint />
            <Datenschutz />
        </main>
    );
}

export default Layout(Index, 'imprint');
