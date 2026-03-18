"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, BookOpen, MessageCircle, Plane, Moon, Smile, Calculator, Trophy, School, Heart, Baby } from "lucide-react";
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
    label: "O'quvchilar uchun",
    subtitle: "Tillar va Fanlar",
    courses: [
      { icon: Globe,          name: "Ingliz tili",        tag: "IELTS · CEFR · Bolalar uchun ingliz tili", description: "Keng qamrovli ingliz tili dasturlarimiz bilan global imkoniyatlar eshigini oching! Bolalar uchun qiziqarli va interaktiv darslardan tortib, intensiv IELTS va CEFR imtihoniga tayyorgarlikacha — biz har yoshdagi o'quvchilarga ravonlik va ishonchlilik kasb etishga yordam beramiz." },
      { icon: BookOpen,       name: "O'zbek tili",        tag: "Grammatika · Suhbat", description: "O'zbek tilining boyligini o'zganing. Maktab uchun grammatika va yozuv ko'nikmalaringizni takomillashtirasizmi yoki asosiy suhbat ko'nikmalarini o'rganasizmi — bizning qiziqarli darslarimiz madaniyat bilan bog'lanishni har qachongidan oson qiladi." },
      { icon: MessageCircle,  name: "Rus tili",           tag: "Bolalar va Kattalar uchun", description: "Kuchli, amaliy muloqot ko'nikmalarini rivojlantiring. Biz bolalar uchun alfavit va grammatikani o'rganishni qiziqarli qiladigan, kattalar uchun esa haqiqiy hayotda muloqot qobiliyatini beruvchi moslashtirilgan rus tili darslarini taqdim etamiz." },
      { icon: Plane,          name: "Turk tili",          tag: "Gapirish · Tinglash · Madaniyat", description: "Turk tilining rang-barang olamiga qadam qo'ying! Bizning interaktiv darslarimiz gapirish, tinglash va madaniy nozikliklarga e'tibor qaratadi — chet elda o'qishni, sayohat qilishni yoki ufqlarini kengaytirishni rejalashtirgan talabalar uchun ideal." },
      { icon: Moon,           name: "Arab tili",          tag: "O'qish · Yozish · Gapirish", description: "Arab tilining go'zalligini kashf eting. Bizning tizimli darslarimiz sizni o'qish, yozish va gapirish bo'yicha ehtiyotkorlik bilan yo'lga soladi — maqsadingiz akademik muvaffaqiyat, sayohat yoki shaxsiy o'sish bo'lishidan qat'i nazar." },
      { icon: Smile,          name: "Koreya tili",        tag: "Hangul · Suhbat", description: "Yangi sevimli tilingizga Annyeonghaseyo deying! K-madaniyat muxlislari va kelajakdagi almashinuv talabalari uchun mo'ljallangan koreyscha kursimiz Hangul alifbosidan tortib, kundalik suhbatgacha hamma narsani qamrab oladi." },
      { icon: Calculator,     name: "Matematika",         tag: "Baholar · Imtihonlar · Mantiq", description: "Raqamlarni kuchingizga aylantiring! Matematika darslarimiz murakkab tushunchalarni tushunarli qadamlarga ajratib, o'quvchilarga maktab baholarini oshirishga, imtihonlarga tayyorlanishga va kuchli mantiqiy fikrlashni rivojlantirishga yordam beradi." },
    ],
  },
  {
    label: "Bolalar uchun",
    subtitle: "Rivojlanish va Ko'ngil ochish",
    courses: [
      { icon: Trophy,   name: "Shaxmat va Shashka",    tag: "Strategiya · Diqqat · Muammo hal qilish", description: "O'tkir zehnlar va strategik fikrlashni rivojlantiring! Stol o'yinlarining qiziqarli dunyosi orqali bolalar o'ynab-kulgan holda sabr-toqat, muammo hal qilish va diqqatni mujassamlashtirishni o'rganadilar." },
      { icon: School,   name: "Maktabga Tayyorgarlik", tag: "O'qish · Matematika · Ijtimoiy Ko'nikmalar", description: "Farzandlaringizga eng yaxshi boshlanishni bering. Maktabga tayyorgarlik dasturimiz asosiy o'qish, matematika va ijtimoiy ko'nikmalarga e'tibor qaratib, ularning birinchi sinfga shod-xurram va ishonch bilan kirishini ta'minlaydi." },
    ],
  },
  {
    label: "Ayollar uchun",
    subtitle: "Kasbiy va Amaliy Ko'nikmalar",
    courses: [
      { icon: Heart, name: "Uy Hamshiraligi va Massaj", tag: "Amaliy · Kasb · G'amxo'rlik", description: "O'zingizni qimmatli, amaliy ko'nikmalar bilan kuchlantiring. Ushbu maxsus dastur asosiy uy hamshiraligi usullari va professional massaj terapiyasini (kattalar va bolalar uchun) qamrab oladi — yangi karyera eshiklarini ochadi yoki yaqinlaringizga g'amxo'rlik qilishga yordam beradi." },
      { icon: Baby,  name: "Bolalar Parvarishi",        tag: "Bolalar g'amxo'rligi · Xavfsizlik · Faoliyatlar", description: "Bolalarga bo'lgan muhabbatingizni foydali kasbga yoki qimmatli hayotiy ko'nikmaga aylantiring! Keng qamrovli bolalar parvarishi kursimiz asosiy bolalar g'amxo'rligi usullari, xavfsizlik protokollari va qiziqarli faoliyatlarni qamrab oladi." },
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
          badge="Kurslarimiz"
          title="O'quv Yo'nalishlarimizni Kashf Eting"
          description="O'quvchilar, bolalar va ayollar uchun maxsus moslashtirilgan qiziqarli, amaliy darslarni kashf eting. Qulay jadval, tajribali o'qituvchilar va qo'llab-quvvatlovchi muhit sizni kutmoqda."
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
            <course.icon className="size-7 text-primary" strokeWidth={1.5} />
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
  { text: "Destiny Education'da ingliz tilini o'rganish hayotimni o'zgartirdi. O'qituvchilar juda mehribon va sabrli — endi IELTS da 7.0 ball oldim!", image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Malika Yusupova", role: "IELTS o'quvchisi" },
  { text: "Farzandim maktabga tayyorgarlik kursidan keyin o'zgarib ketdi. Endi o'qishni va matematikani sevadi. Markazga juda minnatdormiz!", image: "https://randomuser.me/api/portraits/men/32.jpg", name: "Jasur Karimov", role: "Ota, Maktabga Tayyorgarlik kursi" },
  { text: "Turk tili darslarimiz juda qiziqarli o'tadi. Atigi 3 oyda oddiy suhbat qurishni o'rgandim. O'qituvchimiz Dilnoza opa juda ajoyib!", image: "https://randomuser.me/api/portraits/women/68.jpg", name: "Sarvinoz Toshmatova", role: "Turk tili o'quvchisi" },
  { text: "Shaxmat to'garagiga qatnashganimdan beri o'g'limning diqqati va mantiqiy fikrlashi sezilarli darajada yaxshilandi. Ajoyib dastur!", image: "https://randomuser.me/api/portraits/men/75.jpg", name: "Bobur Hasanov", role: "Ota, Shaxmat to'garagi" },
  { text: "Massaj kursini tugatib, uy sharoitida qo'shimcha daromad qila boshladim. Amaliy va foydali dastur uchun katta rahmat!", image: "https://randomuser.me/api/portraits/women/22.jpg", name: "Nafisa Rahimova", role: "Massaj kursi bitiruvchisi" },
  { text: "Arab tilini o'rganish juda qiyin deb o'ylardim, lekin bu yerda juda tushunarli o'qitishadi. Endi Qur'onni to'g'ri o'qiy olaman.", image: "https://randomuser.me/api/portraits/men/58.jpg", name: "Sherzod Nazarov", role: "Arab tili o'quvchisi" },
  { text: "Koreya tilini K-drama tufayli o'rganishni boshladim. Destiny Education'dagi kurs mening kutganimdan ham yaxshiroq chiqdi!", image: "https://randomuser.me/api/portraits/women/12.jpg", name: "Zulfiya Mirzayeva", role: "Koreya tili o'quvchisi" },
  { text: "Matematika darslaridan keyin o'g'limning maktabdagi baholari sezilarli oshdi. O'qituvchi juda yaxshi tushuntiradi, tavsiya qilaman!", image: "https://randomuser.me/api/portraits/men/41.jpg", name: "Ulugbek Tursunov", role: "Ota, Matematika kursi" },
  { text: "Bolalar parvarishi kursini tugatib, ishonch bilan bola qaray oladigan bo'ldim. Endi qo'shimcha ish topa olaman. Rahmat Destiny Education!", image: "https://randomuser.me/api/portraits/women/85.jpg", name: "Dilrabo Ismoilova", role: "Bolalar Parvarishi kursi bitiruvchisi" },
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
      <div className="w-full h-[500px] md:h-[800px] relative">
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
          <Highlight className="text-foreground">
            Destiny Education
          </Highlight>
          ga xush kelibsiz, bu yerda o&apos;rganishning yoshi yo&apos;q! Bizning vazifamiz oddiy: hamjamiyatimizdagi har bir kishi rivojlanib, o&apos;sishi uchun iliq, ilhomli muhit yaratish.
        </motion.h1>
      </HeroHighlight>

      {/* ── 2 · Courses ───────────────────────────────────────────────── */}
      <CoursesSection />

      {/* ── 3 · Scroll Velocity — Gallery ────────────────────────────── */}
      <section className="py-24 overflow-hidden">
        <div className="mb-12">
          <SectionHeader
            badge="Foto Galereya"
            title="Markazimizda hayot"
            description=""
          />
        </div>
        <div className="flex flex-col" style={{ gap: "40px" }}>
          {([{ images: galleryRow1, velocity: 1.5 }, { images: galleryRow2, velocity: -1.5 }] as const).map(({ images, velocity }, i) => (
            <ScrollVelocity key={i} velocity={velocity}>
              {images.map(({ title, thumbnail }) => (
                <div
                  key={title}
                  className="relative h-[350px] w-[250px] overflow-hidden rounded-xl flex-shrink-0"
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
            badge="O'quvchilar Fikrlari"
            title="O'quvchilarimiz Nima Deydi"
            description="Ta'lim markazimizni shunchalik maxsus qiladigan o'quvchilarning haqiqiy tajribalari va samimiy fikr-mulohazalari."
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
        title="O'quv Sayohatingizni Boshlashga Tayyormisiz?"
        description="Bugun Destiny Education oilasiga qo'shiling! Yangi til o'rganyapsizmi, farzandingizga boshlanish berayapsizmi yoki yangi kasb egallayapsizmi — biz yordam berishga tayyormiz."
        buttonText="Telegramda Yozing"
        buttonUrl="https://t.me/destiny_education1"
        items={[
          "Maqbul O'quv Jadvali",
          "Butun Oila uchun Ta'lim",
          "Amaliy, Hayotiy Ko'nikmalar",
          "Iliq va Qo'llab-quvvatlovchi Muhit",
          "Malakali O'qituvchilar",
        ]}
      />

      {/* ── 6 · Footer ────────────────────────────────────────────────── */}
      <FooterExample />

    </main>
  );
}
