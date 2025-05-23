import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Cherry Background */}
      <section
        className="parallax-section full-width-section"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-black/50 to-black/30">
          <div className="text-center text-white px-4">
            <h1 className="hero-text mb-4">Michigan Living</h1>
            <h2 className="text-2xl md:text-4xl font-light mb-8">
              A Straticon Family Experience
            </h2>
          </div>
        </div>
      </section>

      {/* Welcome Letter */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto letter-paper">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Dear Valued Straticon Family Member,
          </h3>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              You know, as I sit here writing this letter, my heart is filled
              with immense gratitude. Not just because you're reading this, but
              because of everything you represent to us at Straticon. You're not
              just an employee number or a position title, you're a vital thread
              in the fabric of our company's story, and that means the world to
              us.
            </p>
            <p>
              I remember the day we first acquired our property in Northern
              Michigan, and I couldn't help but think, "Wouldn't it be wonderful
              if we could share this slice of heaven with our Straticon family?"
              Because that's what you are to us - family. Through every project
              completed, every challenge overcome, and every milestone achieved,
              you've stood with us, building not just structures, but a legacy we
              can all be proud of.
            </p>
            <p>
              Our properties in Northern Michigan are more than just vacation
              homes, they're sanctuaries where time seems to slow down, where
              the worries of the world melt away with each sunset over Lake
              Michigan, and where memories are waiting to be made. From the
              crystal-clear waters that stretch as far as the eye can see, to
              the charming streets of Traverse City lined with local boutiques
              and cafes, every corner holds a new adventure.
            </p>
            <p>
              And yes, if you're lucky enough to visit during the National Cherry
              Festival in June, you'll get to experience one of Michigan's
              sweetest traditions, but honestly, every season here has its own
              magic. Spring brings a burst of color as cherry blossoms paint the
              peninsulas, summer offers endless days of lakeside relaxation, fall
              transforms the landscape into a canvas of warm colors, and winter
              blankets everything in serene white.
            </p>
            <p>
              This invitation is our way of saying "thank you" - for your
              dedication, your passion, and most importantly, for being part of
              our extended family. We want you to experience the joy, peace, and
              beauty that we've found in this special corner of the world,
              because you've earned it, my friend, you truly have.
            </p>
            <div className="text-right mt-12">
              <p className="font-semibold">With heartfelt appreciation,</p>
              <p className="text-xl mt-2 font-playfair">The Hardin Family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Traverse City Showcase */}
      <section
        className="parallax-section full-width-section"
        style={{
          backgroundImage:
            "url('https://cdn.traversecity.com/images/2022/07/TC-Beach-1-1920x1080.jpg')",
          backgroundPosition: "center center",
        }}
      >
        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-900/60 via-blue-900/40 to-transparent">
          <div className="text-center text-white max-w-4xl px-4">
            <h2 className="text-6xl font-bold mb-6 font-playfair">Traverse City</h2>
            <p className="text-2xl mb-4 opacity-90">
              Where crystal waters meet endless horizons
            </p>
            <p className="text-lg max-w-2xl mx-auto opacity-80">
              Experience the jewel of Northern Michigan, where pristine beaches,
              rolling vineyards, and charming downtown streets create unforgettable
              moments
            </p>
          </div>
        </div>
      </section>

      {/* Recognition Tiers */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="hero-text text-center mb-16">Recognition</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Legacy Circle",
                years: "20+ Years",
                perks: [
                  "Priority Access to All Properties",
                  "Extended Stays",
                  "Concierge Service",
                ],
              },
              {
                title: "Heritage Club",
                years: "10+ Years",
                perks: [
                  "Preferred Booking Windows",
                  "Weekend Stays",
                  "Local Activity Planning",
                ],
              },
              {
                title: "Foundation Society",
                years: "5+ Years",
                perks: ["Standard Booking Access", "Weekend Stays", "Welcome Package"],
              },
            ].map((tier) => (
              <div key={tier.title} className="modern-card p-8">
                <h3 className="text-2xl font-bold mb-4">{tier.title}</h3>
                <p className="text-xl mb-6">{tier.years}</p>
                <ul className="space-y-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center fade-in">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-2xl font-bold mb-4">Prime Locations</h3>
              <p className="text-gray-600 text-lg">
                Stunning waterfront properties in Northern Michigan's finest areas
              </p>
            </div>
            <div className="text-center fade-in">
              <Users className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-2xl font-bold mb-4">Family Focused</h3>
              <p className="text-gray-600 text-lg">
                Create lasting memories in our spacious retreats
              </p>
            </div>
            <div className="text-center fade-in">
              <Calendar className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-2xl font-bold mb-4">Flexible Stays</h3>
              <p className="text-gray-600 text-lg">
                Book your perfect getaway any time of year
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="hero-text mb-8">Your Retreat Awaits</h2>
          <p className="text-xl mb-12">
            Sign in with your Straticon email to explore our properties
          </p>
          <Link href="/login">
            <Button
              variant="default"
              size="lg"
              className="bg-blue-900 text-white text-lg px-12 py-6 hover:bg-blue-800"
            >
              Sign In to Book
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
