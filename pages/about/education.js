import ResumeBlockEntry from "../../components/resume-block-entry";
import styles from "./about.module.scss";
import ResumeBlock from "../../components/resume-block";

export default function Education({ id }) {
    return (
        <ResumeBlock blockName={'Education'} id={id}>
            <ResumeBlockEntry
                blockStyles={ styles.positionFHE }
                companyName={ 'University of Applied Sciences Erfurt' }
                duration={'2014, 3 Years'}
                jobLocation={'Erfurt, Germany 🇩🇪'}
                jobName={'M.Sc. Applied Computer Science'}
                companyURL={'https://www.fh-erfurt.de/fhe/en/startsite/'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <h3>Studies</h3>
                            <p>I continued studying the Masters in Computer Science immediately after finishing my bachelor. Even though some of the modules were offered in English, I wanted to experience a more international environment. Because attendance in person wasn't required and all of my exams were already taken care of, I was able to complete my studies outside the university's campus.</p>
                        </li>
                        <li>
                            <h3>Masters Thesis: Hilbert Pipeline &mdash; Labeling Debtors with Machine Learning Methods <br />(Graded: 93%, 1.3)</h3>
                            <p>My master thesis was a cooperation of the University of Applied Sciences Erfurt, the Odessa National Polytechnic University, and the collect Artificial Intelligence GmbH. One center of the work was a data pipeline for data verification and enrichment with a machine learning model at its end. The purpose was to score debtors to find out how easy and to what extent it was possible to collect their debt. The other center was put on Data Ethics to research ethical mechanisms and processes for handling critical data.<br />Even though I couldn't keep the 1.0 grading from my bachelor's thesis, my work was awarded the best master's thesis of the year 2016/2017 by the "Verein zur Förderung der Angewandten Informatik der FH Erfurt e.V.".</p>
                        </li>
                    </ul>
                )}/>
            <ResumeBlockEntry
                blockStyles={ styles.positionONPU }
                companyName={ 'Odessa National Polytechnic University' }
                duration={'2017, 3 Months'}
                jobLocation={'Odessa, Ukraine 🇺🇦'}
                jobName={'Master Thesis & Russian Language'}
                companyURL={'https://opu.ua/en'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <h3>Foreign Studies</h3>
                            <p>The chance for studying in Ukraine arose after visiting the Odessa National Polytechnic University for two times for conferences. Shortly after arriving, I realized being able to read Cyrillic would improve the quality of my stay dramatically. Therefore, I enrolled in an intensive Russian language course at the university, learning the language for 8 hours every day for one month. During the rest of my stay, I was honored to study with some of the university's Ph.D. candidates. I also wrote on my Masters Thesis. Being a very beautiful city, Odessa also had a lot of lifestyles, cafés, and great people to offer, making the experience perfect.</p>
                        </li>
                    </ul>
                )}/>
            <ResumeBlockEntry
                blockStyles={ styles.positionFHE }
                companyName={ 'University of Applied Sciences Erfurt' }
                duration={'2011, 3 Years'}
                jobLocation={'Erfurt, Germany 🇩🇪'}
                jobName={'B.Sc. Applied Computer Science'}
                companyURL={'https://www.fh-erfurt.de/fhe/en/startsite/'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <h3>Studies</h3>
                            <p>I decided to go back to computer science after receiving my Fachabitur (technical diploma). The University of Applied Sciences in Erfurt centered on project work and encouraged thinking in terms of products. I chose media informatics as a specialization but quickly learned that I'm also passionate about economics and a holistic view of how my products affect companies. The products we built were written in C++, PHP, Java, and JavaScript. I also began to work for <a href={'https://www.juston.com/en/home_en/'} title={'JustOn Homepage'} target={'_blank'}>JustOn</a> 10 to 20 hours a week next to my studies. <a href={'https://www.juston.com/en/home_en/'} title={'JustOn Homepage'} target={'_blank'}>JustOn</a> is a Fintech building billing solutions on top of Salesforce.</p>
                        </li>
                        <li>
                            <h3>Bachelor Thesis: RescueMap &mdash; An Intelligent Map for Rescue Missions <br />(Graded: 98%, 1.0)</h3>
                            <p>
                                My Bachelors Thesis was a cooperation with the chair for software engineering at the Friedrich Schiller University of Jena. A research project on disaster control and the coordination of rescue workers and police was translated into a startup to put the outcomes to the market. My work focused on building a mesh network of devices to share information on a map (I also built) to be independent of any data network. My work was tested by police, fire workers, and rescue engineers during the major catastrophe test run before opening the <a href={'https://en.wikipedia.org/wiki/Leipzig_City_Tunnel'} title={'Wikpedia page of the City Tunnel Leipzig'} target={'_blank'}>Leipzig City Tunnel</a>.
                            </p>
                        </li>
                    </ul>
                )}/>
            <ResumeBlockEntry
                blockStyles={ styles.positionTAI }
                companyName={ 'Staatliche Berufsfachschule für technische Assistenten für Informatik in Hof' }
                duration={'2004, 3 Years'}
                jobLocation={'Hof, Germany 🇩🇪'}
                jobName={'State Certified Technical Assistant for Computer Science & Electrician for Specified Tasks'}
                companyURL={'https://www.bs-hof.de/berufsfachschule-fuer-informatik'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                                <h3>Apprenticeship</h3>
                                <p>My interest in computers moved me to do an apprenticeship after finishing 10th grade. The focus was on electrical engineering, networks (I have two CCNA certificates), and getting basic programming experience in Assembler, Delphi, and C#. Ironically, the program created doubts in me whether a career in IT is the right decision. My focus shifted to media production, camera, and cut for some years.</p>
                        </li>
                    </ul>
                )}/>
        </ResumeBlock>
    )
}
