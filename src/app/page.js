import Image from "next/image";
import GradientBackgroundParagraph from "./components/GradientBackgroundParagraph/GradientBackgroundParagraph";
import NewsletterSignupForm from "./components/NewsletterSignupForm/NewsletterSignupForm";
import Section from "./components/Section/Section";
import imageOne from "./images/image1.jpg";
import imageTwo from "./images/image2.jpg";
import imageFour from "./images/image4.jpg";
import imageFive from "./images/image5.jpg";

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
			<GradientBackgroundParagraph text="A picture is worth a thousand words" />
			<Section
				pillText="Explore"
				fromColor="gradient1-from"
				toColor="gradient1-to"
				midColor="gradient1-mid"
				title="Get inspired"
				description="Dive into a world of creativity and inspiration. Explore the incredible artwork images and photos crafted by our talented community."
			>
				<div className="grid h-[48rem] grid-cols-12 grid-rows-2 w-full gap-5 relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:from-background/95 after:z-10">
					<Image
						alt="photo of a gravel path between some trees"
						className="w-full h-full col-start-1 col-span-4 row-span-1 object-cover"
						src={imageOne}
					/>
					<Image
						alt="photo of train tracks running up to a station next to some buildings"
						className="w-full h-full col-start-5 col-span-4 row-span-1 object-cover"
						src={imageTwo}
					/>
					<Image
						alt="photo of a highway taken from above showing the headlight and brakelight lighttrails left from cars"
						className="w-full h-full row-start-2 col-span-8 row-span-1 object-cover object-top"
						src={imageFive}
					/>
					<Image
						alt="photo of a telephone boot net to a red post box"
						className="w-full h-full col-start-9 col-span-4 row-span-full object-cover"
						src={imageFour}
					/>
				</div>
			</Section>
			<Section
				pillText="Express"
				fromColor="gradient2-from"
				toColor="gradient2-to"
				midColor="gradient2-mid"
				title="Share your art"
				description="Share your unique artwork images and photos with our community. Start inspiring others and showcase your talent to the world."
			></Section>
		</main>
	);
}
