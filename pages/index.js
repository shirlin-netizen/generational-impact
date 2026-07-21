import React, { useState } from 'react';
import { ArrowRight, Zap, TrendingUp, Users, Target, Mail } from 'lucide-react';

export default function GenerationalImpactSite() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Role:', role);
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setRole('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Generational
        </div>
        <div className="flex gap-8">
          <a href="#problem" className="text-gray-400 hover:text-white transition">Vision</a>
          <a href="#platform" className="text-gray-400 hover:text-white transition">Platform</a>
          <a href="#join" className="text-gray-400 hover:text-white transition">Join</a>
        </div>
      </nav>

      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-purple-900/30 border border-purple-500/50 rounded-full">
              <span className="text-purple-300 text-sm font-medium">Generational Impact Platform</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
              What happens to your <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">kids</span> when you reclaim yourself?
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              High-performing mothers are running everything but themselves. We're building the platform that shows the correlation: when you come back to your identity and purpose, your children develop differently.
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button 
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-lg hover:border-purple-500 hover:text-purple-400 transition"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-3xl"></div>
            <div className="relative bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="text-2xl font-bold text-cyan-400">→</div>
                  <div>
                    <p className="text-sm text-gray-400">Mother increases identity time</p>
                    <p className="text-lg font-bold">5 hours/week</p>
                  </div>
                </div>
                <div className="h-px bg-gray-700"></div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl font-bold text-purple-400">↑</div>
                  <div>
                    <p className="text-sm text-gray-400">Child's agency & resilience scores</p>
                    <p className="text-lg font-bold">+15-30%</p>
                  </div>
                </div>
                <div className="h-px bg-gray-700"></div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl font-bold text-pink-400">◆</div>
                  <div>
                    <p className="text-sm text-gray-400">Kids' school engagement & presence</p>
                    <p className="text-lg font-bold">Measurable improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="px-8 py-24 bg-gray-950 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-black mb-6">
              The mothers everyone sees—but no one knows
            </h2>
            <p className="text-xl text-gray-400">
              Running $150k+ careers. Managing perfect homes. Raising thriving kids. Completely losing themselves in the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-800 rounded-lg p-8 hover:border-cyan-500/50 transition">
              <Users className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">Running Thin</h3>
              <p className="text-gray-400">Zero margin. Outsourcing their whole lives. Cortisol through the roof. They've lost themselves in the systems they built.</p>
            </div>
            <div className="border border-gray-800 rounded-lg p-8 hover:border-purple-500/50 transition">
              <Target className="text-purple-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">Chasing Ghosts</h3>
              <p className="text-gray-400">Comparing themselves to impossible standards. Keeping up with Joneses. Performing excellence while dying inside.</p>
            </div>
            <div className="border border-gray-800 rounded-lg p-8 hover:border-pink-500/50 transition">
              <Zap className="text-pink-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">Desperate for Integration</h3>
              <p className="text-gray-400">They don't need another productivity hack. They need to come back to who they actually are—and raise kids who know who they are.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="px-8 py-24 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black mb-6">
            The Platform That Measures Generational Impact
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Not another coaching program. A system that transforms individual mothers and creates the data that proves why.
          </p>
        </div>

        <div className="space-y-8">
          <div className="border-l-4 border-cyan-400 pl-8 py-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-cyan-400">01</span>
              <h3 className="text-2xl font-bold">Identity Reclamation</h3>
            </div>
            <p className="text-gray-400">Guided framework: Who are you without the roles? What matters? What did you abandon? Mother works through transformational content, journaling, and coaching to return to herself.</p>
          </div>

          <div className="border-l-4 border-purple-400 pl-8 py-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-purple-400">02</span>
              <h3 className="text-2xl font-bold">Real Measurement</h3>
            </div>
            <p className="text-gray-400">Dashboard tracks mother's progress: hours invested in identity work, clarity scores, boundaries set, stress/cortisol proxies (sleep, energy, anxiety). Creates accountability. Builds momentum.</p>
          </div>

          <div className="border-l-4 border-pink-400 pl-8 py-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-pink-400">03</span>
              <h3 className="text-2xl font-bold">Generational Correlation</h3>
            </div>
            <p className="text-gray-400">The magic: Platform shows child outcomes (agency, resilience, school engagement, family presence). Mother sees the data: "When I invested 5 hours in myself, my kid's anxiety dropped 30%." Proof of impact.</p>
          </div>

          <div className="border-l-4 border-emerald-400 pl-8 py-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-emerald-400">04</span>
              <h3 className="text-2xl font-bold">Scale Without Loss</h3>
            </div>
            <p className="text-gray-400">Framework becomes teachable. Other facilitators deliver with fidelity. Platform automates measurement. Individual transformation reaches 100s, then 1000s. Enterprise sees the data and wants it for their high-performing leaders.</p>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 bg-gray-950 border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-12">Why This Actually Works</h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">I've led enterprise transformation at scale.</span> I know how to move large systems. I know how to change behavior. I know the rooms where hard decisions happen.
            </p>
            
            <p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold">I've also done the inner work.</span> Regulating my body. Journaling back to myself. Finding my way home to who I actually am. I'm the daughter of immigrants who rebuilt from nothing—twice. I know what it costs to hold both worlds: ambition and presence, pressure and purpose, excellence and tenderness.
            </p>
            
            <p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-emerald-500 font-bold">Most people sell one or the other.</span> Coaches sell inner work. Consultants sell systems. I sell the integration. I know how to teach ambitious women to come back to themselves AND build grounded energy to parent with presence, work with power, and dream so clearly their lives rise to meet them.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="border border-gray-800 rounded-lg p-8">
            <div className="text-4xl font-black text-cyan-400 mb-4">12 months</div>
            <p className="text-gray-300 mb-4">100 premium mothers. $500K ARR. Platform framework built.</p>
            <p className="text-sm text-gray-500">Proven model. Proven transformation. Proven measurement.</p>
          </div>
          
          <div className="border border-gray-800 rounded-lg p-8">
            <div className="text-4xl font-black text-purple-400 mb-4">24 months</div>
            <p className="text-gray-300 mb-4">Facilitator model. Platform scales beyond me. 500+ users.</p>
            <p className="text-sm text-gray-500">Transformation fidelity maintained. Measurement proven.</p>
          </div>
          
          <div className="border border-gray-800 rounded-lg p-8">
            <div className="text-4xl font-black text-pink-400 mb-4">36 months</div>
            <p className="text-gray-300 mb-4">Enterprise buyers. Fortune 500 HR departments. $5M+ ARR.</p>
            <p className="text-sm text-gray-500">Generational impact at scale. Redefining female leadership.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            This isn't a coaching program that caps out at $500K. This is a platform that measures and enables generational transformation. That's a different business. That's a $50M business.
          </p>
        </div>
      </section>

      <section id="join" className="px-8 py-24 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-black mb-8 text-center">
            Join Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border-2 border-cyan-400/50 rounded-lg p-8 hover:border-cyan-400 transition">
              <h3 className="text-2xl font-bold mb-4">For Ambitious Mothers</h3>
              <p className="text-gray-400 mb-6">
                You're running it all. You've lost yourself. You're ready to come back—and raise kids who never lose themselves.
              </p>
              <p className="text-sm text-cyan-400 font-semibold">Launching Q1 2025</p>
            </div>

            <div className="border-2 border-purple-400/50 rounded-lg p-8 hover:border-purple-400 transition">
              <h3 className="text-2xl font-bold mb-4">For Strategic Partners</h3>
              <p className="text-gray-400 mb-6">
                You see founders thinking big. You see platforms that scale. You see generational impact. Let's talk about building this together.
              </p>
              <p className="text-sm text-purple-400 font-semibold">Available now</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
              required
            />
            
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition"
              required
            >
              <option value="">I am a...</option>
              <option value="mother">Ambitious mother ready to reclaim myself</option>
              <option value="investor">Strategic partner / advisor</option>
              <option value="rian">Rian Doris (👋 hi\!)</option>
              <option value="other">Other</option>
            </select>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
            >
              {submitted ? 'Message sent\! ✓' : 'Get early access'}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            No spam. Just real updates on the platform launch.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-800 px-8 py-8 text-center text-gray-500 text-sm">
        <p>Building the platform that proves: when mothers reclaim themselves, their children develop differently.</p>
      </footer>
    </div>
  );
}
