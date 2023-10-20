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
import CheckIcon from "./components/EarnStep/CheckIcon";
import PlusIcon from "./components/EarnStep/PlusIcon";
import DollarIcon from "./components/EarnStep/DollarIcon";
import EarnStep from "./components/EarnStep/EarnStep";
import AnyTopic from "./components/FeatureCard/AnyTopic";

export default function Home() {
	const newsletterFormDisabled =
		process.env.NEXT_PUBLIC_NEWSLETTER_FORM_DISABLED === "true" ? true : false;
	return (
		<main className="w-full flex-1 flex flex-col justify-center items-center">
			<div className="flex h-screen flex-col justify-center items-center gap-20 lg:gap-40 w-full lg:w-3/4 px-10">
				<div className="flex flex-col gap-10 w-full">
					<HeroTitle />
					<p className="text-center text-2xl sm:text-3xl 2xl:text-4xl">
						The online canvas where pixels and passions colide.{" "}
						{newsletterFormDisabled}
					</p>
				</div>
				{!newsletterFormDisabled && (
					<NewsletterSignupForm htmlForId="hero_newsletter_signup_form" />
				)}
			</div>
			<GradientBackgroundParagraph
				className="lg:text-2xl text-center"
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
				<div className="flex flex-col md:grid md:h-[48rem] grid-cols-12 grid-rows-2 w-full md:gap-5 relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:from-background/95 after:z-10">
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
				<div className="flex flex-col md:grid grid-cols-12 grid-rows-4 md:px-10 2xl:p-0 2xl:w-3/4 gap-5 relative">
					{/* Resolution */}
					<FeatureCard hoverEffect={true} className="col-start-1 col-span-4">
						<div className="flex justify-around items-center h-full flex-col gap-5">
							<h3 className="text-4xl lg:text-5xl xl:text-6xl text-center uppercase font-semibold">
								Any
							</h3>
							<AnyTopic />
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
							<h3 className="text-4xl lg:text-5xl xl:text-6xl text-center uppercase font-semibold text-white">
								Show off your gear
							</h3>
							<p className="text-center text-xl lg:text-3xl w-3/4 text-white">
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
								<ShowcaseSVG className="w-full h-full" />
							</div>
							<p className="text-center text-xl lg:text-3xl">
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
								{/* <div className="w-14 h-14 bg-background/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
									<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[15px] border-l-foreground/30"></div>
								</div> */}
								<Image
									alt="photo of a an old car parked on the side of a street"
									src={imageThree}
								/>
							</div>
							<h3 className="text-3xl lg:text-4xl xl:text-5xl text-center font-semibold">
								Video
							</h3>
							<p className="text-center text-xl lg:text-3xl">
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
							<div className="bg-gradient-to-b from-gradient2-from to-gradient2-mid w-full rounded-2xl py-1.5 lg:py-3">
								<h3 className="text-4xl lg:text-5xl xl:text-6xl text-center uppercase font-semibold text-background">
									High res
								</h3>
							</div>
							<p className="text-center text-xl lg:text-3xl">
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
							<h3 className="text-4xl lg:text-5xl xl:text-6xl text-center uppercase font-semibold">
								Library
							</h3>
							<p className="text-center text-xl lg:text-3xl">
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
			>
				<div className="flex flex-col md:grid gap-10 md:gap-0 grid-cols-11 grid-rows-3 w-3/4">
					<div className="w-full h-full flex flex-col justify-center items-center col-start-7 col-span-5 md:pl-5 lg:p-0">
						<div className="w-16 h-16 text-gradient1-mid md:hidden mb-4">
							<CheckIcon />
						</div>
						<EarnStep
							title="Get started"
							description="Starting is quick and easy. Just fill out some required information in order to setup your store and you're done."
						/>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center col-start-1 col-span-5 row-start-2 row-span-1 md:pr-5 lg:p-0">
						<div className="w-16 h-16 text-gradient2-mid md:hidden mb-4">
							<PlusIcon />
						</div>
						<EarnStep
							title="Submit your art"
							description="Tell us more about the art pieces you would like to sell."
						/>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center col-start-7 col-span-5 row-start-3 row-span-1 md:pl-5 lg:p-0">
						<div className="w-16 h-16 text-gradient3-mid md:hidden mb-4">
							<DollarIcon />
						</div>
						<EarnStep
							title="Start earning"
							description="You're all set, now just remember to stay active, engage with out community and be patient."
						/>
					</div>
					<div className="hidden md:flex flex-col justify-center items-center col-start-6 col-span-1 row-start-1 row-span-3">
						<div className="w-0.5 h-40 bg-gradient-to-t from-foreground/20"></div>
						<div className="w-12 h-12 text-gradient1-mid">
							<CheckIcon />
						</div>
						<div className="h-64 border border-foreground/20 border-dashed background"></div>
						<div className="w-12 h-12 text-gradient2-mid">
							<PlusIcon />
						</div>
						<div className="h-64 border border-foreground/20 border-dashed background"></div>
						<div className="w-12 h-12 text-gradient3-mid">
							<DollarIcon />
						</div>
						<div className="w-0.5 h-40 bg-gradient-to-b from-foreground/20"></div>
					</div>
				</div>
			</Section>
			{!newsletterFormDisabled && (
				<div className="mt-32 mb-24">
					<NewsletterSignupForm htmlForId="footer_newsletter_signup_form" />
				</div>
			)}
		</main>
	);
}
