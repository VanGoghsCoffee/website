import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

import Layout from '../../components/layout/Layout';
import styles from './about.module.scss';
import WorkExperience from "./work-experience";
import SelectedExperience from "./selected-experience";
import Education from "./education";
import Publications from "./publications";

const Index = () => {
    return (
        <main className={styles.content}>
            <div className={styles.personalInformation}>
                <article>
                    <img src='img/david-rochholz-foto.1024x1024.jpg' alt='David Rochholz profile'/>
                    <h1>David <br /> Rochholz</h1>
                    <h2>Self-Taught Flaneur & Procastinateur</h2>
                    <ul>
                        <li>
                            <div className={styles.aboutIcon}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div>Hamburg, Germany</div>
                        </li>
                        <li>
                            <div className={styles.aboutIcon}>
                                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                            </div>
                            <div>mail@davidrochholz.de</div>
                        </li>
                        <li>
                            <div className={`${styles.aboutIcon}`}>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <div><a href='https://github.com/vangoghscoffee' title='David Rochholz GitHub' target='_blank' rel="noreferrer noopener">VanGoghsCoffee</a></div>
                        </li>
                        <li>
                            <div className={`${styles.aboutIcon}`}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div><a href='https://www.instagram.com/vangoghscoffee/' title='David Rochholz Instagram' target='_blank' rel="noreferrer noopener">VanGoghsCoffee</a></div>
                        </li>
                        <li>
                            <div className={`${styles.aboutIcon}`}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div><a href='https://twitter.com/vangoghscoffee' title='David Rochholz Twitter' target='_blank' rel="noreferrer noopener">@VanGoghsCoffee</a></div>
                        </li>
                    </ul>
                </article>

            </div>
            <div>
                <article className={`${styles.aboutContent} ${styles.aboutMe}`}>
                    <h2>About Me</h2>
                    <p>
                        Hey there! I'm David. You can read about selected parts of my life here!</p>
                    <p>I'm passionate about digitization, technology, and about how people organize to create magnificent work! Therefore, I chose to be a consultant in the tech industry by day. By night I transform into a book reading procrastinator with love for coffee, champagne 🍾, and good movies. Occasionally, I also spend time with my PlayStation.
                    </p>
                </article>
                <article className={`${styles.aboutContent} ${styles.resume}`}>
                    <h2>Résumé</h2>
                    <ol>
                        <li><a href={'#work_experience'} title={'Work Experience'}>Work Experience</a></li>
                        <li><a href={'#selected_experience'} title={'Selected Experience'}>Selected Experiene</a></li>
                        <li><a href={'#publications'} title={'Publications'}>Publications</a></li>
                        <li><a href={'#education'} title={'Education'}>Education</a></li>
                    </ol>
                    <WorkExperience id={'work_experience'} />
                    <SelectedExperience id={'selected_experience'} />
                    <Publications id={'publications'} />
                    <Education id={'education'} />
                </article>
            </div>
        </main>
    )
}

export default Layout(Index, 'about');
