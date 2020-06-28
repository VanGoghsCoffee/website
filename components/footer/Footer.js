import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; 2020 <br />
                Made with ⚓️️ in Hamburg, Germany
            </p>
        </footer>
    );
}
