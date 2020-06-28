import ResumeBlockEntry from "../../components/resume-block-entry";
import styles from "./about.module.scss";
import ResumeBlock from "../../components/resume-block";

export default function Publications({ id }) {
    return (
        <ResumeBlock blockName={'Publications'} id={id}>
            <ResumeBlockEntry
                jobName={'The Astronomical FITS File Format And Its Problems'}
                blockStyles={ styles.positionICS }
                companyName={ 'Modern Information Technology (СУЧАСНІ ІНФОРМАЦІЙНІ ТЕХНОЛОГІЇ)' }
                duration={'2016'}
                companyURL={'http://ics_conf.tilda.ws/eng'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <h3>Abstract</h3>
                            <p>Despite its high age, the fits file format is still the widest spread file format standard in astronomical data processing. The following work aims to give a basic understanding of the file format, its problems in the modern astronomical community, and more up to date alternatives.
                            </p>
                        </li>
                    </ul>
                )}/>
            <ResumeBlockEntry
                jobName={'Publishing a Local Map by Using OpenStreetMap, Geoserver, and OpenLayers'}
                blockStyles={ styles.positionICS }
                companyName={ 'Modern Information Technology (СУЧАСНІ ІНФОРМАЦІЙНІ ТЕХНОЛОГІЇ)' }
                duration={'2014'}
                companyURL={'http://ics_conf.tilda.ws/eng'}
                jobDescription={(
                    <ul className={styles.jobDescription}>
                        <li>
                            <h3>Abstract</h3>
                            <p>The following article explains how a map, based on freely available geo-data, is interpreted, rendered, and displayed on a local system. The focus will lie on the usage of the tools PostGIS, OpenLayers, GeoServer, its Web Map Service, and GeoWebCache support, to boost the map performance.</p>
                        </li>
                    </ul>
                )}/>
        </ResumeBlock>
    );
}
