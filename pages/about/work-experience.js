import ResumeBlockEntry from "../../components/resume-block-entry";
import styles from "./about.module.scss";
import ResumeBlock from "../../components/resume-block";

export default function WorkExperience({id}) {
    return (
        <ResumeBlock blockName={'Work Experience'} id={id}>
            <ResumeBlockEntry
                blockStyles={ styles.positionNetlight }
                companyName={ 'Netlight Consulting GmbH' }
                duration={'2018, 2 years'}
                jobLocation={'Hamburg, Germany 🇩🇪'}
                jobName={'Consultant'}
                companyURL={'https://www.netlight.com/'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <p>I started as a consultant at Netlight to get the exciting chance to learn about different business types, struggles, and solutions related to digitization, and product & software development. My work focuses on many aspects, like full-stack-development, architecture, agile working methods, data engineering, and team building. Furthermore, not being entirely the same as working in the development aid sector, I've found overlapping virtues. For example, I believe it's very problematic to arrive in a strange place to build a dam or a school and then leave without building the capacity of how to use and maintain or integrating them into the social and political environment. Likewise, it's problematic to arrive in a company with a one-size-fits-all solution to implement.</p>
                        </li>
                    </ul>
                )}/>
            <ResumeBlockEntry
                blockStyles={ styles.positionCollectAI }
                companyName={ 'Collect Artificial Intelligence GmbH' }
                duration={'2016, 1 Year 5 Months'}
                jobLocation={'Hamburg, Germany 🇩🇪'}
                jobName={'Data Scientist & Data Engineer'}
                companyURL={'https://www.collect.ai/'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <h3>Research and Development Internship at LiquidLabs</h3>
                            <p>The first job I took in Hamburg was an internship at a company builder for logistic and financial startups of the Otto Group, called Liquid Labs. Next to the regular research and development, I also prepared my master's thesis on machine learning, which was also supervised by one of collectAI's product owners. Liquid Labs' main focus lay on the just founded debt collection startup collectAI. Machine learning should help to identify channels of communication with debtors to settle debt before creditors send out official dunning letters, therefore keeping the relationships to their clients healthy. During my internship, I learned tons about machine learning and product development in a small startup. </p>
                        </li>
                        <li>
                            <h3>Data Engineer</h3>
                            <p>Working at Liquid Labs as an intern for collectAI, I discovered data engineering as an attractive field to develop my career. Being a computer scientist with skills in programming and experience in working with scientists, it made sense to act as the glue between development and data science. Yet, I also quickly merged into full-stack development due to collectAI's startup status, needing helping hands in many areas. I loved the experience of working at a startup. Yet, for my career, I wanted to get a more holistic perspective to my work and get closer to the decision making.</p>
                        </li>
                    </ul>
                )}/>
            <ResumeBlockEntry
                blockStyles={ styles.positionDR }
                companyName={ 'David Rochholz' }
                duration={'2013, 3 Years'}
                jobLocation={'Weimar / Erfurt, Germany 🇩🇪'}
                jobName={'Freelance Web Developer'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <p>For financing parts of my studies, I started to work as a freelance web developer. Amongst my clients were musicians, choirs, yoga studies, music schools, coworking spaces, agencies, software development companies, and universities. Next to realizing websites with content management abilities or developing portals and web services integrating into an already existing ecosystem like Salesforce, freelancing focused heavily on acquiring and managing clients. While I'd recommend every Computer Science student to have their own business because of financial reasons, it's also an awesome opportunity to put your learned theoretical knowledge into practical work, therefore gaining experience and growing as a person.</p>
                        </li>
                    </ul>
                )}/>
        </ResumeBlock>
    )
}
