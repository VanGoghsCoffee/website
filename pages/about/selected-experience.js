import ResumeBlockEntry from "../../components/resume-block-entry";
import styles from "./about.module.scss";
import ResumeBlock from "../../components/resume-block";

export default function SelectedExperience({id}) {
    return (
        <ResumeBlock blockName={'Selected Experience'} id={id}>
            <ResumeBlockEntry
                blockStyles={ styles.positionDefenderBoys }
                companyName={ 'Defenderboys' }
                duration={'2018, 3 Months'}
                jobLocation={'Southern & Western Africa 🇿🇦 🇲🇿 🇿🇼 🇧🇼 🇳🇦 🇦🇴 🇨🇩 🇨🇬 🇬🇦 🇨🇲 🇳🇬 🇧🇯 🇹🇬 🇬🇭 🇨🇮 🇬🇳 🇬🇼 🇸🇳 🇬🇲'}
                jobName={'Traveler'}
                companyURL={'https://www.instagram.com/defenderboys/'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <p>I got the chance to take part in crossing Africa by car in 2018. A friend bought a 2002 Land Rover Defender TD5 110 while studying his master's in Cape Town. The idea was to bring the car to Bavaria by driving up the western side of Africa, taking 3 months. After spending half a day in an offroad workshop we told our confused teacher we'd drive to Europe in the coming days. Then we hit the road. We picked up another friend in Johannesburg, detouring over Mozambique and its beautiful nature before driving back to the west via Zimbabwe, Botswana, and Namibia. Unfortunately, after taking every obstacle, every pothole, and every dirt road with absolute ease, after surviving a car crashing into the Defender with more than 60 km/h with just a dent and also after being held by the military in the DRC (because of camping in the wrong spot), the car broke down hitting the smoothly tarred roads of Senegal. Our travels stopped close to Europe, after 2 and a half months in The Gambia, where we had to put the Defender into a container, shipping it to Hamburg.</p>
                        </li>
                    </ul>
                )}/>
            <ResumeBlockEntry
                blockStyles={ styles.positionESAC }
                companyName={ 'European Space Astronomy Centre, ESA' }
                duration={'2015, 6 Months'}
                jobLocation={'Villanueva de la Cañada, Spain 🇪🇸'}
                jobName={'Trainee'}
                companyURL={'https://www.esa.int/About_Us/ESAC'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <p>The ESAC trainee program for 2015 came to my attention while procrastinating my bachelor's thesis on Twitter. Taking the traineeship meant to delay my master's studies by at least half a year, since going to Madrid wasn't considered in my study plan. Yet, one of my professors encouraged me to continue my studies outside of the campus as there was no compulsory attendance. I also already finished all of my exams, leaving me only with project works and my master's thesis.<br />
                                As a trainee, I was part of the XMM-Newton Science Operations Centre, working on a collaborative software for researchers specialized in black holes and their <a href={'https://en.wikipedia.org/wiki/Tidal_disruption_event'} title={'Wikipedia Tidal Disruption Event'} target={'_blank'}>Tidal Disruption Events</a>.</p>
                        </li>
                    </ul>
                )}/>
            <ResumeBlockEntry
                blockStyles={ styles.positionEcopia }
                companyName={ 'Ecopia PLC' }
                duration={'2012, 2 Months'}
                jobLocation={'Addis Ababa, Ethiopia 🇪🇹'}
                jobName={'Trainee Business Development and IT'}
                companyURL={'http://www.ecopia.de/'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <p>The year working as a volunteer in the development aid sector in Uganda made me curious to experience work inside a company in one of the countries of the global south. The CEO of the JustON GmbH brought me into contact with Dr. Mitslal Kifleyesus-Matschie, the CEO of the Ethiopian food producing company Ecopia. The work in Addis Ababa was set during my 2 months summer semester vacation in 2012. The time in Ethiopia gave me another chance to reflect on the ground on development aid, being involved in workshops and meetings with NGOs and governmental institutions from Japan and Germany. The traineeship included tons of learning, helping to find local market spaces for selling Ecopias products, contract negotiations, and keeping the company's IT managed.</p>
                        </li>
                    </ul>
                )}/>
            <ResumeBlockEntry
                blockStyles={ styles.positionDED }
                companyName={ 'German Development Service / Deutsche Gesellschaft für Internationale Zusammenarbeit' }
                duration={'2009, 1 Year'}
                jobLocation={'Nkozi / Fort Portal, Uganda 🇺🇬'}
                jobName={'Volunteer Media Production & Database Developer'}
                companyURL={'https://www.giz.de/en/html/index.html'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <h3>Radio Show & Blog Production</h3>
                            <p>During my first four months, I helped to build a news blog and radio show in a village called Nkozi, with walking distance to the Equator. The small village was home to the Martyrs University of Uganda. I coordinated a working group of students collecting news from all around East Africa for presenting interesting content from the sectors of lifestyle and politics to a target audience of the ages 18 to 30.</p>
                        </li>
                        <li>
                            <h3>Farmers Cooperate Database</h3>
                            <p>Bringing the apprenticeship in IT to the table, it made sense to switch to a project in Fort Portal (western Uganda), where my skills were more required. Community Agribusiness Capacity Services (CABCS) was a corporate offering farmer a single point to sell their crops for a well-balanced market price. Customers of their services on the other hand didn't need to drive from farm to farm, wasting hours. Furthermore, CABCS also provided field workshops on business and organic farming. It was my job to build and maintain a database holding contact information of all of CABCS's 3500 farmers.
                                I also helped with smaller tasks, taking photos and building the website for a vocational school in Mbale, Eastern Uganda, as well as helping out with some software issues at the Mountains of the Moon university close to Fort Portal.</p>
                        </li>
                    </ul>
                )}/>
        </ResumeBlock>
    )
}
