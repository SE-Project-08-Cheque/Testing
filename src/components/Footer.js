import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
<link
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  rel="stylesheet"
></link>;

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p data-testid='subcription-heading' className="footer-subscription-heading">
          Do you need technical guidance?
        </p>
        <p data-testid='subcription-text' className="footer-subscription-text">
          Send us what you want to know. We will contact you as soon as possible.
        </p>
        <div className="input-areas">
          <form>

            <Button data-testid='send' rightIcon={<ArrowForwardIcon />} colorScheme="green" variant="outline" size="md">
              Send us
 
            </Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Secured Service</Link>
            <Link to="/">24 / 7 Transactions</Link>
            <Link to="/">Sustainability</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Customer Care</Link>
            <Link to="/">10000+ Users</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
          <div class="footer-link-items">
          <Text size="md" color="white">Bank of Ceylon</Text>
            <Text pt='10px' color="white">No 1, BOC Square, </Text>
            <Text color="white">Ceylon Mawatha,</Text>
            <Text color="white">Colombo 01,Sri Lanka.</Text>
            <Text color="white">Tel : +94112446790</Text>
            <Text color="white">Email : cheque@boc.lk</Text>
            <Text color="white"></Text>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Online Cheque
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">
            © 2021, All Rights Reserved | Designed by University of Moratuwa
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
