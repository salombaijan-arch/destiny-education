"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import IntroAnimation from "@/components/ui/scroll-morph-hero";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";
import { Cta4 } from "@/components/ui/cta-4";
import FooterExample from "@/components/ui/footer-1";

const SECTION_HEADER_TRANSITION = { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const };

function SectionHeader({ badge, title, description }: { badge: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={SECTION_HEADER_TRANSITION}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center max-w-[540px] mx-auto"
    >
      <div className="border py-1 px-4 rounded-lg text-sm">{badge}</div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-5">{title}</h2>
      {description && <p className="text-center mt-5 text-muted-foreground">{description}</p>}
    </motion.div>
  );
}


const COURSE_TABS = [
  {
    label: "For Students",
    subtitle: "Languages & Sciences",
    courses: [
      {
        name: "English",
        tag: "IELTS · CEFR · Kids English",
        description: "Unlock global opportunities with our comprehensive English programs! From fun, interactive lessons for kids to intensive IELTS and CEFR exam preparation, we help learners of all ages achieve fluency and confidence.",
      },
      {
        name: "Uzbek",
        tag: "Grammar · Conversation",
        description: "Master the richness of the Uzbek language. Whether you are refining your grammar and writing skills for school or learning conversational basics, our engaging lessons make connecting with the culture easier than ever.",
      },
      {
        name: "Russian",
        tag: "Kids & Adults",
        description: "Build strong, practical communication skills. We offer tailored Russian classes that make learning the alphabet and grammar fun for children, while providing real-world conversational fluency for adults.",
      },
      {
        name: "Turkish",
        tag: "Speaking · Listening · Culture",
        description: "Step into the vibrant world of the Turkish language! Our interactive classes focus on speaking, listening, and cultural nuances, perfect for students planning to study abroad, travel, or expand their horizons.",
      },
      {
        name: "Arabic",
        tag: "Reading · Writing · Speaking",
        description: "Discover the beauty of Arabic. Our structured lessons carefully guide you through reading, writing, and speaking, whether your goal is academic achievement, travel, or personal growth.",
      },
      {
        name: "Korean",
        tag: "Hangul · Conversation",
        description: "Say Annyeonghaseyo to your new favorite language! Designed for K-culture fans and future exchange students alike, our Korean course covers everything from the Hangul alphabet to everyday conversational fluency.",
      },
      {
        name: "Math",
        tag: "Grades · Exams · Logic",
        description: "Make numbers your superpower! Our math classes break down complex concepts into easy-to-understand steps, helping students boost their school grades, prepare for exams, and develop strong logical thinking.",
      },
    ],
  },
  {
    label: "For Kids",
    subtitle: "Development & Fun",
    courses: [
      {
        name: "Chess & Checkers",
        tag: "Strategy · Focus · Problem-Solving",
        description: "Develop sharp minds and strategic thinking! Through the fun of board games, children learn patience, problem-solving, and concentration in a playful, supportive environment.",
      },
      {
        name: "School Preparation",
        tag: "Reading · Math · Social Skills",
        description: "Give your little ones the best start possible. Our School Preparation program focuses on foundational reading, basic math, and social skills to ensure they step into their first classroom with joy and confidence.",
      },
    ],
  },
  {
    label: "For Women",
    subtitle: "Vocational & Practical Skills",
    courses: [
      {
        name: "Home Nursing & Massage",
        tag: "Hands-On · Career · Care",
        description: "Empower yourself with valuable, hands-on skills. This specialized program covers essential home nursing techniques and professional massage therapy (for adults and kids), opening doors to new careers or helping you care for loved ones.",
      },
      {
        name: "Babysitting",
        tag: "Child Care · Safety · Activities",
        description: "Turn your love for children into a rewarding career or a valuable life skill! Our comprehensive babysitting course covers essential child care techniques, safety protocols, and engaging activities, ensuring you are fully prepared to care for kids of all ages with confidence.",
      },
    ],
  },
];

function CoursesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = COURSE_TABS[activeTab];

  return (
    <section className="py-24 px-6">
      <div className="mb-12">
        <SectionHeader
          badge="Our Courses"
          title="Explore Our Learning Pathways"
          description="Discover engaging, practical classes tailored specifically for students, children, and women. Convenient schedules, expert instructors, and a supportive environment await."
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-xl border bg-muted p-1 gap-1">
          {COURSE_TABS.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === i
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
        {tab.subtitle}
      </p>

      {/* Course cards */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
      >
        {tab.courses.map((course) => (
          <div
            key={course.name}
            className="rounded-2xl border bg-background p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-foreground text-lg">{course.name}</h3>
              <span className="text-xs text-primary font-medium">{course.tag}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

const testimonials: Testimonial[] = [
  { text: "We deployed 12 NOVA units on our assembly line in Q3. Within 60 days, throughput increased 34% with zero quality escapes. Fastest ROI we've ever seen on automation.", image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Sarah Chen", role: "VP Operations, NovaTech Industries" },
  { text: "The 10-hour battery was the deciding factor. Every robot we'd tested before required constant swap-outs. NOVA runs the full shift and is ready again after scheduled breaks.", image: "https://randomuser.me/api/portraits/men/32.jpg", name: "Marcus Webb", role: "Director of Logistics, Apex Fulfillment" },
  { text: "We trained NOVA on our door-panel sub-assembly in six hours. By hour eight it was outperforming our fastest operators on cycle time. The learning curve is genuinely remarkable.", image: "https://randomuser.me/api/portraits/women/68.jpg", name: "Dr. Priya Nair", role: "Head of Mfg. Engineering, Stellaris Auto" },
  { text: "We've benchmarked everything on the market. At this price point, the combination of dexterity, runtime, and AI capability is in a class of its own. Nothing else comes close.", image: "https://randomuser.me/api/portraits/men/75.jpg", name: "James Okafor", role: "CEO, Harbor Robotics Lab" },
  { text: "NOVA's precision handling of sterile supplies and lab samples reduced our delivery errors by 91%. Our nursing staff now focuses entirely on patients. The impact has been profound.", image: "https://randomuser.me/api/portraits/women/22.jpg", name: "Linda Park", role: "Dir. Facility Ops, MedCore Health" },
  { text: "The ND Intelligence fleet dashboard is exceptional — real-time unit status, predictive maintenance alerts, remote task deployment. Managing 40 units across three sites is seamless.", image: "https://randomuser.me/api/portraits/men/58.jpg", name: "Ahmed Al-Rashid", role: "CTO, Gulf Industrial Group" },
  { text: "Produce handling requires touching delicate items without bruising. NOVA's force-sensing hands dropped our rejection rate from 8% to under 1% in the first month of deployment.", image: "https://randomuser.me/api/portraits/women/12.jpg", name: "Emma Thornton", role: "Plant Manager, Cascade Foods" },
  { text: "We piloted NOVA for container content sorting and hit 99.2% accuracy in week one. We're scaling to 200 units across our Pacific terminals in 2026. This is the real deal.", image: "https://randomuser.me/api/portraits/men/41.jpg", name: "Carlos Rivera", role: "Head of Automation, Pacific Ports" },
  { text: "PCB component handling is our most sensitive task. NOVA's 3 mN tactile sensitivity is no marketing claim — zero ESD incidents and zero component damage across 180,000 handled parts.", image: "https://randomuser.me/api/portraits/women/85.jpg", name: "Yuki Tanaka", role: "R&D Lead, Quantum Electronics" },
];

const galleryImages = [
  { title: "All Students Lesson",       thumbnail: "/gallery-photos/all-students-lesson 1.jpg" },
  { title: "Tablet Learning",           thumbnail: "/gallery-photos/boy-girls-sitting-desk-looking-tablet 1.jpg" },
  { title: "Children's Massage",        thumbnail: "/gallery-photos/boy-toddler-relaxes-from-therapeutic-massage-physiotherapist-working-with-patient-clinic-treat-back-child 1.jpg" },
  { title: "Close-Up Classroom",        thumbnail: "/gallery-photos/close-up-students-classroom 1.jpg" },
  { title: "Teacher Explaining",        thumbnail: "/gallery-photos/confident-teacher-explaining-lesson-pupils 1.jpg" },
  { title: "Student with Books",        thumbnail: "/gallery-photos/full-shot-student-looking-books 1.jpg" },
  { title: "Girl Presenting",           thumbnail: "/gallery-photos/girl-presenting-class 1.jpg" },
  { title: "English Class",             thumbnail: "/gallery-photos/kids-classroom-taking-english-class 1.jpg" },
  { title: "Planets Lesson",            thumbnail: "/gallery-photos/kids-learning-about-planets-classroom 1.jpg" },
  { title: "Classroom Selfie",          thumbnail: "/gallery-photos/kids-taking-selfie-classroom 1.jpg" },
  { title: "Raising Hands",             thumbnail: "/gallery-photos/kids-wanting-answer-question-class 1.jpg" },
  { title: "Group Study",               thumbnail: "/gallery-photos/medium-shot-kids-cheating-school 1.jpg" },
  { title: "Math Teacher",              thumbnail: "/gallery-photos/pleased-young-female-math-teacher-wearing-glasses-standing-profile-view-front-chalkboard-holding-russian-alphabet-letter-fans-looking-front-classroom 1.jpg" },
  { title: "Portrait Teacher",          thumbnail: "/gallery-photos/portrait-female-teacher-classroom 1.jpg" },
  { title: "Baby Massage",              thumbnail: "/gallery-photos/professional-female-masseuse-makes-massage-little-baby-children-s-massage-couch-modern-cozy-room 1.jpg" },
  { title: "Our Center",                thumbnail: "/gallery-photos/room-interior-design 1.jpg" },
  { title: "School Test",               thumbnail: "/gallery-photos/side-view-kid-cheating-school-test 1.jpg" },
  { title: "Numbers Lesson",            thumbnail: "/gallery-photos/smiling-young-blonde-female-teacher-wearing-glasses-sitting-desk-with-school-supplies-classroom-looking-front-showing-small-square-shaped-numbers-five-zero 1.jpg" },
  { title: "Blackboard Class",          thumbnail: "/gallery-photos/smiling-young-female-teacher-standing-front-blackboard-holding-mini-blackboard-classroom 1.jpg" },
  { title: "English Teacher",           thumbnail: "/gallery-photos/teacher-holding-english-class 1.jpg" },
  { title: "English Class 2",           thumbnail: "/gallery-photos/teacher-holding-english-class-2 1.jpg" },
  { title: "Science Class",             thumbnail: "/gallery-photos/woman-with-flask-looking-kids-class 1.jpg" },
  { title: "Thumbs Up Teacher",         thumbnail: "/gallery-photos/young-woman-teacher-wearing-glasses-standing-near-blackboard-classroom-explaining-lesson-showing-thumb-up-smiling-confident 1.jpg" },
];

const galleryRow1 = galleryImages.slice(0, 12);
const galleryRow2 = galleryImages.slice(12);

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── 0 · Scroll Morph Hero ──────────────────────────────────────── */}
      <div className="w-full h-[800px] relative">
        <IntroAnimation />
      </div>

      {/* ── 1 · About Us ──────────────────────────────────────────────── */}
      <HeroHighlight>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Welcome to{" "}
          <Highlight className="text-foreground">
            Destiny Education
          </Highlight>
          , where learning knows no age limit! Our mission is simple: to create a warm, inspiring space where everyone in our community can thrive and grow.
        </motion.h1>
      </HeroHighlight>

      {/* ── 2 · Courses ───────────────────────────────────────────────── */}
      <CoursesSection />

      {/* ── 3 · Scroll Velocity — Gallery ────────────────────────────── */}
      <section className="py-24 overflow-hidden">
        <div className="mb-12">
          <SectionHeader
            badge="Photo Gallery"
            title="Life in our center"
            description=""
          />
        </div>
        <div className="flex flex-col" style={{ gap: "40px" }}>
          {([{ images: galleryRow1, velocity: 1.5 }, { images: galleryRow2, velocity: -1.5 }] as const).map(({ images, velocity }, i) => (
            <ScrollVelocity key={i} velocity={velocity}>
              {images.map(({ title, thumbnail }) => (
                <div
                  key={title}
                  className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem] overflow-hidden rounded-xl flex-shrink-0"
                >
                  <img
                    src={thumbnail}
                    alt={title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </ScrollVelocity>
          ))}
        </div>
      </section>

      {/* ── 4 · Testimonials ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto">
          <SectionHeader
            badge="Student Testimonials"
            title="What Our Students Say"
            description="Real experiences and genuine feedback from the learners who make our educational center so special."
          />

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn}  duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      {/* ── 5 · CTA ───────────────────────────────────────────────────── */}
      <Cta4
        title="Ready to Start Your Learning Journey?"
        description="Join the Destiny Education family today! Whether you are picking up a new language, giving your child a head start, or learning a new profession, we are here to help."
        buttonText="Message Us on Telegram"
        buttonUrl="https://t.me/DESTINY_EDUCATION1"
        items={[
          "Optimal Learning Schedule",
          "Education for the Whole Family",
          "Practical, Real-World Skills",
          "Welcoming & Supportive Environment",
          "Expert Instruction",
        ]}
      />

      {/* ── 6 · Footer ────────────────────────────────────────────────── */}
      <FooterExample />

    </main>
  );
}
