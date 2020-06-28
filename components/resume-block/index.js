import styles from "../../pages/about/about.module.scss";

function ResumeBlock({ blockName, id, children }) {
    return (
        <div id={id} className={styles.resumeBlock}>
            <div className={styles.blockDescription}><h3>{ blockName }</h3></div>
            <div className={styles.blockContent}>
                <ul className={styles.positionList}>
                    { children }
                </ul>
            </div>
        </div>
    );
}

export default ResumeBlock;
