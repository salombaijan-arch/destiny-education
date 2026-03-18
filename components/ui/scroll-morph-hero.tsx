"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue, useMotionValueEvent } from "framer-motion";

export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({ src, index, target }: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                <div className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200" style={{ backfaceVisibility: "hidden" }}>
                    <img src={src} alt={`hero-${index}`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
                <div className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <img src={src} alt={`hero-${index}`} className="h-full w-full object-cover" />
                </div>
            </motion.div>
        </motion.div>
    );
}

const TOTAL_IMAGES = 22;
const MAX_SCROLL = 3000;

const IMAGES = [
    "/hero-photos/authentic-scene-kids-playing 1.jpg",
    "/hero-photos/bonding-together-university-device-book-reading 1.jpg",
    "/hero-photos/concept-obtaining-higher-international-education-globe-graduation-cap-3d-render-illustration 1.jpg",
    "/hero-photos/covid-19-preventing-virus-health-healthcare-workers-quarantine-concept-young-doctor-female-nurse-blue-scrubs-protective-equipment-against-coronavirus-infection-give-medical-masks 1.jpg",
    "/hero-photos/cute-little-baby-bunny-costume-sitting-furry-rug-home 1.jpg",
    "/hero-photos/education-concept-smiling-brunette-girl-student-casual-clothes-holds-her-books-study-material 1.jpg",
    "/hero-photos/empty-modern-classroom 1.jpg",
    "/hero-photos/hallway-with-row-books-floor-door-that-says-library 1.jpg",
    "/hero-photos/impressed-young-female-teacher-sits-table-with-school-tools-raising-pen-classroom 1.jpg",
    "/hero-photos/kid-holding-hand-up-classroom 1.jpg",
    "/hero-photos/little-girl-teaching-ride-skateboard-wearing-helmet 1.jpg",
    "/hero-photos/modern-library-with-large-reading-area-there-are-many-bookshelves-comfortable-chairs-large-windows-that-let-natural-light 1.jpg",
    "/hero-photos/mother-hand-massaging-back-muscle-her-baby 1.jpg",
    "/hero-photos/smart-schoolboy-thinking-answer 1.jpg",
    "/hero-photos/smiling-business-woman-formal-wear-writes-flipchart-presentation-lecture-office 1.jpg",
    "/hero-photos/smiling-portrait-girl-holding-blue-border-frame-front-her-face-against-blue-backdrop 1.jpg",
    "/hero-photos/smiling-student-writing-maths-blackboard 1.jpg",
    "/hero-photos/student-preparing-exam-learning-lessons-school-library-making-research-laptop-browse-internet 1.jpg",
    "/hero-photos/teacher-brunette-instructor-with-computer-suit-whiteboard-classroom-crossing-hands 1.jpg",
    "/hero-photos/young-pretty-student-woman-with-backpack-exercise-books-isolated-white-wall 1.jpg",
    "/hero-photos/young-student-man-smiling-cheerfully-feeling-happy-pointing-side 1.jpg",
    "/hero-photos/young-student-using-computer-studying-online-education-online-learning 1.jpg",
];

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
            }
        };
        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);
        setContainerSize({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight });
        return () => observer.disconnect();
    }, []);

    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleWheel = (e: WheelEvent) => {
            const atBottom = scrollRef.current >= MAX_SCROLL && e.deltaY > 0;
            const atTop = scrollRef.current <= 0 && e.deltaY < 0;
            if (atBottom || atTop) return;
            e.preventDefault();
            const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };
        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;
            const atBottom = scrollRef.current >= MAX_SCROLL && deltaY > 0;
            const atTop = scrollRef.current <= 0 && deltaY < 0;
            if (atBottom || atTop) return;
            e.preventDefault();
            const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };
        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });
        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll]);

    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    const scatterPositions = useMemo(() => {
        return IMAGES.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useMotionValueEvent(smoothMorph, "change", setMorphValue);
    useMotionValueEvent(smoothScrollRotate, "change", setRotateValue);
    useMotionValueEvent(smoothMouseX, "change", setParallaxValue);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-background overflow-hidden">
            <div className="flex h-full w-full flex-col items-center justify-center" style={{ perspective: "1000px" }}>
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">Destiny Education</h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
                        We believe that quality education should be accessible, engaging, and deeply supportive—because helping you reach your full potential is our greatest destiny.
                    </p>
                </motion.div>
                {/* Logo centered with multiply blend */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10" style={{ isolation: "auto" }}>
                    <img
                        src="/destiny-logo.png"
                        alt="Destiny Education"
                        className="w-48 h-48 md:w-64 md:h-64 object-contain mix-blend-multiply"
                    />
                </div>

                <div className="relative z-20 flex items-center justify-center w-full h-full">
                    {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 70;
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);
                            const circleRadius = Math.min(minDimension * 0.35, 350);
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = { x: Math.cos(circleRad) * circleRadius, y: Math.sin(circleRad) * circleRadius, rotation: circleAngle + 90 };
                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                            const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;
                            const spreadAngle = isMobile ? 100 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);
                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = spreadAngle * 0.8;
                            const boundedRotation = -scrollProgress * maxRotation;
                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;
                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8,
                            };
                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }
                        return <FlipCard key={i} src={src} index={i} total={TOTAL_IMAGES} phase={introPhase} target={target} />;
                    })}
                </div>
            </div>
        </div>
    );
}
