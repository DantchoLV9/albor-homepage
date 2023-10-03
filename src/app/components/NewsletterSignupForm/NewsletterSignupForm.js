import React from "react";

const NewsletterSignupForm = () => {
	return (
		<form className="w-full flex flex-col justify-center items-center gap-4">
			<label className="text-2xl" htmlFor="newsletter_signup_form_email">
				Join our newsletter & stay updated!
			</label>
			<div className="flex gap-2">
				<input
					className="border py-2 px-3 rounded-lg text-2xl"
					id="newsletter_signup_form_email"
					type="text"
					placeholder="Email Address"
				/>
				<button className="text-background bg-foreground rounded-lg py-2 px-5 text-2xl">
					Sign up
				</button>
			</div>
		</form>
	);
};

export default NewsletterSignupForm;
