import styles from "../../pages/about/about.module.scss";

function ResumeBlockEntry({ blockStyles, jobName, companyName, companyURL, jobLocation, duration, jobDescription }) {
    const renderCompany = (companyName, companyURL) => {
        return companyURL
            ? (<a href={companyURL} title={`${ companyName } Homepage`} target={'_blank'} rel="noreferrer noopener">{ companyName }</a>)
            : companyName;
    }

    return (
        <li>
            <article className={`${ styles.jobPosition } ${ blockStyles }`}>
                <h3 className={styles.jobName}>{ jobName }</h3>
                <h4 className={styles.jobCompany}>
                    { renderCompany(companyName, companyURL) }
                </h4>
                <h5 className={styles.jobLocation}>{ jobLocation }</h5>
                <h5 className={styles.jobDate}>{ duration }</h5>
                { jobDescription }
            </article>
        </li>
    );
}

export default ResumeBlockEntry;
