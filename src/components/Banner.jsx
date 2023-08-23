import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projects/projectSlice';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Loader from './Loader';
import { ProgrammingIcons, FrontendIcons, BackendIcons, FrameworkIcons, EditorIcons } from './Icons';
import { orangeIconStyles, blueIconStyles, purpleIconStyles, greenIconStyles, redIconStyles } from './IconColor';
import CodersRankSkillsChart from '@codersrank/skills-chart';
import CodersrankSummary from '@codersrank/summary';

// register web component as <codersrank-summary> element
window.customElements.define('codersrank-summary', CodersrankSummary);
// register web component as <codersrank-skills-chart> element
window.customElements.define('codersrank-skills-chart', CodersRankSkillsChart);

export default function Banner() {
    const projects = useSelector(state => state.home.projects);
    const isLoading = useSelector(state => state.home.isLoading);
    const dispatch = useDispatch();
    // const techColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

    useMemo(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    if (isLoading) {
        return <div><Loader /></div>;
    }

    const projectsWithTopics = projects.filter(project =>
        project.topics && project.topics.length > 0);


    return (
        <div className="banner-container" style={{ width: '100%', height: '90vh' }}>
            <Carousel data-bs-theme="dark" className="carousel-container">
                {projectsWithTopics.map((project, index) => (
                    <Carousel.Item key={index} data-bs-theme="light">
                        <Container className="column-container">
                            <Row>
                                <Col className="column-1">
                                    <Card style={{
                                        border: 'none',
                                        height: '90vh',
                                    }}>
                                        <h1>I am Riley Manda</h1>
                                        <p>A Full Stack Software Engineer with a passion for building mobile & web applications</p>
                                        <Stack gap={3}>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Programming languages</Badge>
                                                {ProgrammingIcons.map((icon, index) => (
                                                    <div key={index} className="p-2 white-icon">
                                                        {icon.icon({ style: orangeIconStyles, title: icon.label })}
                                                    </div>
                                                ))}
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Front-end</Badge>
                                                {FrontendIcons.map((icon, index) => (
                                                    <div key={index} className="p-2 white-icon">
                                                        {icon.icon({ style: blueIconStyles, title: icon.label })}
                                                    </div>
                                                ))}
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Back-end</Badge>
                                                {BackendIcons.map((icon, index) => (
                                                    <div key={index} className="p-2 white-icon">
                                                        {icon.icon({ style: purpleIconStyles, title: icon.label })}
                                                    </div>
                                                ))}
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Frameworks</Badge>
                                                {FrameworkIcons.map((icon, index) => (
                                                    <div key={index} className="p-2 white-icon">
                                                        <icon.icon style={greenIconStyles} title={icon.label} />
                                                    </div>
                                                ))}
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">IDEs</Badge>
                                                {EditorIcons.map((icon, index) => (
                                                    <div key={index} className="p-2 white-icon">
                                                        <icon.icon style={redIconStyles} title={icon.label} />
                                                    </div>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    </Card>
                                </Col>
                                <Col className="column-2">
                                    <Card style={{
                                        border: 'none',
                                        height: '90vh',
                                        width: '100%',
                                    }}>
                                        <Row>
                                            <Col sm={1} lg={1} md={1}>


                                            </Col>
                                            <Col>
                                                <Stack direction="vertical" gap={2}>
                                                    <codersrank-skills-chart branding="false" labels="true" legend="true" username="rileymanda"></codersrank-skills-chart>
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}