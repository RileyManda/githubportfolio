import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projects/projectSlice';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
// import Loader from './Loader';
import { ProgrammingIcons, FrontendIcons, BackendIcons, FrameworkIcons, EditorIcons } from './Icons';
import { orangeIconStyles, blueIconStyles, purpleIconStyles, greenIconStyles, redIconStyles } from './IconColor';
import Summary from './Summary';
import introductionData from './IntroductionData';


export default function Banner() {
  // const isLoading = useSelector(state => state.home.isLoading);
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(fetchProjects());
  }, [dispatch]);


  return (
    <div className="banner-container">
      <Container fluid>
        <Carousel data-bs-theme="dark">
          {introductionData.map((project, index) => (
            <Carousel.Item key={index} data-bs-theme="light">

              <Row xs="auto" className="justify-content-center">
                <Col sm={12} lg={6} className="carousel-item-content">
                  <Card style={{
                    border: 'none',
                    height: '90vh',
                  }}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <Stack gap={3} direction="vertical">
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
                <Col sm={12} lg={6} className="carousel-item-content">
                  <Card style={{
                    border: 'none',
                    height: '90vh',
                  }}>
                    <Stack direction="vertical">
                      <Summary />
                    </Stack>
                  </Card>
                </Col>

              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}