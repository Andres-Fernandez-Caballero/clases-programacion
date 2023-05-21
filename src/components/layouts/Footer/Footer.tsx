import React from 'react';
import './Footer.module.css';
import logo from '@assets/owl.svg';
import moment from 'moment';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
	return (
		<footer>
			<div className='container'>
				<div className='footer-content'>
					<div className='footer-logo'>
						<img src={logo} alt='Logo' width={50} height={50} />
						<h3>ElectriCat</h3>
					</div>
					<div className='footer-social'>
						<ul>
							<li>
								<a href='#'>{<WhatsAppIcon />}</a>
							</li>
							<li>
								<a href='#'>{<EmailIcon />}</a>
							</li>
							<li>
								<a href='#'>{<LocalPhoneIcon />}</a>
							</li>
							<li>
								<a href='#'>{<LinkedInIcon />}</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer-bottom'>
					<p>
						&copy; {moment().year()} Electricat. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
