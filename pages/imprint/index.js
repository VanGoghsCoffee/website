import Layout from '../../components/layout/Layout';
import Imprint from './imprint';
import Datenschutz from './datenschutz';

import styles from './imprint.module.scss';
import Head from "next/head";

const Index = () => {
    return (
        <main className={styles.imprint}>
            <Head>
                <title>Imprint | DavidRochholz.de</title>
                <meta property="og:title" content="Imprint | DavidRochholz.de" key="title" />
            </Head>
            <Imprint />
            <Datenschutz />
        </main>
    );
}

export default Layout(Index, 'imprint');
