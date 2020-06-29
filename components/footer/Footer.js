import styles from './footer.module.scss';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; 2020 <br />
                Made with ⚓️️ in Hamburg, Germany <br />
                <Link href={'/imprint'}><a>Imprint</a></Link>
            </p>
        </footer>
    );
}
