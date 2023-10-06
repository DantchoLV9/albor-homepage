"use client";

import React from "react";
import { motion, useAnimate } from "framer-motion";
import useRandomInterval from "@/app/utils/useRandomInterval";

const ShowcaseSVG = ({ className }) => {
	const [scope, animate] = useAnimate();
	const finalDelay = [6000, 12000];
	const versionsDelay = [3000, 6000];
	const editsDelay = [4500, 9000];
	const rawDelay = [9000, 18000];
	useRandomInterval(() => {
		animate(
			"#final-pulse-path",
			{ strokeDashoffset: [null, 50, -430] },
			{ duration: 6, times: [0, 1, 1] }
		);
	}, ...finalDelay);
	useRandomInterval(() => {
		animate(
			"#versions-pulse-path",
			{ strokeDashoffset: [null, -230, 50] },
			{ duration: 3, times: [0, 1, 1] }
		);
	}, ...versionsDelay);
	useRandomInterval(() => {
		animate(
			"#edits-pulse-path",
			{ strokeDashoffset: [null, -341, 50] },
			{ duration: 4.5, times: [0, 1, 1] }
		);
	}, ...editsDelay);
	useRandomInterval(() => {
		animate(
			"#raw-pulse-path",
			{ strokeDashoffset: [null, 760, 50] },
			{ duration: 9, times: [0, 1, 1] }
		);
	}, ...rawDelay);
	return (
		<svg
			ref={scope}
			width="882"
			height="383"
			viewBox="0 0 882 383"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* Final */}
			<path
				d="M730.849 368.119V334.279H752.977V339.175H736.993V348.727H751.969V353.623H736.993V368.119H730.849ZM756.842 339.607V333.751H763.562V339.607H756.842ZM757.226 368.119V344.647H763.226V368.119H757.226ZM769.461 368.119V344.647H775.317V348.295C776.117 346.951 777.189 345.927 778.533 345.223C779.909 344.519 781.445 344.167 783.141 344.167C788.677 344.167 791.445 347.383 791.445 353.815V368.119H785.445V354.103C785.445 352.279 785.093 350.951 784.389 350.119C783.717 349.287 782.661 348.871 781.221 348.871C779.461 348.871 778.053 349.431 776.997 350.551C775.973 351.639 775.461 353.095 775.461 354.919V368.119H769.461ZM805.267 368.599C803.571 368.599 802.051 368.279 800.707 367.639C799.395 366.967 798.355 366.071 797.587 364.951C796.851 363.831 796.483 362.567 796.483 361.159C796.483 359.431 796.931 358.071 797.827 357.079C798.723 356.055 800.179 355.319 802.195 354.871C804.211 354.423 806.915 354.199 810.307 354.199H811.987V353.191C811.987 351.591 811.635 350.439 810.931 349.735C810.227 349.031 809.043 348.679 807.379 348.679C806.067 348.679 804.723 348.887 803.347 349.303C801.971 349.687 800.579 350.295 799.171 351.127L797.443 347.047C798.275 346.471 799.251 345.975 800.371 345.559C801.523 345.111 802.723 344.775 803.971 344.551C805.251 344.295 806.451 344.167 807.571 344.167C810.995 344.167 813.539 344.967 815.203 346.567C816.867 348.135 817.699 350.583 817.699 353.911V368.119H812.083V364.375C811.539 365.687 810.675 366.727 809.491 367.495C808.307 368.231 806.899 368.599 805.267 368.599ZM806.515 364.471C808.083 364.471 809.379 363.927 810.403 362.839C811.459 361.751 811.987 360.375 811.987 358.711V357.655H810.355C807.347 357.655 805.251 357.895 804.067 358.375C802.915 358.823 802.339 359.655 802.339 360.871C802.339 361.927 802.707 362.791 803.443 363.463C804.179 364.135 805.203 364.471 806.515 364.471ZM831.949 368.599C829.165 368.599 827.101 367.847 825.757 366.343C824.445 364.807 823.789 362.567 823.789 359.623V334.279H829.789V359.335C829.789 362.215 831.005 363.655 833.437 363.655C833.789 363.655 834.141 363.639 834.493 363.607C834.845 363.575 835.181 363.511 835.501 363.415L835.405 368.167C834.253 368.455 833.101 368.599 831.949 368.599Z"
				fill="#1F2937"
			/>
			<path
				d="M555 99H747C766.33 99 782 114.67 782 134V314.088"
				stroke="#CFCFCF"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			{/* 427.0736999511719 */}
			<motion.path
				id="final-pulse-path"
				strokeDasharray="50px, 430px"
				strokeDashoffset="-430"
				d="M555 99H747C766.33 99 782 114.67 782 134V314.088"
				stroke="red"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			{/* Versions */}
			<path
				d="M473.893 368.119L458.821 334.279H465.397L476.581 360.247L487.765 334.279H494.101L479.029 368.119H473.893ZM505.209 368.599C502.553 368.599 500.265 368.103 498.345 367.111C496.425 366.119 494.937 364.711 493.881 362.887C492.857 361.063 492.345 358.903 492.345 356.407C492.345 353.975 492.841 351.847 493.833 350.023C494.857 348.199 496.249 346.775 498.009 345.751C499.801 344.695 501.833 344.167 504.105 344.167C507.433 344.167 510.057 345.223 511.977 347.335C513.929 349.447 514.905 352.327 514.905 355.975V357.751H498.105C498.553 361.943 500.953 364.039 505.305 364.039C506.617 364.039 507.929 363.847 509.241 363.463C510.553 363.047 511.753 362.407 512.841 361.543L514.521 365.575C513.401 366.503 511.993 367.239 510.297 367.783C508.601 368.327 506.905 368.599 505.209 368.599ZM504.345 348.247C502.585 348.247 501.161 348.791 500.073 349.879C498.985 350.967 498.329 352.439 498.105 354.295H509.913C509.785 352.343 509.241 350.855 508.281 349.831C507.353 348.775 506.041 348.247 504.345 348.247ZM519.656 368.119V344.647H525.512V348.775C526.664 345.991 529.128 344.455 532.904 344.167L534.728 344.023L535.112 349.111L531.656 349.447C527.72 349.831 525.752 351.847 525.752 355.495V368.119H519.656ZM546.811 368.599C544.827 368.599 542.971 368.359 541.243 367.879C539.515 367.399 538.075 366.711 536.923 365.815L538.459 361.879C539.643 362.679 540.971 363.303 542.443 363.751C543.915 364.167 545.387 364.375 546.859 364.375C548.395 364.375 549.531 364.119 550.267 363.607C551.035 363.063 551.419 362.359 551.419 361.495C551.419 360.151 550.427 359.287 548.443 358.903L543.643 357.991C539.579 357.223 537.547 355.111 537.547 351.655C537.547 350.119 537.963 348.791 538.795 347.671C539.659 346.551 540.843 345.687 542.347 345.079C543.851 344.471 545.579 344.167 547.531 344.167C549.195 344.167 550.795 344.407 552.331 344.887C553.867 345.335 555.179 346.023 556.267 346.951L554.635 350.887C553.707 350.119 552.587 349.511 551.275 349.063C549.995 348.615 548.763 348.391 547.579 348.391C546.011 348.391 544.843 348.663 544.075 349.207C543.339 349.751 542.971 350.471 542.971 351.367C542.971 352.775 543.883 353.639 545.707 353.959L550.507 354.871C552.587 355.255 554.155 355.959 555.211 356.983C556.299 358.007 556.843 359.383 556.843 361.111C556.843 363.447 555.931 365.287 554.107 366.631C552.283 367.943 549.851 368.599 546.811 368.599ZM561.272 339.607V333.751H567.992V339.607H561.272ZM561.656 368.119V344.647H567.656V368.119H561.656ZM584.595 368.599C582.163 368.599 580.051 368.103 578.259 367.111C576.467 366.119 575.075 364.711 574.083 362.887C573.091 361.031 572.595 358.855 572.595 356.359C572.595 353.863 573.091 351.703 574.083 349.879C575.075 348.055 576.467 346.647 578.259 345.655C580.051 344.663 582.163 344.167 584.595 344.167C587.027 344.167 589.139 344.663 590.931 345.655C592.723 346.647 594.115 348.055 595.107 349.879C596.099 351.703 596.595 353.863 596.595 356.359C596.595 358.855 596.099 361.031 595.107 362.887C594.115 364.711 592.723 366.119 590.931 367.111C589.139 368.103 587.027 368.599 584.595 368.599ZM584.595 364.039C586.387 364.039 587.827 363.399 588.915 362.119C590.003 360.807 590.547 358.887 590.547 356.359C590.547 353.799 590.003 351.895 588.915 350.647C587.827 349.367 586.387 348.727 584.595 348.727C582.803 348.727 581.363 349.367 580.275 350.647C579.187 351.895 578.643 353.799 578.643 356.359C578.643 358.887 579.187 360.807 580.275 362.119C581.363 363.399 582.803 364.039 584.595 364.039ZM601.547 368.119V344.647H607.403V348.295C608.203 346.951 609.275 345.927 610.619 345.223C611.995 344.519 613.531 344.167 615.227 344.167C620.763 344.167 623.531 347.383 623.531 353.815V368.119H617.531V354.103C617.531 352.279 617.179 350.951 616.475 350.119C615.803 349.287 614.747 348.871 613.307 348.871C611.547 348.871 610.139 349.431 609.083 350.551C608.059 351.639 607.547 353.095 607.547 354.919V368.119H601.547ZM638.217 368.599C636.233 368.599 634.377 368.359 632.649 367.879C630.921 367.399 629.481 366.711 628.329 365.815L629.865 361.879C631.049 362.679 632.377 363.303 633.849 363.751C635.321 364.167 636.793 364.375 638.265 364.375C639.801 364.375 640.937 364.119 641.673 363.607C642.441 363.063 642.825 362.359 642.825 361.495C642.825 360.151 641.833 359.287 639.849 358.903L635.049 357.991C630.985 357.223 628.953 355.111 628.953 351.655C628.953 350.119 629.369 348.791 630.201 347.671C631.065 346.551 632.249 345.687 633.753 345.079C635.257 344.471 636.985 344.167 638.937 344.167C640.601 344.167 642.201 344.407 643.737 344.887C645.273 345.335 646.585 346.023 647.673 346.951L646.041 350.887C645.113 350.119 643.993 349.511 642.681 349.063C641.401 348.615 640.169 348.391 638.985 348.391C637.417 348.391 636.249 348.663 635.481 349.207C634.745 349.751 634.377 350.471 634.377 351.367C634.377 352.775 635.289 353.639 637.113 353.959L641.913 354.871C643.993 355.255 645.561 355.959 646.617 356.983C647.705 358.007 648.249 359.383 648.249 361.111C648.249 363.447 647.337 365.287 645.513 366.631C643.689 367.943 641.257 368.599 638.217 368.599Z"
				fill="#1F2937"
			/>
			<path
				d="M555 301.5V259C555 239.67 539.33 224 520 224H484C464.67 224 449 208.33 449 189V149"
				stroke="#CFCFCF"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			{/* 228.4713897705078 */}
			<motion.path
				id="versions-pulse-path"
				strokeDasharray="50px, 230px"
				strokeDashoffset="50"
				d="M555 301.5V259C555 239.67 539.33 224 520 224H484C464.67 224 449 208.33 449 189V149"
				stroke="green"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			{/* Edits */}
			<path
				d="M275.363 368.118V334.278H297.875V339.174H281.267V348.486H296.819V353.382H281.267V363.222H297.875V368.118H275.363ZM312.311 368.598C310.263 368.598 308.455 368.102 306.887 367.11C305.351 366.118 304.151 364.71 303.287 362.886C302.423 361.03 301.991 358.854 301.991 356.358C301.991 353.83 302.423 351.67 303.287 349.878C304.151 348.054 305.351 346.646 306.887 345.654C308.455 344.662 310.263 344.166 312.311 344.166C313.975 344.166 315.479 344.534 316.823 345.27C318.167 346.006 319.175 346.982 319.847 348.198V334.278H325.847V368.118H319.991V364.23C319.351 365.574 318.343 366.646 316.967 367.446C315.591 368.214 314.039 368.598 312.311 368.598ZM313.991 364.038C315.783 364.038 317.223 363.398 318.311 362.118C319.399 360.806 319.943 358.886 319.943 356.358C319.943 353.798 319.399 351.894 318.311 350.646C317.223 349.366 315.783 348.726 313.991 348.726C312.199 348.726 310.759 349.366 309.671 350.646C308.583 351.894 308.039 353.798 308.039 356.358C308.039 358.886 308.583 360.806 309.671 362.118C310.759 363.398 312.199 364.038 313.991 364.038ZM331.684 339.606V333.75H338.404V339.606H331.684ZM332.068 368.118V344.646H338.068V368.118H332.068ZM355.055 368.598C348.847 368.598 345.743 365.526 345.743 359.382V349.158H341.231V344.646H345.743V337.638H351.743V344.646H358.847V349.158H351.743V359.046C351.743 360.582 352.079 361.734 352.751 362.502C353.423 363.27 354.511 363.654 356.015 363.654C356.463 363.654 356.927 363.606 357.407 363.51C357.887 363.382 358.383 363.254 358.895 363.126L359.807 367.542C359.231 367.862 358.495 368.118 357.599 368.31C356.735 368.502 355.887 368.598 355.055 368.598ZM371.317 368.598C369.333 368.598 367.477 368.358 365.749 367.878C364.021 367.398 362.581 366.71 361.429 365.814L362.965 361.878C364.149 362.678 365.477 363.302 366.949 363.75C368.421 364.166 369.893 364.374 371.365 364.374C372.901 364.374 374.037 364.118 374.773 363.606C375.541 363.062 375.925 362.358 375.925 361.494C375.925 360.15 374.933 359.286 372.949 358.902L368.149 357.99C364.085 357.222 362.053 355.11 362.053 351.654C362.053 350.118 362.469 348.79 363.301 347.67C364.165 346.55 365.349 345.686 366.853 345.078C368.357 344.47 370.085 344.166 372.037 344.166C373.701 344.166 375.301 344.406 376.837 344.886C378.373 345.334 379.685 346.022 380.773 346.95L379.141 350.886C378.213 350.118 377.093 349.51 375.781 349.062C374.501 348.614 373.269 348.39 372.085 348.39C370.517 348.39 369.349 348.662 368.581 349.206C367.845 349.75 367.477 350.47 367.477 351.366C367.477 352.774 368.389 353.638 370.213 353.958L375.013 354.87C377.093 355.254 378.661 355.958 379.717 356.982C380.805 358.006 381.349 359.382 381.349 361.11C381.349 363.446 380.437 365.286 378.613 366.63C376.789 367.942 374.357 368.598 371.317 368.598Z"
				fill="#1F2937"
			/>
			<path
				d="M327 301V260.5C327 241.17 311.33 225.5 292 225.5H270C250.67 225.5 235 209.83 235 190.5V134C235 114.67 250.67 99 270 99H327"
				stroke="#CFCFCF"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			{/* 340.9570617675781 */}
			<motion.path
				id="edits-pulse-path"
				strokeDasharray="50px, 341px"
				strokeDashoffset="50"
				d="M327 301V260.5C327 241.17 311.33 225.5 292 225.5H270C250.67 225.5 235 209.83 235 190.5V134C235 114.67 250.67 99 270 99H327"
				stroke="blue"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			{/* RAW */}
			<path
				d="M39.9091 368.118V361.446H46.6291V368.118H39.9091ZM52.9193 368.118V334.278H67.6073C71.3193 334.278 74.1833 335.174 76.1993 336.966C78.2153 338.726 79.2233 341.206 79.2233 344.406C79.2233 346.934 78.5673 349.03 77.2553 350.694C75.9433 352.326 74.0553 353.43 71.5913 354.006C73.2233 354.518 74.5673 355.75 75.6233 357.702L81.2873 368.118H74.5193L68.6633 357.318C68.0873 356.262 67.3993 355.542 66.5993 355.158C65.8313 354.774 64.8393 354.582 63.6233 354.582H59.0633V368.118H52.9193ZM59.0633 350.022H66.5513C71.0313 350.022 73.2713 348.198 73.2713 344.55C73.2713 340.934 71.0313 339.126 66.5513 339.126H59.0633V350.022ZM81.5682 368.118L96.8802 334.278H101.92L117.232 368.118H110.992L107.632 360.294H91.1202L87.8082 368.118H81.5682ZM99.3282 340.95L93.2322 355.398H105.52L99.4242 340.95H99.3282ZM127.388 368.118L115.436 334.278H121.772L130.172 359.238L139.004 334.278H143.564L152.204 359.574L160.844 334.278H166.844L154.796 368.118H149.708L141.116 343.686L132.476 368.118H127.388Z"
				fill="#1F2937"
			/>
			<path
				d="M449 44V37C449 17.67 433.33 2 414 2H137.502C118.172 2 102.502 17.67 102.502 37V301"
				stroke="#CFCFCF"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			{/* 657.46923828125 */}
			<motion.path
				id="raw-pulse-path"
				strokeDasharray="50px, 660px"
				strokeDashoffset="50"
				d="M449 44V37C449 17.67 433.33 2 414 2H137.502C118.172 2 102.502 17.67 102.502 37V301"
				stroke="red"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			{/* Logo */}
			<path
				d="M360.331 91.6991L345.481 121.897H355.966H366.331L370.975 112.907L375.599 103.639L380.244 112.907L384.868 121.897H395.233H405.717L375.599 61.7804L360.331 91.6991Z"
				fill="#1F2937"
			/>
			<path
				d="M421.424 122.299C417.371 122.299 414.405 121.253 412.528 119.163C410.651 117.029 409.712 113.872 409.712 109.691V76.4747H419.376V109.307C419.376 112.72 420.891 114.427 423.92 114.427C424.389 114.427 424.837 114.405 425.264 114.363C425.733 114.32 426.181 114.235 426.608 114.107L426.48 121.595C424.859 122.064 423.173 122.299 421.424 122.299ZM450.417 122.299C448.198 122.299 446.193 121.808 444.401 120.827C442.651 119.845 441.35 118.544 440.497 116.923V121.595H431.025V76.4747H440.689V94.3947C441.627 92.9014 442.95 91.7281 444.657 90.8747C446.406 89.9787 448.326 89.5307 450.417 89.5307C453.147 89.5307 455.537 90.1921 457.585 91.5147C459.675 92.8374 461.297 94.7147 462.449 97.1467C463.601 99.5787 464.177 102.48 464.177 105.851C464.177 109.221 463.601 112.144 462.449 114.619C461.297 117.051 459.675 118.949 457.585 120.315C455.537 121.637 453.147 122.299 450.417 122.299ZM447.537 115.067C449.585 115.067 451.249 114.32 452.529 112.827C453.809 111.333 454.449 109.008 454.449 105.851C454.449 102.736 453.809 100.453 452.529 99.0027C451.249 97.5094 449.585 96.7627 447.537 96.7627C445.446 96.7627 443.761 97.5094 442.481 99.0027C441.201 100.453 440.561 102.736 440.561 105.851C440.561 109.008 441.201 111.333 442.481 112.827C443.761 114.32 445.446 115.067 447.537 115.067ZM485.191 122.299C481.82 122.299 478.876 121.637 476.359 120.315C473.884 118.949 471.964 117.051 470.599 114.619C469.234 112.144 468.551 109.221 468.551 105.851C468.551 102.523 469.234 99.6427 470.599 97.2107C471.964 94.7361 473.884 92.8374 476.359 91.5147C478.876 90.1921 481.82 89.5307 485.191 89.5307C488.562 89.5307 491.484 90.1921 493.959 91.5147C496.476 92.8374 498.418 94.7361 499.783 97.2107C501.191 99.6427 501.895 102.523 501.895 105.851C501.895 109.221 501.191 112.144 499.783 114.619C498.418 117.051 496.476 118.949 493.959 120.315C491.484 121.637 488.562 122.299 485.191 122.299ZM485.191 115.067C487.239 115.067 488.903 114.32 490.183 112.827C491.506 111.333 492.167 109.008 492.167 105.851C492.167 102.736 491.506 100.453 490.183 99.0027C488.903 97.5094 487.239 96.7627 485.191 96.7627C483.143 96.7627 481.479 97.5094 480.199 99.0027C478.919 100.453 478.279 102.736 478.279 105.851C478.279 109.008 478.919 111.333 480.199 112.827C481.479 114.32 483.143 115.067 485.191 115.067ZM507.775 121.595V90.1707H517.247V95.6107C518.74 91.9414 521.94 89.9147 526.847 89.5307L529.663 89.3387L530.239 97.4667L524.799 98.0427C520.02 98.5121 517.631 100.944 517.631 105.339V121.595H507.775Z"
				fill="#1F2937"
			/>
		</svg>
	);
};

export default ShowcaseSVG;
