import Link from 'next/link';
import styles from './navigation.module.scss';

function active(pageName = '', {active}) {
    return pageName === active ? styles.active : '';
}

export default function Navigation(activePage = '') {
    return (
        <div className={styles.navigation}>
            <div>
                <span className={styles.logo}>DR</span>
            </div>
            <ul>
                <li><Link href={'/about'}><a className={active('about', activePage)}>About Me</a></Link></li>
            </ul>
        </div>
    )
}
