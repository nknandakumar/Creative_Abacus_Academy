"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";

export default function ExpandableCardDemo() {
	const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
		null
	);
	const id = useId();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}

		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (
		<>
			<AnimatePresence>
				{active && typeof active === "object" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/20 h-full w-full z-10"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{active && typeof active === "object" ? (
					<div className="fixed inset-0  grid place-items-center z-[100]">
						<motion.button
							key={`button-${active.title}-${id}`}
							layout
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
								transition: {
									duration: 0.05,
								},
							}}
							className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
							onClick={() => setActive(null)}
						>
							<CloseIcon />
						</motion.button>
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
						>
							<motion.div layoutId={`image-${active.title}-${id}`}>
								<img
									width={200}
									height={200}
									src={active.src}
									alt={active.title}
									className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
								/>
							</motion.div>
							<div>
								<div className="flex flex-col gap-2 p-4">
									<motion.h3
										layoutId={`title-${active.title}-${id}`}
										className="font-medium text-neutral-700 dark:text-neutral-200 text-2xl mb-2"
									>
										{active.title}
									</motion.h3>
									<motion.p
										layoutId={`description-${active.description}-${id}`}
										className="text-neutral-600 dark:text-neutral-400 text-base mb-2"
									>
										{active.description}
									</motion.p>
									<motion.p className="text-neutral-600 dark:text-neutral-400 text-base mt-2">
										{active.about}
									</motion.p>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
			<ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
				{cards.map((card, index) => (
					<motion.div
						layoutId={`card-${card.title}-${id}`}
						key={card.title}
						onClick={() => setActive(card)}
						className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
					>
						<div className="flex gap-4 flex-col  w-full">
							<motion.div layoutId={`image-${card.title}-${id}`}>
								<img
									width={100}
									height={100}
									src={card.src}
									alt={card.title}
									className="h-60 w-full  rounded-lg object-cover object-top"
								/>
							</motion.div>
							<div className="flex justify-center items-center flex-col">
								<motion.h3
									layoutId={`title-${card.title}-${id}`}
									className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
								>
									{card.title}
								</motion.h3>
								<motion.p
									layoutId={`description-${card.description}-${id}`}
									className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
								>
									{card.description}
								</motion.p>
							</div>
						</div>
					</motion.div>
				))}
			</ul>
		</>
	);
}

export const CloseIcon = () => {
	return (
		<motion.svg
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.05,
				},
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-4 w-4 text-black"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</motion.svg>
	);
};

const cards = [
	{
		title: "Abacus Levels 0–8",
		description: "Step-by-step finger abacus training & mental visualization",
		about:
			"Our Abacus program covers all levels from beginner to advanced, helping children develop strong mental math skills and confidence.",
		src: "https://placehold.co/400x200/EEE/31343C?text=Abacus",
	},
	{
		title: "Vedic Maths",
		description: "Ancient speed math techniques for accuracy & fun",
		about:
			"Vedic Maths introduces children to ancient Indian calculation techniques, making math faster and more enjoyable.",
		src: "https://placehold.co/400x200/EEE/31343C?text=Vedic+Maths",
	},
	{
		title: "Jolly Phonics",
		description: "Fun and effective way to learn to read and write",
		about:
			"Jolly Phonics helps children master reading and writing through engaging, multi-sensory activities.",
		src: "https://placehold.co/400x200/EEE/31343C?text=Jolly+Phonics",
	},
	{
		title: "Handwriting Classes",
		description: "Improve legibility and speed for all ages",
		about:
			"Our handwriting classes focus on improving clarity, speed, and style for students of all ages.",
		src: "https://placehold.co/400x200/EEE/31343C?text=Handwriting",
	},
	{
		title: "Language Basics",
		description: "Foundational understanding of various languages",
		about:
			"Language Basics introduces children to the fundamentals of different languages, building a strong foundation for future learning.",
		src: "https://placehold.co/400x200/EEE/31343C?text=Language+Basics",
	},
	{
		title: "NTT Training",
		description: "Comprehensive course for aspiring nursery teachers",
		about:
			"Our NTT Training program prepares aspiring teachers with the skills and knowledge needed for early childhood education.",
		src: "https://placehold.co/400x200/EEE/31343C?text=NTT+Training",
	},
];
