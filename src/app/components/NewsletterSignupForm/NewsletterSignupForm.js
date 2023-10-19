import React from "react";

const NewsletterSignupForm = ({ htmlForId }) => {
	return (
		<form className="w-full flex flex-col justify-center items-center gap-4">
			<label
				className="sm:text-xl 2xl:text-2xl text-center"
				htmlFor={htmlForId}
			>
				Join our newsletter & stay updated!
			</label>
			<div className="flex flex-row gap-2 w-full justify-center items-center">
				<input
					className="border border-foreground/10 bg-background py-2 px-3 rounded-lg sm:text-xl 2xl:text-2xl"
					id={htmlForId}
					type="text"
					placeholder="Email Address"
				/>
				<button className="text-background bg-foreground rounded-lg py-2 px-5 sm:text-xl 2xl:text-2xl min-w-fit">
					Sign up
				</button>
			</div>
		</form>
	);
};

export default NewsletterSignupForm;
