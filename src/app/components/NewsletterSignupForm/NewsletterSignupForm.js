import React from "react";

const NewsletterSignupForm = ({ htmlForId }) => {
	return (
		<form className="w-full flex flex-col justify-center items-center gap-4">
			<label className="text-2xl" htmlFor={htmlForId}>
				Join our newsletter & stay updated!
			</label>
			<div className="flex gap-2">
				<input
					className="border border-foreground/10 bg-background py-2 px-3 rounded-lg text-2xl"
					id={htmlForId}
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
