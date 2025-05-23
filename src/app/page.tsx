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
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-7xl mx-auto">
            <h1 className="hero-text mb-6">Michigan Living</h1>
            <h2 className="subtitle-text mb-12">
              A Straticon Family Experience
            </h2>
            <Link href="/login">
              <Button
                variant="default"
                size="lg"
                className="bg-white/90 text-gray-900 text-lg px-12 py-6 hover:bg-white hover:scale-105 transition-transform duration-300"
              >
                Begin Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Letter */}
      <section className="py-32 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto letter-paper">
          <h3 className="text-4xl font-bold mb-12 text-center font-playfair">
            Dear Valued Straticon Family Member,
          </h3>
          <div className="space-y-8 text-lg leading-relaxed">
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
            <div className="text-right mt-16">
              <p className="font-semibold">With heartfelt appreciation,</p>
              <p className="text-2xl mt-2 font-playfair">The Hardin Family</p>
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
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white max-w-5xl px-4">
            <h2 className="text-8xl font-bold mb-8 font-playfair">Traverse City</h2>
            <p className="text-3xl mb-6 opacity-90">
              Where crystal waters meet endless horizons
            </p>
            <p className="text-xl max-w-3xl mx-auto opacity-80">
              Experience the jewel of Northern Michigan, where pristine beaches,
              rolling vineyards, and charming downtown streets create unforgettable
              moments
            </p>
          </div>
        </div>
      </section>

      {/* Recognition Tiers */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="hero-text text-center mb-24 text-gray-900">Recognition</h2>
          <div className="grid md:grid-cols-3 gap-16">
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
              <div key={tier.title} className="modern-card p-12">
                <h3 className="text-3xl font-bold mb-6 font-playfair">{tier.title}</h3>
                <p className="text-2xl mb-8 text-gray-600">{tier.years}</p>
                <ul className="space-y-4">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center text-lg">
                      <span className="w-2 h-2 bg-cherry-red rounded-full mr-3"></span>
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
      <section className="py-32 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-20">
            <div className="text-center fade-in">
              <MapPin className="w-20 h-20 mx-auto mb-8 text-cherry-red" />
              <h3 className="text-3xl font-bold mb-6 font-playfair">Prime Locations</h3>
              <p className="text-xl text-gray-600">
                Stunning waterfront properties in Northern Michigan's finest areas
              </p>
            </div>
            <div className="text-center fade-in">
              <Users className="w-20 h-20 mx-auto mb-8 text-cherry-red" />
              <h3 className="text-3xl font-bold mb-6 font-playfair">Family Focused</h3>
              <p className="text-xl text-gray-600">
                Create lasting memories in our spacious retreats
              </p>
            </div>
            <div className="text-center fade-in">
              <Calendar className="w-20 h-20 mx-auto mb-8 text-cherry-red" />
              <h3 className="text-3xl font-bold mb-6 font-playfair">Flexible Stays</h3>
              <p className="text-xl text-gray-600">
                Book your perfect getaway any time of year
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="hero-text mb-12 text-gray-900">Your Retreat Awaits</h2>
          <p className="text-2xl mb-16 text-gray-600">
            Sign in with your Straticon email to explore our properties
          </p>
          <Link href="/login">
            <Button
              variant="default"
              size="lg"
              className="bg-cherry-red text-white text-xl px-16 py-8 hover:bg-[#7A1C29] transform hover:scale-105 transition-all duration-300"
            >
              Sign In to Book
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
