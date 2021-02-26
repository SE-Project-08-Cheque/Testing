import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Badge, Box, Button, Center, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';


function WelcomeFooter() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Online Check is perfect for self-employed people
          <br />
          saving them tons of valuable time
        </p>
        <p className="footer-subscription-text">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>
          The only software which allows the user to create Single or Multiple
          checks and
          <br />
          giving functionality to a self-employed user at no extra cost.
        </p>
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
            <Text size="md" color="white">
              Bank of Ceylon
            </Text>
            <Text pt="10px" color="white">
              No 1, BOC Square,{' '}
            </Text>
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

export default WelcomeFooter;
