import Link from "next/link";
import type { ReactNode } from "react";

export interface AreaFaq {
  q: string;
  a: string;
}

export interface AreaWhyPoint {
  title: string;
  desc: string;
}

export interface AreaLocalSection {
  heading: string;
  body: ReactNode;
}

export interface AreaContent {
  slug: string;
  name: string;
  /** Which region group this suburb belongs to (defaults to "alberton") */
  region?: "alberton" | "jhb";
  /** Broader area label shown in the page, e.g. "Alberton" or "Johannesburg South" */
  localityLabel?: string;
  /** Existing image in /public/images/areas */
  image: string;
  /** Short label shown above the hero heading */
  heroBadge: string;
  /** One-line hero sub-heading */
  heroTagline: string;
  /** Google Maps embed query for this suburb */
  mapQuery: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  intro: {
    heading: string;
    body: ReactNode;
  };
  /** Longer local prose under the intro, for depth and word count */
  localSections: AreaLocalSection[];
  /** Unique per-suburb descriptions for the service cards, keyed by serviceCatalog id */
  serviceBlurbs: Record<string, string>;
  /** Short lead-in above the service cards */
  servicesIntro: string;
  why: AreaWhyPoint[];
  /** Proximity / directions proof shown next to the map */
  directions: ReactNode;
  faqs: AreaFaq[];
  /** Slugs of the two nearby areas to cross-link */
  nearby: string[];
}

const linkClass = "text-blue font-semibold hover:underline";

