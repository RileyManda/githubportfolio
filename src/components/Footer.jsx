import { FaTwitter, FaGithub, FaStackOverflow, FaLinkedin, FaMedium } from 'react-icons/fa';
import Stack from 'react-bootstrap/Stack';

const Footer =()=> {
  return (
      <div>  <footer className="footer">
          <Stack direction="horizontal" gap={3}>
              <div className="p-2">
                  <a href="https://github.com/RileyManda/" target="_blank" rel="noopener noreferrer">
                      <FaGithub style={{ color: 'white' }} />
                  </a>
              </div>
              <div className="p-2">
                  <a href="https://stackoverflow.com/users/6129553/rileymanda" target="_blank" rel="noopener noreferrer">
                      <FaStackOverflow style={{ color: 'white' }} />
                  </a>
              </div>
              <div className="p-2">
                  <a href="https://www.linkedin.com/in/rileymanda/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin style={{ color: 'white' }} />
                  </a>
              </div>

              <div className="p-2">
                  <a href="https://twitter.com/rileycodez" target="_blank" rel="noopener noreferrer">
                      <FaTwitter style={{ color: 'white' }} />
                  </a>
              </div>
              <div className="p-2">
                  <a href="https://medium.com/@rileymanda" target="_blank" rel="noopener noreferrer">
                      <FaMedium style={{ color: 'white' }} />
                  </a>
              </div>


          </Stack>
          <p>Lets Connect and build some amazing projects</p>
      </footer>
      </div>
  )
}
export default Footer;
