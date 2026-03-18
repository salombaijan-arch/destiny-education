import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const items = [
  { id: "1", title: "What is NOVA?", content: "NOVA is New Destiny's full-shift humanoid robot — 170 cm, 52 kg, engineered to run a complete 10-hour work shift without recharging. It's the only robot at this price point designed around real operational demands, not lab demos." },
  { id: "2", title: "What can NOVA do?", content: "Parts feeding, assembly line support, warehouse logistics, quality inspection, material handling, and more. If it requires hands and judgment, NOVA can be trained on it in under 8 hours using the ND Intelligence platform." },
  { id: "3", title: "How does NOVA learn?", content: "The ND Intelligence platform combines imitation learning, reinforcement learning, and large vision models. Demonstrate a task once; NOVA generalizes and improves autonomously. New task packages deploy over-the-air — no specialist required." },
  { id: "4", title: "Does NOVA fit our facility?", content: "No infrastructure changes required. NOVA's 170 cm frame navigates existing doorways, staircases, and workstations. It interfaces with standard tooling and integrates with your WMS and ERP via REST API out of the box." },
  { id: "5", title: "What does 10-hour battery mean?", content: "Competitors run 1–2 hours per charge. NOVA's 3.1 kWh pack covers a full factory shift. Dock-and-charge bays replenish during scheduled breaks, so your fleet is always ready. Zero shift interruptions from battery swaps." },
  { id: "6", title: "How precise are NOVA's hands?", content: "22 degrees of freedom per hand with tactile sensors sensitive to 3 millinewtons — fine enough to sort PCB components without damage and handle fragile produce without bruising. Each finger is independently actuated with real-time force feedback." },
  { id: "7", title: "What does NOVA cost?", content: "NOVA starts at $29,900 per unit, designed to deliver ROI within 18 months at average US labor costs. Enterprise fleet pricing and a $999/month subscription plan are available. All tiers include 24/7 remote monitoring and annual hardware service." },
  { id: "8", title: "Is NOVA safe near people?", content: "NOVA's collision detection responds in under 12 ms. Spatial awareness and proximity sensors enable certified human-robot collaboration. Every unit is ISO 10218 and ISO/TS 15066 compliant and ships with a full third-party safety audit report." },
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
