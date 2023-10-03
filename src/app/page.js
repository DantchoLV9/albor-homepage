import NewsletterSignupForm from "./components/NewsletterSignupForm/NewsletterSignupForm";
import Section from "./components/Section/Section";

export default function Home() {
	return (
		<main className="w-full flex-1 flex flex-col justify-center items-center">
			<div className="flex h-screen flex-col justify-center items-center gap-40 w-3/4">
				<div className="flex flex-col gap-10 w-full">
					<h1 className="text-9xl font-black flex gap-4 justify-center">
						<span className="bg-gradient-to-r from-gradient1-from to-gradient1-to bg-clip-text text-transparent">
							Explore
						</span>
						<span className="bg-gradient-to-r from-gradient2-from to-gradient2-to bg-clip-text text-transparent">
							Express
						</span>
						<span className="bg-gradient-to-r from-gradient3-from to-gradient3-to bg-clip-text text-transparent">
							Earn
						</span>
					</h1>
					<p className="text-center text-4xl">
						The online canvas where pixels and passions colide.
					</p>
				</div>
				<NewsletterSignupForm />
			</div>
			<p>A picture is worth a thousand words</p>
			<Section
				pillText="Explore"
				fromColor="from-gradient1-from"
				toColor="to-gradient1-to"
				title="Get inspired"
				description="Dive into a world of creativity and inspiration. Explore the incredible artwork images and photos crafted by our talented community."
			></Section>
		</main>
	);
}
