import Image from "next/image";
import GradientBackgroundParagraph from "./components/GradientBackgroundParagraph/GradientBackgroundParagraph";
import NewsletterSignupForm from "./components/NewsletterSignupForm/NewsletterSignupForm";
import Section from "./components/Section/Section";
import imageOne from "./images/image1.jpg";
import imageTwo from "./images/image2.jpg";
import imageThree from "./images/image3.jpg";
import imageFour from "./images/image4.jpg";
import imageFive from "./images/image5.jpg";
import imageSix from "./images/image6.jpg";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import ShowcaseSVG from "./components/FeatureCard/ShowcaseSVG";

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
			<GradientBackgroundParagraph
				className="text-2xl"
				text="A picture is worth a thousand words"
			/>
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
			>
				<div className="grid grid-cols-12 grid-rows-4 w-4/5 gap-5 relative">
					{/* Resolution */}
					<FeatureCard className="col-start-1 col-span-4">
						<div className="flex justify-around items-center h-full flex-col gap-5">
							<h3 className="text-6xl text-center uppercase font-semibold">
								Any
							</h3>
							<div className="w-full bg-foreground/10 rounded-2xl py-3 px-5 text-3xl">
								<p className="text-center">Resolution</p>
							</div>
						</div>
					</FeatureCard>
					{/* Gear */}
					<FeatureCard className="col-start-5 col-span-8">
						<div className="flex justify-around items-center h-full flex-col justify-center items-center gap-5">
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
					<FeatureCard className="col-start-1 col-span-8 row-start-2 row-span-2">
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
					<FeatureCard className="col-start-9 col-span-4 row-start-2 row-span-2">
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
					<FeatureCard className="col-start-1 col-span-6 row-start-4">
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
					<FeatureCard className="col-start-7 col-span-6 row-start-4">
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
		</main>
	);
}