export const areaPages: Record<string, AreaContent> = {
  // ─────────────────────────────────────────────────────────────
  "alberton-central": {
    slug: "alberton-central",
    name: "Alberton Central",
    image: "/images/areas/alberton_central.png",
    heroBadge: "Alberton",
    heroTagline:
      "Gate motors, electric fencing, CCTV and alarms for the homes and shops in the middle of Alberton. Same-day call-outs.",
    mapQuery: "Alberton City, Alberton",
    metaTitle:
      "Gate Motor Repair & Installation in Alberton Central | Electric Fencing, CCTV & Alarms | Security Direct",
    metaDescription:
      "Need a gate motor, electric fence, CCTV or alarm sorted in Alberton Central? Security Direct gives you fast, same-day call-outs across the area. Call 082 498 1272.",
    keywords:
      "gate motor repair Alberton Central, gate motor installation Alberton Central, electric fence Alberton Central, CCTV Alberton Central, security Alberton Central",
    intro: {
      heading: "Security that keeps up with a busy part of town",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Alberton Central is busy from early in the morning. The shops around Alberton
            City fill up, the flats near the Town Hall clock tower come to life, and gates
            open and close all day long. That heavy use is the main reason motors in this
            part of town wear out faster than most. When yours gives up, we can usually{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              get it running again the same day
            </Link>
            , because we work right here and carry the common parts in the van.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Plenty of homes and small businesses along General Alberts Road and Voortrekker
            Road also come to us for a{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              brand new gate motor
            </Link>{" "}
            or for{" "}
            <Link href="/electric-fence-installation" className={linkClass}>
              electric fencing along the top of the wall
            </Link>
            . We size everything to your gate and your property, set it up properly, and
            make sure it keeps working when the power drops.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Gates that work as hard as the area does",
        body: (
          <>
            <p>
              In the centre, a lot of gates open dozens of times a day, especially at the
              flats and the shops. That kind of use wears the motor, the rack and the
              battery far faster than a quiet home gate. We fit units built for the heavier
              traffic and we service them before they pack up, so a busy entrance keeps
              moving through the day.
            </p>
            <p>
              If your gate already drags or sticks on its track, a quick service now saves
              you a bigger repair later. We clean and grease the rack, check the gears, and
              reset the limits so the gate stops in the right place every time. Small jobs
              like this are what keep a high-use entrance out of trouble.
            </p>
          </>
        ),
      },
      {
        heading: "One team for the whole building",
        body: (
          <>
            <p>
              Plenty of property owners here juggle a gate, an intercom, cameras and an
              electric fence, often put in by different people over the years. We can take
              all of it on, so there is one number to call when something stops working.
            </p>
            <p>
              That makes life simpler for landlords and body corporates who would rather
              not chase three different companies for one front entrance. We can also{" "}
              <Link href="/cctv" className={linkClass}>
                add cameras you watch from your phone
              </Link>{" "}
              so you can keep an eye on a shared gate without standing at it.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We get jammed shop and apartment gates moving again the same day, with the common parts already in the van.",
      gateInstall:
        "New motors built for high-traffic entrances, so a gate that opens fifty times a day keeps up without straining.",
      fenceInstall:
        "Commercial and residential electric fencing wired straight into your alarm for proper urban security.",
      fenceRepair:
        "We trace a dead fence line on a flat or shopfront and have it holding a charge again quickly.",
      garage:
        "Garage door motors fitted and repaired for the townhouses and homes around the centre.",
      cctv:
        "Cameras on the entrance and yard that you watch from your phone, handy for a shared or business gate.",
      alarm:
        "Alarms set up for shops, offices and flats, with sensors covering the front doors and the back.",
    },
    servicesIntro:
      "Most people call us first about the gate, then ask what else we can help with around the property. Here is what we look after for homes and businesses in Alberton Central.",
    why: [
      {
        title: "We are minutes away",
        desc: "Working in the heart of Alberton means we reach you quickly when a gate jams in the middle of a workday.",
      },
      {
        title: "We know the heavy-use gates here",
        desc: "Shopfront and apartment gates cycle far more than a normal home gate. We fit and repair motors that hold up to that load.",
      },
      {
        title: "A price before we start",
        desc: "You hear what the job costs upfront, so nothing surprises you once the work is finished.",
      },
      {
        title: "Backup for the power cuts",
        desc: "We add a battery backup so your gate still opens when the area goes dark.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          You will find Alberton Central just off the R59, with Alberton City and the Town
          Hall as the easy landmarks. We cover the whole CBD and the streets around it,
          from New Redruth through to the flats near the shops.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Send us your address on WhatsApp and we will confirm a time to come out. There is
          no charge to find out what is wrong and what it will cost.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Alberton Central?",
        a: "Yes. We work right across the CBD and the streets around it, including the flats near the Town Hall and the shops around Alberton City. If you are close to the centre, we cover you.",
      },
      {
        q: "How fast can you get to me in Alberton Central?",
        a: "The centre is the quickest part of town for us to reach, since we are based right here in Alberton. Most call-outs are same day, often within a couple of hours of you sending your address.",
      },
      {
        q: "My gate motor struggles after load shedding. Can you help?",
        a: "Yes, this is one of our most common call-outs here. The outages drain the battery and the surges when power returns hit the control board. We test both, replace what has failed, and add surge protection so it lasts longer.",
      },
      {
        q: "Do you fit electric fencing on business properties in the centre?",
        a: "We do. Shops, offices and flats in Alberton Central all come to us for electric fencing along the top of the wall. We run it neatly and wire it into your alarm so it warns you the moment the line is touched.",
      },
      {
        q: "How much does a gate motor repair cost?",
        a: "It depends on the fault. A battery is at the lower end and a burned control board costs more. We give you the exact number after a quick diagnostic, before any work starts.",
      },
      {
        q: "Can you automate an old manual gate?",
        a: "Yes. We check that the gate still rolls or swings smoothly, then fit a motor sized to its weight, program your remotes, and show you the manual release before we leave.",
      },
      {
        q: "Do you install CCTV in Alberton Central?",
        a: "We do. A lot of homes and small businesses here add cameras they can watch from their phone, day or night. We can set this up at the same time as your gate or fence work.",
      },
      {
        q: "Do you work on apartment block and complex gates?",
        a: "Yes. These gates cycle far more than a single home gate, so they need a stronger motor and regular care. We fit and service the heavier-duty units that hold up to that kind of daily traffic.",
      },
    ],
    nearby: ["randhart", "verwoerdpark"],
  },

  // ─────────────────────────────────────────────────────────────
  brackenhurst: {
    slug: "brackenhurst",
    name: "Brackenhurst",
    image: "/images/areas/brackenhurst.png",
    heroBadge: "Alberton",
    heroTagline:
      "Reliable gate motors, electric fencing and home security for the leafy avenues of Brackenhurst. Same-day call-outs.",
    mapQuery: "Brackenhurst, Alberton",
    metaTitle:
      "Gate Motors, Electric Fencing & Home Security in Brackenhurst | Same-Day Call-Outs | Security Direct",
    metaDescription:
      "Gate motors, electric fencing, CCTV and alarms for Brackenhurst homes. Security Direct gives you fast, same-day call-outs across the suburb. Call 082 498 1272.",
    keywords:
      "gate motor repair Brackenhurst, gate motor installation Brackenhurst, electric fence Brackenhurst, CCTV Brackenhurst, home security Brackenhurst",
    intro: {
      heading: "Home security that suits a family suburb",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Brackenhurst is one of the quieter, greener parts of Alberton. Families settle
            here for the leafy avenues and the schools like Bracken High and Brackenhurst
            Primary, and a gate that works every time is part of what keeps a home like
            that feeling safe. When your gate stops opening on the school run, we can{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              come out and fix it the same day
            </Link>{" "}
            so your morning is not thrown out.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            A lot of Brackenhurst homeowners also ask us to{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              automate an older manual gate
            </Link>{" "}
            or to{" "}
            <Link href="/electric-fence-repair" className={linkClass}>
              get an electric fence charging again
            </Link>{" "}
            after a storm. We match the motor to the weight of your gate, run the fence
            neatly along the wall, and add a battery backup so none of it stops the moment
            the power goes.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Why storms are hard on Brackenhurst fences",
        body: (
          <>
            <p>
              The big summer storms on the Highveld are tough on electric fencing. A
              lightning strike nearby can knock out the energiser even when the wires
              still look fine. That leaves the fence dead without an obvious reason, which
              is exactly when people call us.
            </p>
            <p>
              We test the energiser and the full line, replace what the storm caught, and
              earth it properly so the next storm does less damage. A fence that holds its
              charge is what actually keeps your dogs in the yard and keeps an intruder off
              the wall, so it is worth getting right.
            </p>
          </>
        ),
      },
      {
        heading: "Keeping a family gate safe and simple",
        body: (
          <>
            <p>
              With children and pets around, the gate has to be both reliable and safe. We
              set the closing speed gently, fit beams that stop the gate the moment
              something crosses, and program enough remotes for everyone who comes and
              goes.
            </p>
            <p>
              You end up with a gate the whole family can use without a second thought. If
              you want an extra layer, we can{" "}
              <Link href="/cctv" className={linkClass}>
                add a camera on the gate
              </Link>{" "}
              so you can see who is there before you open from inside the house.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "A stuck gate on the school run gets sorted the same day, so your morning is not thrown out.",
      gateInstall:
        "We automate the older manual gates on the avenues, sized and set to run softly and safely.",
      fenceInstall:
        "Electric fencing run neatly along your boundary walls, keeping kids and pets safe while securing the perimeter.",
      fenceRepair:
        "After a Highveld storm we test the energiser and the line and get your fence charging again.",
      garage:
        "Garage door motors fitted and fixed so the whole family home opens at the press of a button.",
      cctv:
        "Cameras on the gate and garden so you can check on the kids and the yard from your phone.",
      alarm:
        "Home alarms with sensors on the doors, windows and yard, easy for the whole family to use.",
    },
    servicesIntro:
      "Once the gate is sorted, most families here ask what else we can help with. Here is what we look after for homes around Brackenhurst.",
    why: [
      {
        title: "Local and quick to respond",
        desc: "We are based in Alberton, so a stuck gate in Brackenhurst usually gets a same-day visit.",
      },
      {
        title: "Set up safely for the family",
        desc: "We fit safety beams that stop the gate for cars and children every time, so the whole family is covered.",
      },
      {
        title: "It keeps working in a power cut",
        desc: "A backup battery means you are never stuck on the driveway when the lights go out.",
      },
      {
        title: "Neat work that suits the street",
        desc: "We finish the job tidily so the motor and fence fit in with a home you are proud of.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Brackenhurst sits between Hennie Alberts Street and the green belt, an easy drive
          from the rest of Alberton. We cover the whole suburb, from the avenues near
          Bracken High down to the homes bordering Brackendowns.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Drop your address on WhatsApp and we will set up a time. Working out what is
          wrong and what it costs is free.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Brackenhurst?",
        a: "Yes. We work across the whole suburb, from the avenues near Bracken High through to the streets that border Brackendowns. If you are in Brackenhurst, we cover you.",
      },
      {
        q: "My gate died right before the school run. How fast can you come?",
        a: "Brackenhurst is a short run south from our Alberton base, just over toward the green belt, so we can usually be there the same day. Send your address and we will give you the soonest window we have, knowing the morning matters.",
      },
      {
        q: "Can you automate the manual gate at my home?",
        a: "Yes. We check the gate still moves freely, fit a motor sized to its weight, set up remotes for the family, and show you how to open it by hand if you ever need to.",
      },
      {
        q: "My electric fence stopped working after a storm. Can you fix it?",
        a: "We can. Storms and lightning are a common cause here. We find the break or the damaged energiser, repair it, and test the whole line so it holds a proper charge again.",
      },
      {
        q: "Are the gate motors safe with children around?",
        a: "Yes. We fit safety beams across the opening so the gate stops and reverses the moment something crosses, whether that is a car or a child. It is a small part that makes a big difference.",
      },
      {
        q: "Do you install cameras for family homes?",
        a: "We do. A lot of Brackenhurst families add cameras they can check from their phone, so they can see the gate and the yard whether they are home or away.",
      },
      {
        q: "How much does it cost to fit a new gate motor?",
        a: "It depends on your gate and the motor you choose. We look at the gate, recommend the right size, and give you a clear price before we order anything.",
      },
      {
        q: "Will the gate still open when the power is off?",
        a: "Yes, as long as the backup battery is healthy. We fit one with every motor and suggest replacing it every few years so an outage never leaves you stuck outside.",
      },
    ],
    nearby: ["brackendowns", "meyersdal"],
  },

  // ─────────────────────────────────────────────────────────────
  brackendowns: {
    slug: "brackendowns",
    name: "Brackendowns",
    image: "/images/areas/brackendowns.png",
    heroBadge: "Alberton",
    heroTagline:
      "Quiet, reliable gate motors and full home security for Brackendowns families. Same-day call-outs across the suburb.",
    mapQuery: "Brackendowns, Alberton",
    metaTitle:
      "Gate Motors, Electric Fencing & Home Security in Brackendowns | Same-Day Call-Outs | Security Direct",
    metaDescription:
      "Gate motors, electric fencing, garage doors, CCTV and alarms for Brackendowns homes. Security Direct gives you fast, same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor repair Brackendowns, gate motor installation Brackendowns, electric fence Brackendowns, alarm system Brackendowns, home security Brackendowns",
    intro: {
      heading: "Full security for a calm, settled neighbourhood",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Brackendowns is a calm, family suburb where a smooth, quiet gate makes a real
            difference to daily life. Homes here sit on wide, settled streets near Bracken
            Gardens, and most people just want a gate and a fence that work without fuss.
            When something stops, we can{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              sort out a gate that has given up
            </Link>{" "}
            the same day, because we are right next door in Alberton.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We also help Brackendowns families with the bigger jobs, from{" "}
            <Link href="/alarm-system-installation" className={linkClass}>
              an alarm system put in
            </Link>{" "}
            to a{" "}
            <Link href="/garage-door-installation" className={linkClass}>
              new garage door motor
            </Link>{" "}
            so the whole house opens up at the press of a button. We keep the work tidy,
            explain how everything runs, and set up a backup so it carries on through the
            power cuts.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "A quiet gate for a quiet street",
        body: (
          <>
            <p>
              On a calm street, a gate that bangs and grinds stands out. Most of the time
              the fix is simple. The speed and force are set too high, or the rack and gear
              need a clean and a light grease to run properly again.
            </p>
            <p>
              We tune it so it opens softly and closes gently, which is easier on the motor
              and easier on your nerves first thing in the morning. A gate that runs smooth
              also lasts longer, because nothing is slamming into the end stops on every
              cycle.
            </p>
          </>
        ),
      },
      {
        heading: "Covering the whole property at once",
        body: (
          <>
            <p>
              A lot of Brackendowns families would rather sort the gate, the alarm, the
              cameras and the fence in one go than piece it together over years. We can plan
              it as a single job and set it up so everything works together.
            </p>
            <p>
              That way one backup carries the whole system, and an outage does not leave
              half your security asleep. If you want to start small, the gate and an{" "}
              <Link href="/electric-fence-installation" className={linkClass}>
                electric fence on the wall
              </Link>{" "}
              are usually the two that make the biggest difference first.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We quiet down a loud, jerky gate and fix the faults that stop it dead on a calm street.",
      gateInstall:
        "New motors tuned to open softly and close gently, which suits a settled neighbourhood.",
      fenceInstall:
        "Electric fencing along the wall, wired to your alarm so the whole perimeter is covered at once.",
      fenceRepair:
        "We find the break in a dead fence and get the full line live again across the property.",
      garage:
        "Garage door motors put in and repaired so the house opens up without you leaving the car.",
      cctv:
        "Cameras you watch from your phone, set up alongside the gate and alarm in one visit.",
      alarm:
        "Alarms that tie in with the gate and fence, so one backup carries the whole setup.",
    },
    servicesIntro:
      "Plenty of homes here come to us to cover the whole property, not just the gate. Here is everything we look after around Brackendowns.",
    why: [
      {
        title: "Right next door in Alberton",
        desc: "We are close enough to reach Brackendowns quickly, so a stuck gate rarely waits more than a day.",
      },
      {
        title: "A quiet, smooth setup",
        desc: "We set the speed and force so your gate runs softly and stops gently, which matters on a calm street.",
      },
      {
        title: "We cover the whole property",
        desc: "Gate, fence, alarm and cameras can all come from one team, so everything works together.",
      },
      {
        title: "Backup for every power cut",
        desc: "We fit a battery so your gate and alarm keep doing their job when the power drops.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Brackendowns runs along the southern edge of Alberton, near Meyersdal and the
          R59, with Bracken Gardens as the easy landmark. We cover every street in the
          suburb, from the parks through to the homes that border Brackenhurst.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Send your address over WhatsApp and we will arrange a visit. Finding the fault
          and giving you a price costs you nothing.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Brackendowns?",
        a: "Yes. We work across the whole suburb, from the streets near Bracken Gardens through to the homes that border Brackenhurst and Meyersdal.",
      },
      {
        q: "How quickly can you reach Brackendowns?",
        a: "Brackendowns sits just past Brackenhurst on the southern side, a quick trip down from our Alberton base, so same day is the norm. Send your address and we will confirm a window.",
      },
      {
        q: "Can you set up the gate, alarm and cameras together?",
        a: "Yes, and a lot of families here prefer that. One team fits the gate motor, the alarm and the cameras so it all works together and there is one number to call if anything needs attention.",
      },
      {
        q: "My garage door motor stopped working. Do you fix those too?",
        a: "We do. We repair and replace garage door motors as well as gate motors, so you can get both sorted in one visit.",
      },
      {
        q: "Why does my gate run loud and jerky?",
        a: "Usually the speed and force settings are off, or the rack and gear need cleaning. We adjust the settings and service the moving parts so it runs softly again, which is what you want on a quiet street.",
      },
      {
        q: "Do you install electric fencing in Brackendowns?",
        a: "Yes. We run electric fencing along the top of the wall, wire it into your alarm, and test the whole line so it holds a proper charge and warns you the moment it is touched.",
      },
      {
        q: "How much does a new gate motor cost here?",
        a: "It depends on your gate and the motor. We look at the gate weight, recommend the right unit, and give you a clear price before we start.",
      },
      {
        q: "Will my alarm and gate work during load shedding?",
        a: "Yes, as long as the backup batteries are healthy. We fit a backup with the gate and the alarm, and suggest replacing them every few years so an outage does not catch you out.",
      },
    ],
    nearby: ["brackenhurst", "meyersdal"],
  },

  // ─────────────────────────────────────────────────────────────
  meyersdal: {
    slug: "meyersdal",
    name: "Meyersdal",
    image: "/images/areas/meyersdal_estate.png",
    heroBadge: "Alberton",
    heroTagline:
      "Strong gate motors, perimeter fencing and cameras for the estates and homes of Meyersdal. Same-day call-outs.",
    mapQuery: "Meyersdal, Alberton",
    metaTitle:
      "Gate Motors, Electric Fencing & Security in Meyersdal | Estate Specialists | Security Direct",
    metaDescription:
      "Heavy-duty gate motors, electric fencing, CCTV and alarms for Meyersdal estates and homes. Security Direct offers same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor Meyersdal, gate motor installation Meyersdal, electric fence Meyersdal, CCTV Meyersdal, estate security Meyersdal",
    intro: {
      heading: "Security built for Meyersdal's bigger properties",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Meyersdal is known for its estates and large family homes, from the Eco Estate
            up on the ridge to the quieter pockets near the koppie. Properties like these
            need security that matches their size, starting with a gate that can handle a
            long, heavy span. When an estate gate starts to struggle, we can{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              fit a stronger motor sized to your gate
            </Link>{" "}
            so it opens smoothly again.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We also help Meyersdal homeowners run{" "}
            <Link href="/electric-fence-installation" className={linkClass}>
              electric fencing around a bigger perimeter
            </Link>{" "}
            and set up{" "}
            <Link href="/cctv" className={linkClass}>
              cameras you can watch from your phone
            </Link>
            . We plan it so everything works together, keep the install neat, and add a
            backup so your security stays awake when the power goes.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Bigger estates, bigger gates",
        body: (
          <>
            <p>
              Many Meyersdal homes sit behind long, heavy gates, and those need a motor
              with real pulling power. A motor that is too small for the gate strains, runs
              hot and fails early, which is why some homes here are on their second or
              third unit in a few years.
            </p>
            <p>
              We size the motor to the actual weight of your gate, mount it solidly so
              nothing shifts, and fit an anti-theft bracket to keep the unit where it
              belongs. The result is a gate that opens smoothly every time, even on the
              larger estate entrances that get used all day.
            </p>
          </>
        ),
      },
      {
        heading: "Tying the gate into the rest of your security",
        body: (
          <>
            <p>
              On a property with cameras, an intercom and an electric fence, the gate is
              one piece of a bigger setup. We link it in so you can see who is at the gate
              before you open, and so the fence and alarm warn you the moment the line is
              touched.
            </p>
            <p>
              Having it all work together is what makes a big property feel manageable. One
              team handles the gate, the{" "}
              <Link href="/electric-fence-repair" className={linkClass}>
                fence repairs
              </Link>{" "}
              and the cameras, so you are not stuck wondering who to call when one part of
              the system acts up.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We fix straining estate gates and replace the worn parts that come from pulling a long, heavy span.",
      gateInstall:
        "Heavier motors sized to weighty estate gates, mounted solidly with an anti-theft bracket.",
      fenceInstall:
        "Electric fencing run around a bigger perimeter, wired into your alarm and tested end to end.",
      fenceRepair:
        "We walk the full estate boundary, find the fault, and get a large fence line charging again.",
      garage:
        "Garage door motors fitted for larger homes, linked in with the rest of your security.",
      cctv:
        "Cameras across a big property so you can see every corner you cannot reach from the house.",
      alarm:
        "Alarms tied into the gate, fence and cameras so a large home feels manageable from one panel.",
    },
    servicesIntro:
      "Big or small, we look after the whole property. Here is what we help Meyersdal homes and estates with.",
    why: [
      {
        title: "We size motors for estate gates",
        desc: "Long, heavy gates need real pulling power. We fit motors that handle the weight without straining or failing early.",
      },
      {
        title: "Your whole perimeter, covered",
        desc: "Gate, fence and cameras from one team, set up to work together around a bigger property.",
      },
      {
        title: "A price before we start",
        desc: "You know the cost upfront, even on the larger jobs, so nothing catches you out.",
      },
      {
        title: "Backup for every outage",
        desc: "A healthy battery keeps your gate and alarm running when the power drops.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Meyersdal sits along the southern edge of Alberton, just off the R59, with the
          Eco Estate and the koppie as the easy landmarks. We cover the estates and the
          surrounding streets, from the ridge down toward Brackendowns.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Send your address on WhatsApp and we will arrange a time that suits you. Working
          out the fault and the price costs you nothing.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Meyersdal, and how fast can you get here?",
        a: "Yes, we cover the whole of Meyersdal, including the estates on the ridge and the streets down toward Brackendowns. It is a straight run down the R59 from our Alberton base, so even the estates are an easy same-day visit once we have arranged access.",
      },
      {
        q: "Can you work inside the secure estates like the Eco Estate?",
        a: "Yes. We arrange access with the estate security beforehand and bring ID so the visit goes smoothly. Once we are in, we work the same way we would at any home.",
      },
      {
        q: "My estate gate is long and heavy and the motor keeps failing. Why?",
        a: "Usually the motor is undersized for the weight of the gate, so it runs hot and wears out fast. We fit a stronger unit matched to your gate so it stops straining and lasts much longer.",
      },
      {
        q: "Can you run electric fencing around a big property?",
        a: "Yes. We run the fence along the full perimeter, wire it into your alarm, and test the whole line so it holds a proper charge and warns you the moment it is touched.",
      },
      {
        q: "Do you fit cameras that link to my phone?",
        a: "We do. You can watch the gate and the yard from anywhere, day or night, which is handy on a larger property where you cannot see every corner from the house.",
      },
      {
        q: "How much does a heavy-duty gate motor cost?",
        a: "It depends on the gate weight and the motor. We measure the gate, recommend the right unit, and give you a clear price before we order anything.",
      },
      {
        q: "Can you protect the motor from theft?",
        a: "Yes. We fit an anti-theft bracket and mount the unit solidly, which makes it much harder to remove and keeps your investment where it belongs.",
      },
      {
        q: "Will the gate keep working during load shedding?",
        a: "Yes, with a healthy backup battery. We fit one with the motor and suggest replacing it every few years so an outage never leaves you stuck at the gate.",
      },
    ],
    nearby: ["brackendowns", "brackenhurst"],
  },

  // ─────────────────────────────────────────────────────────────
  randhart: {
    slug: "randhart",
    name: "Randhart",
    image: "/images/areas/randhart.png",
    heroBadge: "Alberton",
    heroTagline:
      "Same-day gate motor repairs, installs and home security for busy Randhart families.",
    mapQuery: "Randhart, Alberton",
    metaTitle:
      "Gate Motors, Electric Fencing & Home Security in Randhart | Same-Day Call-Outs | Security Direct",
    metaDescription:
      "Gate motor repairs, installs, electric fencing, CCTV and alarms for Randhart homes. Security Direct offers fast, same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor repair Randhart, gate motor installation Randhart, electric fence Randhart, alarm Randhart, home security Randhart",
    intro: {
      heading: "Reliable security for busy Randhart homes",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Randhart is a proper family suburb, close to the schools and the sports clubs,
            and the gate here gets used all day long. When it gives out on a school
            morning, that is the worst possible time. We can{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              get a stuck gate going again the same day
            </Link>{" "}
            so your routine is not thrown out.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Plenty of Randhart families also ask us to{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              automate an older manual gate
            </Link>{" "}
            or to{" "}
            <Link href="/alarm-system-installation" className={linkClass}>
              put in an alarm
            </Link>{" "}
            that covers the doors, windows and yard. We size everything correctly, set it
            up properly, and add a backup so none of it stops the moment the power goes.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Gates that keep up with a busy household",
        body: (
          <>
            <p>
              Randhart homes near the schools and sports clubs see a lot of coming and
              going, so the gate gets used hard. That use shows up as a tired battery, a
              worn rack or limits that drift out of place over time.
            </p>
            <p>
              We catch these on a service before they leave you stuck in the driveway on a
              school morning. A little attention now, a fresh battery and a clean track,
              keeps the whole family moving and saves you the bigger repair bill down the
              line.
            </p>
          </>
        ),
      },
      {
        heading: "Adding security without the fuss",
        body: (
          <>
            <p>
              Plenty of Randhart families add an alarm or a couple of cameras once the gate
              is sorted. We keep the work tidy and quick, explain how to arm and disarm
              everything, and make sure the backup carries the system through a power cut.
            </p>
            <p>
              You get more cover without turning the house upside down. If the budget is
              tight, we will tell you which part to do first, whether that is the gate, an{" "}
              <Link href="/electric-fence-installation" className={linkClass}>
                electric fence on the wall
              </Link>{" "}
              or a camera on the entrance.
            </p>
            <p>
              If you are not sure where to start, a quick chat on WhatsApp usually sorts
              it. We will ask a couple of questions about the gate and the house, then tell
              you what is worth doing now and what can wait for later.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We catch a tired battery or worn rack before it leaves you stuck in the driveway on a school day.",
      gateInstall:
        "Older manual gates automated and set up with enough remotes for a busy family.",
      fenceInstall:
        "Electric fencing along the wall to secure the perimeter of a busy family home.",
      fenceRepair:
        "We get a dead fence line charging again so the yard stays secure around the clock.",
      garage:
        "Garage door motors fitted and repaired so the home opens up without a manual lift.",
      cctv:
        "Cameras on the gate and yard you can check from your phone while you are out with the kids.",
      alarm:
        "Alarms with sensors on the doors, windows and yard, set up and clearly explained for the family.",
    },
    servicesIntro:
      "Once the gate is handled, most Randhart families ask what else we cover. Here is the full list.",
    why: [
      {
        title: "Local and quick to respond",
        desc: "We are based in Alberton, so a stuck gate in Randhart usually gets a same-day visit.",
      },
      {
        title: "Safe for the kids",
        desc: "We fit beams that stop the gate the moment a car or child crosses, so the whole family is covered.",
      },
      {
        title: "Backup for the power cuts",
        desc: "A battery keeps your gate and alarm running when the lights go out.",
      },
      {
        title: "Tidy work, clearly explained",
        desc: "We finish neatly and show you how everything works before we leave.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Randhart sits just south of the centre, with the schools and sports clubs as the
          easy landmarks and Hennie Alberts Street running close by. We cover the whole
          suburb, from the streets near Alberton Central down toward Mayberry Park.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Send your address on WhatsApp and we will set up a time. Finding the fault and
          quoting you costs nothing.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Randhart?",
        a: "Yes. We work across the whole suburb, from the streets near Alberton Central through to the homes bordering Mayberry Park. If you are in Randhart, we cover you.",
      },
      {
        q: "My gate died on a school morning. How fast can you come?",
        a: "Randhart sits just south of the centre, only minutes from our Alberton base, so it is one of the fastest areas for us to reach. We push hard to make these same day, since we know how much it throws out the morning.",
      },
      {
        q: "Can you automate my manual gate?",
        a: "Yes. We check the gate moves freely, fit a motor sized to its weight, program remotes for the family, and show you the manual release in case you ever need it.",
      },
      {
        q: "Do you fit alarms that cover the whole house?",
        a: "We do. We place sensors on the doors, windows and yard, wire it to a backup, and show you how to arm and disarm it so the family is comfortable using it.",
      },
      {
        q: "Are the gate motors safe with children around?",
        a: "Yes. The safety beams stop and reverse the gate the moment something crosses the opening, whether that is a car or a child running through.",
      },
      {
        q: "How much does a gate motor repair cost?",
        a: "It depends on the fault. A battery is at the lower end and a control board costs more. We give you the exact figure after a quick diagnostic, before any work starts.",
      },
      {
        q: "Do you install cameras for family homes?",
        a: "Yes. A lot of Randhart families add cameras they check from their phone, so they can see the gate and yard whether they are home or away.",
      },
      {
        q: "Will my gate and alarm work in load shedding?",
        a: "Yes, as long as the backup batteries are healthy. We fit a backup with both and suggest replacing them every few years so an outage does not catch you out.",
      },
    ],
    nearby: ["alberton-central", "mayberry-park"],
  },

  // ─────────────────────────────────────────────────────────────
  verwoerdpark: {
    slug: "verwoerdpark",
    name: "Verwoerdpark",
    image: "/images/areas/verwoerdpark_dam.png",
    heroBadge: "Alberton",
    heroTagline:
      "Gate motor repairs, electric fencing and home security for the established homes of Verwoerdpark.",
    mapQuery: "Verwoerdpark, Alberton",
    metaTitle:
      "Gate Motors, Electric Fencing & Security in Verwoerdpark | Same-Day Call-Outs | Security Direct",
    metaDescription:
      "Gate motors, electric fencing, garage doors, CCTV and alarms for Verwoerdpark homes. Security Direct offers same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor repair Verwoerdpark, gate motor installation Verwoerdpark, electric fence Verwoerdpark, garage door Verwoerdpark, home security Verwoerdpark",
    intro: {
      heading: "Trusted security in an established Alberton suburb",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Verwoerdpark sits near Rand Airport and the Alberton Dam, and it is one of the
            older, settled parts of town. A lot of the gates and fences here have been in
            for years, which means worn boards and tired batteries are common, especially
            after a surge. When yours acts up, we can{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              track down the fault and fix it the same day
            </Link>
            .
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We also get{" "}
            <Link href="/electric-fence-repair" className={linkClass}>
              an electric fence charging again
            </Link>{" "}
            after a storm and{" "}
            <Link href="/garage-door-repair" className={linkClass}>
              get a dead garage door motor going again
            </Link>{" "}
            so the whole house opens at the press of a button. We protect the electronics
            from the next surge and add a backup so the power coming and going does not
            leave you stuck.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Older suburb, older wiring",
        body: (
          <>
            <p>
              Verwoerdpark has plenty of established homes, and the gate motors and fences
              here have often been in for many years. Old wiring and worn control boards
              are common, especially after a surge when the power comes back on.
            </p>
            <p>
              We check the supply, fit surge protection, and replace the parts that the
              years have worn out, so an old system runs like it should again. Often a home
              here just needs the board and battery refreshed rather than a whole new
              motor, which keeps the cost down.
            </p>
          </>
        ),
      },
      {
        heading: "Ready for the power coming and going",
        body: (
          <>
            <p>
              Near the dam and the airport, the routine here is the same as the rest of
              Alberton. The power drops and then jumps back, and that cycle is hard on
              batteries and boards.
            </p>
            <p>
              We fit a healthy backup and protect the board, so your gate keeps opening
              through the outages and survives the surge when the power returns. It is a
              small bit of extra work that saves a much bigger repair later on.
            </p>
            <p>
              Most homes here have been through a few outages a week for years, so the gear
              takes a beating. A quick yearly check, where we test the battery under load
              and look over the board, keeps small faults from turning into a dead gate on
              a Monday morning.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We revive older motors, fitting a fresh board and battery rather than a whole new unit where we can.",
      gateInstall:
        "When an old motor is past it, we fit a new one with surge protection built into the supply.",
      fenceInstall:
        "Electric fencing run along the wall and earthed properly to handle the local storms.",
      fenceRepair:
        "We repair fences caught by a surge or storm and get the line holding a charge again.",
      garage:
        "Garage door motors replaced and repaired, sorted in the same visit as the gate.",
      cctv:
        "Cameras added to an established home and linked to your phone for a clear view of the entrance.",
      alarm:
        "Older alarms tested and revived, with the worn sensors and battery replaced as needed.",
    },
    servicesIntro:
      "From an old motor that needs reviving to a fresh setup, here is what we look after for Verwoerdpark homes.",
    why: [
      {
        title: "We know older systems",
        desc: "Years of working on established Alberton homes means we spot worn wiring and tired boards fast.",
      },
      {
        title: "Surge protection as standard",
        desc: "We protect the board from the switching surges that follow load shedding, so it lasts longer.",
      },
      {
        title: "A price before we start",
        desc: "You hear the cost upfront, and often a repair beats a full replacement on an older motor.",
      },
      {
        title: "Backup for every outage",
        desc: "A healthy battery keeps your gate moving when the power is off.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Verwoerdpark sits near Rand Airport and the Alberton Dam, just off the R59. We
          cover the whole suburb and the streets around it, an easy drive from the rest of
          Alberton.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Send your address on WhatsApp and we will arrange a visit. Working out the fault
          and the price is free.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Verwoerdpark?",
        a: "Yes. We work across the whole suburb, including the streets near Rand Airport and the Alberton Dam. If you are in Verwoerdpark, we cover you.",
      },
      {
        q: "My old motor keeps tripping after the power returns. Why?",
        a: "The switching surges when the power comes back hit the control board directly when there is no surge protector. We fit surge protection and replace the worn parts so it stops tripping.",
      },
      {
        q: "Can you fix my electric fence after a storm?",
        a: "Yes. Storms are a common cause here. We find the break or the damaged energiser, repair it, and earth the line properly so the next storm does less damage.",
      },
      {
        q: "Do you replace garage door motors too?",
        a: "We do. We handle garage door motors as well as gate motors, so you can get both sorted in the same visit.",
      },
      {
        q: "My system is old. Should I repair or replace it?",
        a: "It depends on the motor and its history. Often an older motor just needs a fresh board and battery rather than a full replacement. We assess it and give you a straight recommendation.",
      },
      {
        q: "How much does a repair cost?",
        a: "It depends on the fault. We run a quick diagnostic and give you the exact figure before any work starts, and the call-out is usually included if you go ahead.",
      },
      {
        q: "Will my gate work during load shedding?",
        a: "Yes, with a healthy backup battery, which we fit and suggest replacing every few years so an outage does not leave you stuck.",
      },
      {
        q: "How fast can you get to Verwoerdpark?",
        a: "Verwoerdpark is a short hop toward Rand Airport from our Alberton base, so same day is normal. Send your address and we will give you the soonest window we have.",
      },
    ],
    nearby: ["alberton-central", "randhart"],
  },

  // ─────────────────────────────────────────────────────────────
  "mayberry-park": {
    slug: "mayberry-park",
    name: "Mayberry Park",
    image: "/images/areas/mayberry_park.png",
    heroBadge: "Alberton",
    heroTagline:
      "Good-value gate motors, alarms and cameras for Mayberry Park homes. Same-day call-outs.",
    mapQuery: "Mayberry Park, Alberton",
    metaTitle:
      "Gate Motors, Alarms & Home Security in Mayberry Park | Affordable, Same-Day | Security Direct",
    metaDescription:
      "Affordable gate motors, electric fencing, CCTV and alarms for Mayberry Park homes. Security Direct offers fast, same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor Mayberry Park, gate motor repair Mayberry Park, alarm Mayberry Park, CCTV Mayberry Park, home security Mayberry Park",
    intro: {
      heading: "Honest, affordable security for Mayberry Park",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Mayberry Park is a quiet, close-knit suburb where people want security that
            just works without a big price tag. A reliable gate is usually the first thing
            on the list. When yours stops, we can{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              get it moving again the same day
            </Link>
            , and when it is time for a new one we{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              fit a good-value motor sized to your gate
            </Link>
            .
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We also help with{" "}
            <Link href="/alarm-system-repair" className={linkClass}>
              getting a tired alarm working again
            </Link>{" "}
            and adding{" "}
            <Link href="/cctv" className={linkClass}>
              cameras you can check from your phone
            </Link>
            . We keep it simple, tell you straight what the place actually needs, and add a
            backup so a power cut does not leave you exposed.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Solid security that fits the budget",
        body: (
          <>
            <p>
              Mayberry Park is a down-to-earth suburb, and most people here want security
              that works without costing a fortune. We fit good-value motors sized
              correctly for the gate, so the price stays fair and the motor lasts.
            </p>
            <p>
              We tell you straight what the gate actually needs, so you are not talked into
              extras that do not help you. If a simple repair will get a few more good years
              out of your current motor, we will say so rather than push a new one.
            </p>
          </>
        ),
      },
      {
        heading: "One visit for the gate and the alarm",
        body: (
          <>
            <p>
              Rather than booking two companies, a lot of homes here get the gate and the
              alarm handled in the same visit. We set both up, show you how they work, and
              put a backup behind them so a power cut does not leave the house open.
            </p>
            <p>
              It is the simple way to cover the place properly. We can also run an{" "}
              <Link href="/electric-fence-installation" className={linkClass}>
                electric fence along the wall
              </Link>{" "}
              while we are there, so the whole perimeter is sorted in one go.
            </p>
            <p>
              We have worked in this part of Alberton for years, so we know the homes and
              the common setups around here. That means we get the job done quickly and
              leave you with security that earns its keep.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We get a stuck gate moving again the same day, with a price agreed before we start.",
      gateInstall:
        "Good-value motors sized right for your gate, so you pay for what the gate actually needs.",
      fenceInstall:
        "Electric fencing along the wall to cover the perimeter without a big price tag.",
      fenceRepair:
        "We find the fault on a dead fence and get it charging again at a fair price.",
      garage:
        "Garage door motors fitted and repaired, often handled alongside the gate in one visit.",
      cctv:
        "A couple of cameras on the entrance and yard that you check from your phone.",
      alarm:
        "Tired alarms tested and brought back to life, with only the worn parts replaced.",
    },
    servicesIntro:
      "We keep it simple and cover the whole property. Here is what we help Mayberry Park homes with.",
    why: [
      {
        title: "Good value, sized right",
        desc: "We fit motors matched to your gate so the price stays fair and the unit lasts.",
      },
      {
        title: "Quick and local",
        desc: "We are close by in Alberton, so a stuck gate in Mayberry Park usually gets a same-day visit.",
      },
      {
        title: "Gate and alarm in one visit",
        desc: "We sort both at once so you only book one team and one call-out.",
      },
      {
        title: "Backup for the power cuts",
        desc: "A battery keeps your gate and alarm working when the lights go out.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Mayberry Park sits in the south of Alberton, an easy drive from the centre. We
          cover the whole suburb and the streets around it, up toward Randhart and across
          to Verwoerdpark.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Send your address on WhatsApp and we will set up a time. Finding the fault and
          quoting you costs nothing.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Mayberry Park?",
        a: "Yes. We work across the whole suburb and the streets around it, up toward Randhart and Verwoerdpark. If you are in Mayberry Park, we cover you.",
      },
      {
        q: "I want security on a budget. What do you suggest?",
        a: "We size everything correctly and tell you straight what the place actually needs, so you are not paying for extras that do not help. Usually the gate and a basic alarm are the first things to sort.",
      },
      {
        q: "Can you repair my old alarm rather than replace it?",
        a: "Often yes. We test the panel, the sensors and the battery, and get a tired alarm armed and working again where the parts are still good. We only suggest a new one when it makes sense.",
      },
      {
        q: "Can you do the gate and the alarm in one visit?",
        a: "Yes, and most homes here prefer that. We set up both, show you how they work, and put a backup behind them so one call-out covers the lot.",
      },
      {
        q: "Do you fit cameras I can see on my phone?",
        a: "We do. You can check the gate and the yard from your phone, day or night, which is handy when you are out.",
      },
      {
        q: "How much does a new gate motor cost?",
        a: "It depends on your gate and the motor. We look at the gate weight, recommend a good-value unit, and give you a clear price before we order anything.",
      },
      {
        q: "How fast can you get to Mayberry Park?",
        a: "Mayberry Park sits a little further south, but it is still a short drive from our Alberton base, so we usually make it same day. Send your address and we will confirm the soonest window.",
      },
      {
        q: "Will my gate and alarm work in load shedding?",
        a: "Yes, as long as the backup batteries are healthy. We fit a backup with both and suggest replacing them every few years so an outage does not catch you out.",
      },
    ],
    nearby: ["randhart", "verwoerdpark"],
  },

  // ─────────────────────────────────────────────────────────────
  glenvista: {
    slug: "glenvista",
    name: "Glenvista",
    region: "jhb",
    localityLabel: "Johannesburg South",
    image: "/images/areas/glenvista_golf.png",
    heroBadge: "Johannesburg South",
    heroTagline:
      "Strong gate motors for steep driveways, plus electric fencing and cameras across Glenvista. Same-day call-outs.",
    mapQuery: "Glenvista, Johannesburg",
    metaTitle:
      "Gate Motors, Electric Fencing & Security in Glenvista | Hillside Specialists | Security Direct",
    metaDescription:
      "Heavy-duty gate motors for Glenvista's steep driveways, plus electric fencing, CCTV and alarms. Security Direct offers same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor Glenvista, gate motor repair Glenvista, electric fence Glenvista, CCTV Glenvista, security Glenvista",
    intro: {
      heading: "Gate motors that handle Glenvista's hills",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Glenvista is built on hills, and that changes what a gate motor has to do. A
            sloped driveway means the motor pulls harder on every open and close, so an
            underpowered unit burns out fast. When yours starts to struggle on the incline,
            we can{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              get it working again the same day
            </Link>{" "}
            and tell you straight if it is the right size for the slope.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Near the Country Club and the golf course, plenty of homes also ask us for a{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              stronger motor that suits a steep stand
            </Link>{" "}
            or for{" "}
            <Link href="/electric-fence-installation" className={linkClass}>
              electric fencing along a sloping boundary
            </Link>
            . We size everything to the gradient and the gate weight, then set it up so it
            opens smoothly every time.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Why slopes are hard on gate motors",
        body: (
          <>
            <p>
              On a flat driveway a motor barely notices the gate weight. On a Glenvista
              incline it fights gravity the whole way, which heats the motor and wears the
              gears far quicker. That is why some homes here are on their second or third
              unit in just a few years.
            </p>
            <p>
              We fit higher-rated units made for that pull, and we set the force correctly
              so the gate does not strain or roll back down the drive. Getting the size
              right the first time is what keeps you off the repeat-repair treadmill.
            </p>
          </>
        ),
      },
      {
        heading: "Securing a sloping property",
        body: (
          <>
            <p>
              A boundary that runs up and down a hill needs the fence and the beams set up
              with the gradient in mind, otherwise you get gaps where the ground drops and
              false triggers where it rises.
            </p>
            <p>
              We run{" "}
              <Link href="/electric-fence-repair" className={linkClass}>
                the fence line
              </Link>{" "}
              to follow the slope properly and place the safety beams where they actually
              catch a car on the incline. The result is a perimeter that works as well at
              the bottom of the drive as it does at the top.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We fix gate motors worn out by steep Glenvista driveways and check the unit is rated for the slope.",
      gateInstall:
        "Higher-rated motors fitted for sloped stands, set up to pull the gate smoothly up the incline.",
      fenceInstall:
        "Electric fencing run to follow a hilly boundary, with no gaps where the ground drops away.",
      fenceRepair:
        "We trace a fault on a sloping fence line and get the whole run charging again.",
      garage:
        "Garage door motors fitted for the split-level homes around the Country Club.",
      cctv:
        "Cameras placed to cover a stepped, sloping yard so there are no blind spots.",
      alarm:
        "Alarms with sensors set for the larger, multi-level homes common in Glenvista.",
    },
    servicesIntro:
      "Whatever the slope throws at your gate, we look after the whole property. Here is what we help Glenvista homes with.",
    why: [
      {
        title: "Motors rated for the slope",
        desc: "Steep driveways need more pulling power. We fit units that handle the gradient without burning out.",
      },
      {
        title: "We set the force right",
        desc: "Correct force settings stop a heavy gate rolling back down the incline.",
      },
      {
        title: "A price before we start",
        desc: "You hear the cost upfront, even when the slope calls for a stronger motor.",
      },
      {
        title: "Backup for the power cuts",
        desc: "A battery keeps your gate opening up the hill when the power drops.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Glenvista sits on the hills of Johannesburg South, near the Country Club and the
          golf course, an easy run from our Alberton base along the main roads. We cover
          the whole suburb, from the steep stands up top to the streets near
          Klipriviersberg.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Send your address on WhatsApp and we will arrange a time. Finding the fault and
          quoting you is free.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Glenvista?",
        a: "Yes. We work across the whole suburb, from the steep stands near the Country Club to the streets bordering Klipriviersberg.",
      },
      {
        q: "How fast can you get to Glenvista?",
        a: "Glenvista is a straight run from our Alberton base across Johannesburg South, so we usually make it same day. Send your address and we will confirm the soonest window.",
      },
      {
        q: "My motor keeps failing on the steep driveway. Why?",
        a: "Almost always the motor is undersized for the slope. A gate that fights gravity on every cycle needs a higher-rated unit, which we fit so it stops cooking itself and lasts.",
      },
      {
        q: "Can you run electric fencing on a sloping boundary?",
        a: "Yes. We run the line to follow the slope so there are no gaps where the ground drops, then wire it into your alarm and test the whole run.",
      },
      {
        q: "How much does a stronger gate motor cost?",
        a: "It depends on the slope and the gate weight. We look at the driveway, recommend the right unit, and give you a clear price before we order anything.",
      },
      {
        q: "Can you fit cameras for a multi-level home?",
        a: "We do. We place the cameras to cover a stepped, sloping yard so there are no blind spots, and you can watch it all from your phone.",
      },
      {
        q: "Do you fit garage door motors here?",
        a: "Yes. We handle garage door motors as well as gate motors, which suits the split-level homes around the Country Club.",
      },
      {
        q: "Will my gate open during load shedding on the hill?",
        a: "Yes, with a healthy backup battery. We fit one with the motor so the gate still pulls up the incline when the power is off.",
      },
    ],
    nearby: ["bassonia", "mulbarton"],
  },

  // ─────────────────────────────────────────────────────────────
  bassonia: {
    slug: "bassonia",
    name: "Bassonia",
    region: "jhb",
    localityLabel: "Johannesburg South",
    image: "/images/areas/bassonia_cliffs.png",
    heroBadge: "Johannesburg South",
    heroTagline:
      "Heavy-duty gate motors and full security for the ridge-top homes of Bassonia. Same-day call-outs.",
    mapQuery: "Bassonia, Johannesburg",
    metaTitle:
      "Gate Motors, Electric Fencing & Security in Bassonia | Ridge & Estate Homes | Security Direct",
    metaDescription:
      "Strong gate motors, electric fencing, CCTV and alarms for Bassonia's ridge-top homes. Security Direct offers same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor Bassonia, gate motor repair Bassonia, electric fence Bassonia, CCTV Bassonia, security Bassonia",
    intro: {
      heading: "Security for Bassonia's ridge-top homes",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Bassonia sits up on the ridge, and the homes here are often big, with long,
            heavy gates and stands that climb the slope. A gate like that puts real strain
            on the motor, so the unit has to be built for the load. When yours gives
            trouble, we{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              track down the fault and fix it the same day
            </Link>
            .
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We also fit{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              heavier motors made for long ridge-top gates
            </Link>{" "}
            and run{" "}
            <Link href="/electric-fence-installation" className={linkClass}>
              electric fencing around a bigger perimeter
            </Link>{" "}
            with the views and the slope in mind. We mount everything solidly, add an
            anti-theft bracket, and set up a backup so it all keeps working when the power
            goes.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Long gates need a strong motor",
        body: (
          <>
            <p>
              Many Bassonia homes have wide driveways and heavy gates, sometimes solid
              steel for the look of it. A motor that is too small for that drags, overheats
              and gives up early, often at the worst moment.
            </p>
            <p>
              We size the unit to the real weight of the gate, mount it on a solid base so
              nothing shifts on the slope, and fit an anti-theft bracket to protect it. A
              gate this size deserves a motor that is not fighting for its life on every
              cycle.
            </p>
          </>
        ),
      },
      {
        heading: "Protecting a property with a view",
        body: (
          <>
            <p>
              Ridge homes often back onto open ground, which is lovely to look at and easy
              to approach from. That open side is usually where a property is most exposed.
            </p>
            <p>
              We run{" "}
              <Link href="/electric-fence-repair" className={linkClass}>
                a strong fence line
              </Link>{" "}
              along the exposed boundary and place cameras to cover the open ground, so the
              view does not come at the cost of your security. You keep the outlook and
              still sleep easy.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We fix the strain faults that come from long, heavy ridge-top gates and replace worn gears.",
      gateInstall:
        "Heavy-duty motors sized for wide Bassonia driveways, mounted solidly on the slope.",
      fenceInstall:
        "Electric fencing run around a big ridge perimeter, including the open side with the view.",
      fenceRepair:
        "We find the fault on a long fence line and get the whole run holding a charge again.",
      garage:
        "Garage door motors fitted for the larger homes along the ridge.",
      cctv:
        "Cameras placed to cover an exposed boundary where a property backs onto open ground.",
      alarm:
        "Alarms tied into the gate, fence and cameras so a big home runs from one panel.",
    },
    servicesIntro:
      "From a heavy gate to an exposed boundary, we cover the whole property. Here is what we help Bassonia homes with.",
    why: [
      {
        title: "Motors for heavy gates",
        desc: "Long ridge gates need real power. We fit units that take the weight without straining.",
      },
      {
        title: "Mounted to stay put",
        desc: "We mount on a solid base and add an anti-theft bracket so nothing shifts or walks.",
      },
      {
        title: "Your whole perimeter covered",
        desc: "Gate, fence and cameras from one team around a bigger property.",
      },
      {
        title: "Backup for every outage",
        desc: "A healthy battery keeps the gate and alarm awake when the power drops.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Bassonia sits on the ridge in Johannesburg South, next to Mulbarton and above
          Glenvista, a straightforward run from our Alberton base. We cover the whole
          suburb, from the cliff-top stands to the streets lower down.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          WhatsApp us your address and we will set up a visit. Working out the fault and
          the price costs nothing.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Bassonia?",
        a: "Yes. We work across the whole suburb, from the cliff-top stands on the ridge to the streets lower down toward Mulbarton.",
      },
      {
        q: "How fast can you get to Bassonia?",
        a: "Bassonia is an easy run from our Alberton base, up past Mulbarton, so same day is normal. Send your address and we will give you the soonest window.",
      },
      {
        q: "My heavy steel gate keeps failing. What is wrong?",
        a: "A solid gate that big needs a heavy-duty motor. If it has a standard unit it will drag and burn out. We fit a motor matched to the real weight so it runs without straining.",
      },
      {
        q: "Can you secure a boundary that backs onto open ground?",
        a: "Yes. The open side is where a ridge home is most exposed, so we run a strong fence line there and add cameras to cover the open ground.",
      },
      {
        q: "Can you stop the motor being stolen off the ridge?",
        a: "We fit an anti-theft bracket and mount the unit on a solid base, which makes it much harder to remove and keeps your investment in place.",
      },
      {
        q: "Do you fit cameras for a big property?",
        a: "We do. We place them to cover the driveway and the exposed boundary, and you can watch the lot from one screen or your phone.",
      },
      {
        q: "How much does a heavy-duty gate motor cost?",
        a: "It depends on the gate weight. We measure the gate, recommend the right unit, and give you a clear price before we order anything.",
      },
      {
        q: "Will the gate work during load shedding?",
        a: "Yes, with a healthy backup battery, which we fit with the motor and suggest replacing every few years so an outage never leaves you stuck on the ridge.",
      },
    ],
    nearby: ["glenvista", "mulbarton"],
  },

  // ─────────────────────────────────────────────────────────────
  mulbarton: {
    slug: "mulbarton",
    name: "Mulbarton",
    region: "jhb",
    localityLabel: "Johannesburg South",
    image: "/images/areas/mulbarton.png",
    heroBadge: "Johannesburg South",
    heroTagline:
      "Reliable gate motors, electric fencing and home security for Mulbarton families near the Netcare hospital. Same-day call-outs.",
    mapQuery: "Mulbarton, Johannesburg",
    metaTitle:
      "Gate Motors, Electric Fencing & Home Security in Mulbarton | Same-Day Call-Outs | Security Direct",
    metaDescription:
      "Gate motors, electric fencing, CCTV and alarms for Mulbarton homes near the Netcare hospital. Security Direct offers same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor Mulbarton, gate motor repair Mulbarton, electric fence Mulbarton, alarm Mulbarton, home security Mulbarton",
    intro: {
      heading: "Home security for Mulbarton families",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Mulbarton is a settled family suburb in Johannesburg South, known for the
            Netcare hospital and quiet residential streets. Most people here just want a
            gate and a fence that work without fuss. When the gate stops, we can{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              get it moving again the same day
            </Link>
            .
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We also{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              automate older manual gates
            </Link>{" "}
            and fit{" "}
            <Link href="/alarm-system-installation" className={linkClass}>
              an alarm that covers the doors, windows and yard
            </Link>
            . We size everything correctly, set it up properly, and add a backup so none of
            it stops when the power goes.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "A gate that is ready for load shedding",
        body: (
          <>
            <p>
              Like the rest of Johannesburg, Mulbarton gets its share of outages, and that
              is hard on gate motors. The battery drains on every cycle and the surge when
              power returns hits the control board.
            </p>
            <p>
              We fit a healthy backup and surge protection so your gate keeps opening
              through the dark and survives the jump when the lights come back. It is a
              small bit of extra work that saves you a dead gate and a bigger repair later.
            </p>
          </>
        ),
      },
      {
        heading: "Sorting the whole house in one visit",
        body: (
          <>
            <p>
              A lot of Mulbarton families would rather book one team for the gate, the
              alarm and the cameras than chase several companies. We can set it all up
              together and link it so it works as one system.
            </p>
            <p>
              We can also run{" "}
              <Link href="/electric-fence-installation" className={linkClass}>
                an electric fence along the wall
              </Link>{" "}
              while we are there, so the whole property is covered in a single visit and
              there is one number to call if anything needs attention.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We get a stuck Mulbarton gate moving again the same day, with the common parts already in the van.",
      gateInstall:
        "Older manual gates automated and set up with remotes and a backup for the whole family.",
      fenceInstall:
        "Electric fencing run along the wall and wired into your alarm for the whole perimeter.",
      fenceRepair:
        "We find the break on a dead fence and get the line charging again.",
      garage:
        "Garage door motors fitted and repaired so the house opens at the press of a button.",
      cctv:
        "Cameras you watch from your phone, day or night, set up with the gate and alarm.",
      alarm:
        "Alarms with sensors on the doors, windows and yard, clearly explained for the family.",
    },
    servicesIntro:
      "Once the gate is sorted, most Mulbarton families ask what else we cover. Here is the full list.",
    why: [
      {
        title: "We reach you quickly",
        desc: "Mulbarton is an easy run from our Alberton base, so a stuck gate usually gets a same-day visit.",
      },
      {
        title: "Ready for the outages",
        desc: "A backup battery and surge protection keep the gate going through load shedding.",
      },
      {
        title: "One team for the property",
        desc: "Gate, fence, alarm and cameras from one team, set up to work together.",
      },
      {
        title: "A price before we start",
        desc: "You hear the cost upfront, so nothing surprises you once the work is done.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Mulbarton sits in Johannesburg South near the Netcare hospital, between Bassonia
          and Mondeor, an easy run from our Alberton base. We cover the whole suburb and
          the streets around it.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          WhatsApp your address and we will arrange a time. Finding the fault and quoting
          you is free.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Mulbarton?",
        a: "Yes. We work across the whole suburb, including the streets around the Netcare hospital and out toward Bassonia and Mondeor.",
      },
      {
        q: "How fast can you get to Mulbarton?",
        a: "Mulbarton is a short run from our Alberton base across Johannesburg South, so we usually make it same day. Send your address for the soonest window.",
      },
      {
        q: "My gate is dead after load shedding. Can you help?",
        a: "Yes, it is one of our most common call-outs. Usually the battery has drained or the board took a surge. We test both, replace what failed, and add surge protection so it lasts longer.",
      },
      {
        q: "Can you automate my old manual gate?",
        a: "Yes. We check the gate moves freely, fit a motor sized to its weight, program remotes for the family, and show you the manual release in case you need it.",
      },
      {
        q: "Do you fit alarms that cover the whole house?",
        a: "We do. We place sensors on the doors, windows and yard, wire it to a backup, and show you how to arm and disarm it.",
      },
      {
        q: "Do you fit cameras I can see on my phone?",
        a: "Yes. You can watch the gate and the yard from anywhere, day or night, and we can set it up with the gate and alarm in one visit.",
      },
      {
        q: "How much does a repair cost?",
        a: "It depends on the fault. We run a quick diagnostic and give you the exact figure before any work starts.",
      },
      {
        q: "Will my gate and alarm work in load shedding?",
        a: "Yes, as long as the backup batteries are healthy. We fit a backup with both and suggest replacing them every few years.",
      },
    ],
    nearby: ["bassonia", "mondeor"],
  },

  // ─────────────────────────────────────────────────────────────
  "kibler-park": {
    slug: "kibler-park",
    name: "Kibler Park",
    region: "jhb",
    localityLabel: "Johannesburg South",
    image: "/images/areas/kibler_reserve.png",
    heroBadge: "Johannesburg South",
    heroTagline:
      "Gate motors, electric fencing and perimeter security for Kibler Park, on the edge of Klipriviersberg. Same-day call-outs.",
    mapQuery: "Kibler Park, Johannesburg",
    metaTitle:
      "Gate Motors, Electric Fencing & Security in Kibler Park | Klipriviersberg Edge | Security Direct",
    metaDescription:
      "Gate motors, electric fencing, CCTV and alarms for Kibler Park homes on the edge of Klipriviersberg. Security Direct offers same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor Kibler Park, gate motor repair Kibler Park, electric fence Kibler Park, CCTV Kibler Park, security Kibler Park",
    intro: {
      heading: "Perimeter security on the edge of the reserve",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Kibler Park sits right on the edge of the Klipriviersberg Nature Reserve, and
            homes that border open veld need a solid perimeter more than most. A reliable
            gate and a fence that holds its charge are the first line of defence. When the
            gate stops, we{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              fix it the same day
            </Link>{" "}
            so you are never left open.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We run{" "}
            <Link href="/electric-fence-installation" className={linkClass}>
              electric fencing along a boundary that backs onto the reserve
            </Link>{" "}
            and fit{" "}
            <Link href="/cctv" className={linkClass}>
              cameras you can watch from your phone
            </Link>
            , so the open ground behind you is covered. We add a strong backup so the gate
            and fence keep working through the outages.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Securing a boundary that backs onto veld",
        body: (
          <>
            <p>
              When your back wall faces open reserve, that side needs the most attention. It
              is quiet, dark and easy to approach, which is exactly what makes it the weak
              point of a property here.
            </p>
            <p>
              We run the fence line high and tight along the exposed boundary, wire it into
              your alarm, and place cameras to watch the ground a person would actually
              cross. It turns the quiet, open side of the property into the best-protected
              one.
            </p>
          </>
        ),
      },
      {
        heading: "Power that does not quit",
        body: (
          <>
            <p>
              Out on the edge of the reserve, an outage that leaves the gate and fence dead
              is more than an inconvenience. The perimeter you rely on goes to sleep just
              when the area is at its quietest.
            </p>
            <p>
              We fit a healthy backup battery and can set up{" "}
              <Link href="/electric-fence-repair" className={linkClass}>
                the fence
              </Link>{" "}
              with its own power, so the boundary stays live even when the mains is off for
              hours at a time.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We get a Kibler Park gate moving again the same day so your perimeter is never left open.",
      gateInstall:
        "New motors fitted with a strong backup, which matters on the edge of the reserve.",
      fenceInstall:
        "Electric fencing run high and tight along a boundary that faces open veld.",
      fenceRepair:
        "We find the fault on a fence facing the reserve and get the line live again fast.",
      garage:
        "Garage door motors fitted and repaired for homes along the reserve edge.",
      cctv:
        "Cameras placed to watch the open ground behind a property that borders the reserve.",
      alarm:
        "Alarms wired to the fence so you know the moment the exposed boundary is touched.",
    },
    servicesIntro:
      "On the edge of the reserve the perimeter is everything. Here is what we help Kibler Park homes with.",
    why: [
      {
        title: "We protect the open side",
        desc: "Boundaries that face the reserve get the strongest fence and the best camera angles.",
      },
      {
        title: "Backup that lasts",
        desc: "A strong battery keeps the gate and fence live through long outages.",
      },
      {
        title: "One team for the perimeter",
        desc: "Gate, fence, cameras and alarm set up to work together.",
      },
      {
        title: "A price before we start",
        desc: "You hear the cost upfront, so nothing surprises you later.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Kibler Park sits on the southern edge of Johannesburg, against the Klipriviersberg
          reserve, an easy run from our Alberton base. We cover the whole suburb, including
          the homes right on the reserve boundary.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          WhatsApp your address and we will set up a time. The diagnostic and quote are
          free.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Kibler Park?",
        a: "Yes. We work across the whole suburb, including the homes right on the Klipriviersberg boundary.",
      },
      {
        q: "How fast can you get to Kibler Park?",
        a: "Kibler Park is a straightforward run from our Alberton base across the south, so same day is normal. Send your address for the soonest window.",
      },
      {
        q: "My back wall faces the reserve. How do you secure it?",
        a: "We run the fence line high and tight along that boundary, wire it into your alarm, and place cameras to watch the open ground. The exposed side becomes the best-protected one.",
      },
      {
        q: "Can the fence stay on during long outages?",
        a: "Yes. We can set the fence up with its own power so the perimeter stays live even when the mains is off for hours.",
      },
      {
        q: "Do you fit cameras for the open ground behind the house?",
        a: "We do. We angle them to cover the ground a person would actually cross, and you can watch it from your phone.",
      },
      {
        q: "How much does the work cost?",
        a: "It depends on the job. We run a free diagnostic and give you a clear price before any work starts.",
      },
      {
        q: "Can you automate my gate with a strong backup?",
        a: "Yes. We fit a motor sized to your gate and pair it with a strong battery, important when an open perimeter cannot wait for the power to come back.",
      },
      {
        q: "Can the alarm tell me when the fence is touched?",
        a: "Yes. We wire the fence into the alarm so you get a warning the moment the line is touched.",
      },
    ],
    nearby: ["winchester-hills", "mondeor"],
  },

  // ─────────────────────────────────────────────────────────────
  germiston: {
    slug: "germiston",
    name: "Germiston",
    region: "jhb",
    localityLabel: "the East Rand",
    image: "/images/areas/germiston_lake.png",
    heroBadge: "East Rand",
    heroTagline:
      "Gate motors for homes and businesses across Germiston, from the lake to the industrial areas. Fast call-outs.",
    mapQuery: "Victoria Lake, Germiston",
    metaTitle:
      "Gate Motors, Electric Fencing & Security in Germiston | Home & Commercial | Security Direct",
    metaDescription:
      "Home and commercial gate motors, electric fencing, CCTV and alarms across Germiston. Security Direct offers fast call-outs. Call 082 498 1272.",
    keywords:
      "gate motor Germiston, gate motor repair Germiston, commercial gate motor Germiston, electric fence Germiston, security Germiston",
    intro: {
      heading: "Home and commercial security across Germiston",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Germiston runs from the homes around Victoria Lake out to the busy industrial
            areas, so the security needs here are mixed. A factory gate takes far more daily
            traffic than a home gate, and both have to be reliable. Whatever yours is doing,
            we can{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              get it sorted with a fast call-out
            </Link>
            .
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We fit{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              heavy-duty motors for commercial and residential gates
            </Link>{" "}
            and run{" "}
            <Link href="/electric-fence-installation" className={linkClass}>
              electric fencing for homes, yards and business premises
            </Link>
            . We size the motor to the daily traffic, build it to last, and add a backup so
            the gate keeps moving through the outages.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Gates built for daily traffic",
        body: (
          <>
            <p>
              A business gate in Germiston might cycle hundreds of times a day, which a
              standard home motor simply cannot handle. It overheats and fails within
              months, leaving the premises open.
            </p>
            <p>
              We fit heavy-duty units rated for that traffic, with the right gearing so they
              do not cook themselves by lunchtime. For homes around the lake we fit quieter,
              lighter motors that suit a normal driveway. Matching the motor to the use is
              what makes it last.
            </p>
          </>
        ),
      },
      {
        heading: "Securing a yard or premises",
        body: (
          <>
            <p>
              Industrial and commercial sites need more than a gate. The yard, the fence
              line and the dark corners after hours all matter when nobody is on site.
            </p>
            <p>
              We run{" "}
              <Link href="/electric-fence-repair" className={linkClass}>
                electric fencing
              </Link>{" "}
              around yards and add cameras across the property, so you can see the whole
              site from one screen. For a business, knowing the perimeter is watched
              overnight is half the job done.
            </p>
            <p>
              We work around your hours too, so the gate or fence on a working site gets
              sorted with as little disruption as possible. A quick job booked for early
              morning often means the premises are secure again before the first staff
              arrive.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We sort home and commercial gate faults across Germiston with a fast call-out and parts on hand.",
      gateInstall:
        "Heavy-duty motors for business gates and quieter units for the homes around the lake.",
      fenceInstall:
        "Electric fencing for homes, yards and business premises, wired into your alarm.",
      fenceRepair:
        "We repair fence lines on homes and commercial sites and get them charging again.",
      garage:
        "Garage and roller door motors fitted and repaired for homes and small premises.",
      cctv:
        "Cameras across a home or a whole business site, all viewed from one screen.",
      alarm:
        "Alarms for homes and premises, with sensors covering the doors and the yard.",
    },
    servicesIntro:
      "Home or business, we fit the right setup for the job. Here is what we help Germiston properties with.",
    why: [
      {
        title: "Home or commercial, we cover it",
        desc: "From a driveway gate to a factory entrance, we fit the right motor for the use.",
      },
      {
        title: "Built for the daily traffic",
        desc: "Heavy-use gates get heavy-duty units rated to take the cycles and last.",
      },
      {
        title: "Fast call-outs",
        desc: "A gate stuck open at a business is a security risk, so we move quickly.",
      },
      {
        title: "Backup for every outage",
        desc: "A battery keeps the gate working through load shedding.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Germiston sits on the East Rand, from Victoria Lake out to the industrial areas, a
          short run from our Alberton base. We cover homes and businesses right across the
          area.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          WhatsApp your address and we will set up a time. The diagnostic and quote are
          free.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Germiston?",
        a: "Yes. We work right across Germiston, from the homes around Victoria Lake to the industrial and commercial areas.",
      },
      {
        q: "How fast can you get to Germiston?",
        a: "Germiston is a short run from our Alberton base on the East Rand, so we move quickly, often same day. Send your address for the soonest window.",
      },
      {
        q: "Do you work on commercial and factory gates?",
        a: "Yes. We fit and repair heavy-duty motors rated for the high traffic a business gate sees, so it does not burn out within months.",
      },
      {
        q: "Can you fit electric fencing on business premises?",
        a: "We do. We run fencing around yards and premises and add cameras across the site, so the whole perimeter is covered after hours.",
      },
      {
        q: "My business gate keeps failing. Why?",
        a: "Usually it is a home-grade motor on a high-traffic gate. We replace it with a heavy-duty unit matched to how often the gate is used.",
      },
      {
        q: "Can I see a whole site from one screen?",
        a: "Yes. We set the cameras up so you can watch the full property from one screen or your phone, on site or from anywhere.",
      },
      {
        q: "How much does the work cost?",
        a: "It depends on the job and whether it is home or commercial. We run a free diagnostic and quote you before any work starts.",
      },
      {
        q: "Do you fit roller and garage door motors for premises?",
        a: "Yes. We handle roller and garage door motors for homes and small premises as well as gate motors.",
      },
    ],
    nearby: ["glenvista", "mulbarton"],
  },

  // ─────────────────────────────────────────────────────────────
  mondeor: {
    slug: "mondeor",
    name: "Mondeor",
    region: "jhb",
    localityLabel: "Johannesburg South",
    image: "/images/areas/mondeor_hills.png",
    heroBadge: "Johannesburg South",
    heroTagline:
      "Gate motors, electric fencing and home security for Mondeor, tucked in the southern hills. Same-day call-outs.",
    mapQuery: "Mondeor, Johannesburg",
    metaTitle:
      "Gate Motors, Electric Fencing & Home Security in Mondeor | Same-Day Call-Outs | Security Direct",
    metaDescription:
      "Gate motors, electric fencing, CCTV and alarms for Mondeor homes in the southern hills. Security Direct offers same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor Mondeor, gate motor repair Mondeor, electric fence Mondeor, alarm Mondeor, home security Mondeor",
    intro: {
      heading: "Reliable security for the Mondeor hills",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Mondeor sits in the southern hills of Johannesburg, with older, established
            homes and plenty of manual gates still in use. The slopes here mean a gate motor
            works harder than on flat ground. When yours struggles or stops, we{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              fix it the same day
            </Link>
            .
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            A lot of Mondeor homeowners ask us to{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              automate an older manual gate
            </Link>{" "}
            and to{" "}
            <Link href="/electric-fence-installation" className={linkClass}>
              run electric fencing along the wall
            </Link>
            . We check the gate moves freely first, size the motor to the slope and the
            weight, and add a backup so it rides out the load shedding.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Automating an older manual gate",
        body: (
          <>
            <p>
              Mondeor has lots of homes where the gate is still pushed by hand. Automating
              it is one of the best upgrades you can make, but only if the gate runs freely
              first.
            </p>
            <p>
              We check the rollers and the track, sort any drag, then fit a motor sized for
              the slope so it opens smoothly rather than straining on the hill. Done right,
              an old gate ends up working better than it ever did by hand.
            </p>
          </>
        ),
      },
      {
        heading: "Ready for the power cuts",
        body: (
          <>
            <p>
              The southern suburbs see plenty of load shedding, and that wears batteries
              fast, especially on a sloped gate that draws more power on every cycle.
            </p>
            <p>
              We fit a healthy backup and protect the board from the surge when power
              returns, so an outage does not leave you stuck halfway up the drive. We can
              also tie in{" "}
              <Link href="/alarm-system-repair" className={linkClass}>
                a reliable alarm
              </Link>{" "}
              on the same backup, so the whole setup stays awake together.
            </p>
            <p>
              Many of the homes here have been in the same family for years, and the gear
              shows its age. A quick service, where we test the battery under load and look
              over the board, keeps a small fault from turning into a dead gate on a cold
              morning.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We fix gate motors worn by Mondeor's slopes and the older gear common on established homes.",
      gateInstall:
        "Older manual gates automated, with the motor sized for the hill so it opens smoothly.",
      fenceInstall:
        "Electric fencing run along the wall and wired into your alarm.",
      fenceRepair:
        "We find the break on a dead fence and get the whole line charging again.",
      garage:
        "Garage door motors fitted and repaired for the established homes in the hills.",
      cctv:
        "Cameras you watch from your phone, covering a sloped, stepped yard.",
      alarm:
        "Alarms with sensors on the doors, windows and yard, on the same backup as the gate.",
    },
    servicesIntro:
      "From reviving an old gate to covering the whole property, here is what we help Mondeor homes with.",
    why: [
      {
        title: "Motors sized for the slope",
        desc: "Hill driveways need more pull. We fit units that handle it without straining.",
      },
      {
        title: "We revive older gates",
        desc: "We get freely-running older gates automated neatly and reliably.",
      },
      {
        title: "Ready for outages",
        desc: "Backup and surge protection keep the gate going through load shedding.",
      },
      {
        title: "A price before we start",
        desc: "You hear the cost upfront, so nothing surprises you later.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Mondeor sits in the southern hills, near Winchester Hills and Mulbarton, a short
          run from our Alberton base. We cover the whole suburb and the streets around it.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          WhatsApp your address and we will arrange a time. The diagnostic and quote are
          free.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Mondeor?",
        a: "Yes. We work across the whole suburb in the southern hills, out toward Winchester Hills and Mulbarton.",
      },
      {
        q: "How fast can you get to Mondeor?",
        a: "Mondeor is a short run from our Alberton base across the south, so we usually make it same day. Send your address for the soonest window.",
      },
      {
        q: "Can you automate my old manual gate?",
        a: "Yes, once it runs freely. We check the rollers and track, sort any drag, then fit a motor sized for the slope so it opens smoothly.",
      },
      {
        q: "My motor struggles on the hill. What is wrong?",
        a: "It is usually undersized for the slope. A gate on an incline needs more pull, so we fit a stronger unit and set the force correctly.",
      },
      {
        q: "Can the gate, fence and alarm run on one backup?",
        a: "Yes. We can set them up on a shared backup so the whole system stays awake together through an outage.",
      },
      {
        q: "Do you fit cameras for a stepped yard?",
        a: "We do. We place them to cover a sloped, stepped yard with no blind spots, and you watch it from your phone.",
      },
      {
        q: "How much does a repair cost?",
        a: "It depends on the fault. We run a free diagnostic and give you the exact figure before any work starts.",
      },
      {
        q: "Will my gate work in load shedding?",
        a: "Yes, with a healthy backup and surge protection, which we fit so an outage does not leave you stuck on the drive.",
      },
    ],
    nearby: ["winchester-hills", "mulbarton"],
  },

  // ─────────────────────────────────────────────────────────────
  "winchester-hills": {
    slug: "winchester-hills",
    name: "Winchester Hills",
    region: "jhb",
    localityLabel: "Johannesburg South",
    image: "/images/areas/winchester_mosque.png",
    heroBadge: "Johannesburg South",
    heroTagline:
      "Gate motors, electric fencing and home security for Winchester Hills, up on the southern ridges. Same-day call-outs.",
    mapQuery: "Winchester Hills, Johannesburg",
    metaTitle:
      "Gate Motors, Electric Fencing & Security in Winchester Hills | Ridge Homes | Security Direct",
    metaDescription:
      "Gate motors, electric fencing, CCTV and alarms for Winchester Hills homes on the southern ridges. Security Direct offers same-day call-outs. Call 082 498 1272.",
    keywords:
      "gate motor Winchester Hills, gate motor repair Winchester Hills, electric fence Winchester Hills, CCTV Winchester Hills, security Winchester Hills",
    intro: {
      heading: "Security for the Winchester Hills ridges",
      body: (
        <>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Winchester Hills runs along the ridges above Johannesburg South, and plenty of
            gates here are long and sit on a slope. That asks a lot of the motor on every
            cycle. When yours starts to drag or stops altogether, we{" "}
            <Link href="/gate-motor-repair" className={linkClass}>
              get it going again the same day
            </Link>
            .
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We fit{" "}
            <Link href="/gate-motor-installation" className={linkClass}>
              motors that match a long, sloped gate
            </Link>{" "}
            and set up{" "}
            <Link href="/cctv" className={linkClass}>
              cameras and an intercom
            </Link>{" "}
            so you can see who is at the gate before you open from up the drive. We add a
            backup so the gate keeps working through the outages.
          </p>
        </>
      ),
    },
    localSections: [
      {
        heading: "Long gates on a slope",
        body: (
          <>
            <p>
              A wide gate on a ridge driveway is one of the harder jobs for a motor, because
              it carries the weight and fights the incline at the same time. A standard unit
              wears out fast under that double load.
            </p>
            <p>
              We fit a motor rated for both, set the force so the gate does not roll back,
              and program your remotes and a keypad at the gate so everyone gets in easily.
              It is the difference between a gate that limps along and one that just works.
            </p>
          </>
        ),
      },
      {
        heading: "See who is there before you open",
        body: (
          <>
            <p>
              On a long driveway up the ridge, walking down to check the gate is a real
              pain, and opening blind to a stranger is worse.
            </p>
            <p>
              We set up{" "}
              <Link href="/electric-fence-installation" className={linkClass}>
                the fence
              </Link>
              , cameras and an intercom so you can see and speak to whoever is at the gate
              from the house, then open from where you are. It is a small change that makes
              a ridge-top home far easier to live in.
            </p>
          </>
        ),
      },
    ],
    serviceBlurbs: {
      gateRepair:
        "We fix the drag and strain faults that come from long gates on the Winchester Hills ridges.",
      gateInstall:
        "Motors matched to long, sloped gates, with remotes and a keypad set up at the gate.",
      fenceInstall:
        "Electric fencing run along a ridge boundary and wired into your alarm.",
      fenceRepair:
        "We find the fault on a long ridge fence line and get it charging again.",
      garage:
        "Garage door motors fitted for the larger ridge homes.",
      cctv:
        "Cameras and an intercom so you see who is at the gate from up the drive.",
      alarm:
        "Alarms with sensors covering a larger, multi-level ridge home.",
    },
    servicesIntro:
      "From a long, sloped gate to easy access up the drive, here is what we help Winchester Hills homes with.",
    why: [
      {
        title: "Motors for long, sloped gates",
        desc: "Ridge gates need power for the weight and the incline. We fit units rated for both.",
      },
      {
        title: "Easy access from the house",
        desc: "Remotes, a keypad and an intercom so you get in without walking down the drive.",
      },
      {
        title: "Your whole perimeter covered",
        desc: "Gate, fence and cameras from one team around a ridge property.",
      },
      {
        title: "Backup for the outages",
        desc: "A battery keeps the gate opening when the power drops.",
      },
    ],
    directions: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Winchester Hills runs along the ridges of Johannesburg South, near Mondeor and
          Kibler Park, a short run from our Alberton base. We cover the whole suburb, from
          the ridge-top stands down.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          WhatsApp your address and we will arrange a time. The diagnostic and quote are
          free.
        </p>
      </>
    ),
    faqs: [
      {
        q: "Do you cover all of Winchester Hills?",
        a: "Yes. We work across the whole suburb, from the ridge-top stands to the streets lower down toward Mondeor and Kibler Park.",
      },
      {
        q: "How fast can you get to Winchester Hills?",
        a: "Winchester Hills is a short run from our Alberton base across the south, so same day is normal. Send your address for the soonest window.",
      },
      {
        q: "My long gate keeps dragging. What is wrong?",
        a: "A long gate on a slope carries the weight and fights the incline at once, so a standard motor wears out. We fit a unit rated for both and set the force so it stops dragging.",
      },
      {
        q: "Can I see the gate from the house?",
        a: "Yes. We set up cameras and an intercom so you can see and speak to whoever is at the gate from inside, then open from where you are.",
      },
      {
        q: "Can you fit a keypad at the gate?",
        a: "We can. We program your remotes and add a keypad at the gate so everyone gets in easily without an extra remote.",
      },
      {
        q: "Do you fit cameras for a multi-level home?",
        a: "Yes. We place them to cover a stepped, multi-level property with no blind spots, and you watch it from your phone.",
      },
      {
        q: "How much does the work cost?",
        a: "It depends on the gate and the job. We run a free diagnostic and give you a clear price before any work starts.",
      },
      {
        q: "Will my gate open during load shedding on the ridge?",
        a: "Yes, with a healthy backup battery, which we fit with the motor so the gate still opens when the power is off.",
      },
    ],
    nearby: ["mondeor", "kibler-park"],
  },
};

export const areaSlugs = Object.keys(areaPages);
