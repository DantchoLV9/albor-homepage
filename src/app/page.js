import Image from "next/image";
import GradientBackgroundParagraph from "./components/GradientBackgroundParagraph/GradientBackgroundParagraph";
import NewsletterSignupForm from "./components/NewsletterSignupForm/NewsletterSignupForm";
import Section from "./components/Section/Section";
import imageOne from "./images/image1.webp";
import imageTwo from "./images/image2.webp";
import imageThree from "./images/image3.webp";
import imageFour from "./images/image4.webp";
import imageFive from "./images/image5.webp";
import imageSix from "./images/image6.webp";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import ShowcaseSVG from "./components/FeatureCard/ShowcaseSVG";
import HeroTitle from "./components/HeroTitle/HeroTitle";

export default function Home() {
	return (
		<main className="w-full flex-1 flex flex-col justify-center items-center">
			<div className="flex h-screen flex-col justify-center items-center gap-40 w-3/4">
				<div className="flex flex-col gap-10 w-full">
					<HeroTitle />
					<p className="text-center text-4xl">
						The online canvas where pixels and passions colide.
					</p>
				</div>
				<NewsletterSignupForm htmlForId="hero_newsletter_signup_form" />
			</div>
			<GradientBackgroundParagraph
				className="text-2xl"
				text="A picture is worth a thousand words"
			/>
			<Section
				id="exploreSection"
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
				id="expressSection"
				pillText="Express"
				fromColor="gradient2-from"
				toColor="gradient2-to"
				midColor="gradient2-mid"
				title="Share your art"
				description="Share your unique artwork images and photos with our community. Start inspiring others and showcase your talent to the world."
			>
				<div className="grid grid-cols-12 grid-rows-4 w-3/4 gap-5 relative">
					{/* Resolution */}
					<FeatureCard hoverEffect={true} className="col-start-1 col-span-4">
						<div className="flex justify-around items-center h-full flex-col gap-5">
							<h3 className="text-6xl text-center uppercase font-semibold">
								Any
							</h3>
							<div className="w-full bg-foreground/10 rounded-2xl py-3 px-5 text-3xl">
								<div>
									<p className="text-center">Resolution</p>
									<p className="text-center">Aspect Ratio</p>
									<p className="text-center">File Type</p>
									<p className="text-center">Topic</p>
									<p className="text-center">Resolution</p>
								</div>
							</div>
						</div>
					</FeatureCard>
					{/* Gear */}
					<FeatureCard className="col-start-5 col-span-8">
						<div className="flex justify-around items-center h-full flex-col gap-5">
							<Image
								className="absolute top-0 left-0 w-full h-full object-cover -z-10"
								alt=""
								src={imageSix}
							/>
							<h3 className="text-6xl text-center uppercase font-semibold text-white">
								Show off your gear
							</h3>
							<p className="text-center text-3xl w-3/4 text-white">
								Got a rare piece of kit or an interesting collection? Show it
								off on your gear page!
							</p>
						</div>
					</FeatureCard>
					{/* Showcase */}
					<FeatureCard
						hoverEffect={true}
						className="col-start-1 col-span-8 row-start-2 row-span-2"
					>
						<div className="flex justify-around items-center h-full flex-col gap-5">
							<div className="w-full flex justify-center items-center">
								<ShowcaseSVG />
							</div>
							<p className="text-center text-3xl">
								Showcase the unique process involved in creating your artwork!
							</p>
						</div>
					</FeatureCard>
					{/* Video */}
					<FeatureCard
						hoverEffect={true}
						className="col-start-9 col-span-4 row-start-2 row-span-2"
					>
						<div className="flex justify-around items-center h-full flex-col gap-5">
							<div className="rounded-2xl overflow-hidden relative">
								<div className="w-14 h-14 bg-background/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
									<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[15px] border-l-foreground/30"></div>
								</div>
								<Image
									alt="photo of a an old car parked on the side of a street"
									src={imageThree}
								/>
							</div>
							<h3 className="text-5xl text-center font-semibold">Video</h3>
							<p className="text-center  text-3xl">
								Share your video masterpieces with the world and let your
								creativity shine!
							</p>
						</div>
					</FeatureCard>
					{/* High res */}
					<FeatureCard
						hoverEffect={true}
						className="col-start-1 col-span-6 row-start-4"
					>
						<div className="flex justify-around items-center h-full flex-col gap-5">
							<div className="bg-gradient-to-br from-gradient3-from to-gradient3-to w-full rounded-2xl py-3">
								<h3 className="text-6xl text-center uppercase font-semibold text-background">
									High res
								</h3>
							</div>
							<p className="text-center text-3xl">
								Provide high-resolution versions of your artwork for your most
								dedicated fans!
							</p>
						</div>
					</FeatureCard>
					{/* Library */}
					<FeatureCard
						hoverEffect={true}
						className="col-start-7 col-span-6 row-start-4"
					>
						<div className="flex justify-around items-center h-full flex-col gap-5">
							<h3 className="text-6xl text-center uppercase font-semibold">
								Library
							</h3>
							<p className="text-center text-3xl">
								Make your artwork easy to browse by using the library/albums
								feature!
							</p>
						</div>
					</FeatureCard>
				</div>
			</Section>
			<Section
				id="earnSection"
				pillText="Earn"
				fromColor="gradient3-from"
				toColor="gradient3-to"
				midColor="gradient3-mid"
				title="Get rewarded"
				description="Unlock your creative potential and reap the rewards! Your creativity could be your ticket to exciting opportunities."
			></Section>
			<div className="mt-32 mb-24">
				<NewsletterSignupForm htmlForId="footer_newsletter_signup_form" />
			</div>
		</main>
	);
}
