import { useMemo,useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projects/projectSlice';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { BsFillCaretDownSquareFill } from 'react-icons/bs';

// import Loader from './Loader';
import { ProgrammingIcons, FrontendIcons, BackendIcons, EditorIcons } from './Icons';
import { orangeIconStyles, blueIconStyles, purpleIconStyles, redIconStyles } from './IconColor';
// import Summary from './Summary';
import introductionData from './IntroductionData';
import AnimData from './AnimData';


const Banner = () => {
  // const isLoading = useSelector(state => state.home.isLoading);
  const dispatch = useDispatch();
  const [currentAnimData, setCurrentAnimData] = useState(0);


  useMemo(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  const handleSlide = (selectedIndex) => {
    setCurrentAnimData(selectedIndex);
  };

  const handleArrowClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };


  return (
    <div className="banner-container">
      <Container fluid>
        <Carousel data-bs-theme="dark" activeIndex={currentAnimData} onSelect={handleSlide}>
          {introductionData.map((project, index) => (
            <Carousel.Item key={index} data-bs-theme="light">
              <Row className= "justify-content-center align-items-center text-center">
                <Col sm={12} lg={6} className="carousel-item-content d-flex justify-content-center">
                  <Card style={{
                    border: 'none',
                    height: '90vh',
                  }}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <Stack gap={3} direction="vertical">
                      <Stack direction="horizontal" gap={3}>
                        <Badge pill bg="dark">Front-end</Badge>
                        {FrontendIcons.map((icon, index) => (
                          <div key={index} className="p-2 white-icon">
                            {icon.icon({ style: blueIconStyles, title: icon.label })}
                          </div>
                        ))}
                      </Stack>
                      <Stack direction="horizontal" gap={3}>
                        <Badge pill bg="dark">Languages</Badge>
                        {ProgrammingIcons.map((icon, index) => (
                          <div key={index} className="p-2 white-icon">
                            {icon.icon({ style: orangeIconStyles, title: icon.label })}
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
                <Col sm={12} lg={6} className="carousel-item-content d-flex justify-content-center">
                  <Card style={{
                    border: 'none',
                    height: '90vh',
                  }}>
                    <Stack direction="vertical">
                      {AnimData[currentAnimData % AnimData.length].map((AnimComponent, index) => (
                        <AnimComponent key={index} />
                      ))}
                    </Stack>


                  </Card>
                </Col>

              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="hero-arrow-container" >
         <div className="hero-arrow" onClick={handleArrowClick}>
            <BsFillCaretDownSquareFill size={24} />
          </div>
        </div>
      </Container>

      </div>
  );
};
export default Banner;