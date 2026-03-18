import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const items = [
  { id: "1", title: "Destiny Education nima?", content: "Destiny Education — Karmana tumanidagi zamonaviy ta'lim markazi. Biz har yoshdagi o'quvchilar uchun tillar, fanlar, kasbiy ko'nikmalar va bolalar rivojlanishi bo'yicha sifatli kurslar taqdim etamiz. Bizning maqsadimiz — har bir o'quvchining salohiyatini ro'yobga chiqarish." },
  { id: "2", title: "Qanday kurslar mavjud?", content: "Ingliz, o'zbek, rus, turk, arab va koreya tillari; matematika; shaxmat va shashka; maktabga tayyorgarlik; uy hamshiraligi va massaj; bolalar parvarishi. Har bir kurs tajribali o'qituvchilar tomonidan o'qitiladi." },
  { id: "3", title: "Dars jadvali qanday?", content: "Har bir kurs uchun qulay jadval tuziladi. Ertalabki, tushki va kechki guruhlar mavjud — o'quvchilarning maktab va ish jadvaliga moslashtirilgan. Batafsil ma'lumot uchun markazimizga murojaat qiling." },
  { id: "4", title: "Yoshga chegara bormi?", content: "Yo'q! Destiny Education'da bolalar (3 yoshdan), o'quvchilar, talabalar va kattalarga mo'ljallangan kurslar mavjud. Har bir yoshga va darajaga mos guruhlar tashkil etiladi." },
  { id: "5", title: "O'qituvchilar haqida", content: "Barcha o'qituvchilarimiz o'z sohalari bo'yicha malakali mutaxassislar. Ular nafaqat bilimli, balki o'quvchilarga nisbatan mehribon va sabr-toqatli. Har bir dars qiziqarli va samarali o'tishiga kafolat beramiz." },
  { id: "6", title: "Kurslar narxi qancha?", content: "Kurslar narxi turi va davomiyligiga qarab farq qiladi. Batafsil narxlar ro'yxati uchun markazimizga tashrif buyuring yoki Telegram orqali bog'laning. Oilaviy chegirmalar va maxsus takliflar mavjud." },
  { id: "7", title: "Qanday natijani kutish mumkin?", content: "Ko'plab o'quvchilarimiz IELTS va CEFR imtihonlarida yuqori ball olgan, chet elda o'qish imkoniyatiga ega bo'lgan, yoki yangi kasb egallagan. Natija o'quvchining qat'iyati va muntazam qatnashiga bog'liq." },
  { id: "8", title: "Markazga qanday yetib borish mumkin?", content: "Markazimiz Karmana tumani, \"Xalqlar do'stligi\" ko'chasi, 37-uyda joylashgan. Telegram: @DESTINY_EDUCATION1. Telefon: +998 93 208 30 00 yoki +998 50 003 50 22." },
];

export function Accordion05() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="last:border-b">
            <AccordionTrigger className="text-left pl-6 md:pl-14 overflow-hidden text-foreground/20 duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-primary [&>svg]:hidden">
              <div className="flex flex-1 items-start gap-4">
                <p className="text-xs">{item.id}</p>
                <h1 className={`uppercase relative text-center text-3xl md:text-5xl`}>{item.title}</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 pl-6 md:px-20">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
