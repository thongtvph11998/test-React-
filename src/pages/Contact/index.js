import React from "react"

const Contact = () => {
	return (
		<div>
			{/*Section: Contact v.2*/}
			<section className='mb-4'>
				{/*Section heading*/}
				<h2 className='h1-responsive font-weight-bold text-center my-4'>Contact us</h2>
				{/*Section description*/}
				<p className='text-center w-responsive mx-auto mb-5'>
					Do you have any questions? Please do not hesitate to contact us directly. Our team will
					come back to you within a matter of hours to help you.
				</p>
				<div className='row'>
					{/*Grid column*/}
					<div className='col-md-8 mb-md-0 mb-5'>
						<form id='contact-form' name='contact-form' action='mail.php' method='POST'>
							{/*Grid row*/}
							<div className='row'>
								{/*Grid column*/}
								<div className='col-md-6'>
									<div className='md-form mb-0'>
										<input type='text' id='name' name='name' className='form-control' />
										<label htmlFor='name' className>
											Your name
										</label>
									</div>
								</div>
								{/*Grid column*/}
								{/*Grid column*/}
								<div className='col-md-6'>
									<div className='md-form mb-0'>
										<input type='text' id='email' name='email' className='form-control' />
										<label htmlFor='email' className>
											Your email
										</label>
									</div>
								</div>
								{/*Grid column*/}
							</div>
							{/*Grid row*/}
							{/*Grid row*/}
							<div className='row'>
								<div className='col-md-12'>
									<div className='md-form mb-0'>
										<input type='text' id='subject' name='subject' className='form-control' />
										<label htmlFor='subject' className>
											Subject
										</label>
									</div>
								</div>
							</div>
							{/*Grid row*/}
							{/*Grid row*/}
							<div className='row'>
								{/*Grid column*/}
								<div className='col-md-12'>
									<div className='md-form'>
										<textarea
											type='text'
											id='message'
											name='message'
											rows={2}
											className='form-control md-textarea'
											defaultValue={""}
										/>
										<label htmlFor='message'>Your message</label>
									</div>
								</div>
							</div>
							{/*Grid row*/}
						</form>
						<div className='text-center text-md-left'>
							<a
								className='btn btn-primary'
								onclick="document.getElementById('contact-form').submit();"
							>
								Send
							</a>
						</div>
						<div className='status' />
					</div>
					{/*Grid column*/}
					{/*Grid column*/}
					<div className='col-md-3 text-center'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7446.976597001269!2d105.73522477416591!3d21.053150943940594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454f9de2328cf%3A0xc5685fbea9808d8e!2zTmd1ecOqbiBYw6EsIE1pbmggS2hhaSwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1615452421521!5m2!1svi!2s'
							width={400}
							height={350}
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
						/>
					</div>
					{/*Grid column*/}
				</div>
			</section>
			{/*Section: Contact v.2*/}
		</div>
	)
}

export default Contact
