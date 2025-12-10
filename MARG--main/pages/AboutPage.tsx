import React from 'react';

const FeatureHighlightCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 h-full">
        <div className="flex items-start space-x-4">
            <div className="text-2xl bg-marg-bg-light p-3 rounded-lg text-marg-accent">{icon}</div>
            <div>
                <h3 className="font-bold text-lg text-marg-primary mb-1">{title}</h3>
                <div className="text-sm text-marg-text-secondary">{children}</div>
            </div>
        </div>
    </div>
);

const TechStackPill: React.FC<{ name: string }> = ({ name }) => (
    <span className="inline-block bg-marg-bg-light text-marg-secondary text-sm font-medium mr-2 mb-2 px-3 py-1.5 rounded-full">
        {name}
    </span>
);

const ProcessStep: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-marg-primary text-white font-bold text-xl rounded-full">
            {number}
        </div>
        <div>
            <h4 className="font-bold text-lg text-marg-primary">{title}</h4>
            <p className="text-marg-text-secondary">{description}</p>
        </div>
    </div>
);


const AboutPage: React.FC = () => {
  return (
    <div className="bg-marg-bg min-h-screen">
       {/* Hero Section */}
      <div className="bg-marg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center py-16">
                <div className="relative z-10 animate-fade-in-right">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-marg-primary mb-4">MARG: Your Path to a Fulfilling Career.</h1>
                    <p className="text-lg text-marg-text-secondary">MARG (meaning "path" in Hindi) stands for <span className="font-semibold text-marg-primary">Mentorship & Academic Roadmap Guide</span>. We are a government-first AI platform ensuring trustworthy, bias-free recommendations for all Indian students.</p>
                </div>
                <div className="h-80 md:h-96 w-full animate-fade-in-left flex items-center justify-center p-8">
                    <div className="relative w-full h-full max-w-sm max-h-sm">
                        <div className="absolute inset-0 border-[3px] border-marg-secondary/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                        <div className="absolute inset-8 border-[3px] border-marg-accent/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                        <div className="absolute inset-16 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-inner">
                            <div className="text-center">
                                <div className="text-5xl font-extrabold text-marg-primary">MARG</div>
                                <div className="text-sm font-tech text-marg-secondary tracking-widest">AI GUIDE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Core Features Section */}
        <section className="opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center text-marg-primary mb-10">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureHighlightCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} title="Smart Career Guidance">
                    AI-driven quizzes analyze interests and strengths to map optimal career streams and create personalized dashboards.
                </FeatureHighlightCard>
                <FeatureHighlightCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>} title="Government College Directory">
                    Verified, real-time data from AICTE, UGC, and AISHE on colleges, admissions, and scholarships.
                </FeatureHighlightCard>
                <FeatureHighlightCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 009 9" /></svg>} title="Universal & Inclusive Access">
                    Fully responsive platform with multi-language support including Hindi, Marathi, Tamil, and more.
                </FeatureHighlightCard>
                <FeatureHighlightCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h1m6 4h.01M9 7h.01" /></svg>} title="Community Platform">
                    Connect with vetted peer mentors, get scholarship alerts, and access a curated library of resources.
                </FeatureHighlightCard>
                <FeatureHighlightCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" /></svg>} title="Parental Dashboard">
                    Provides parents with real-time visibility into their child's progress, recommendations, and mentorship activities.
                </FeatureHighlightCard>
                 <FeatureHighlightCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>} title="Trust & Transparency">
                    Built on bias-free AI, verified government data, and a transparent mentorship program to build confidence.
                </FeatureHighlightCard>
            </div>
        </section>

        {/* How MARG AI Works Section */}
        <section className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl font-bold text-center text-marg-primary mb-12">How MARG AI Works</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-10">
                <ProcessStep number="1" title="Take the AI Quiz" description="A multi-dimensional quiz captures your aptitude, interests, academic strengths, and personality." />
                <ProcessStep number="2" title="Get AI Analysis" description="Our engine clusters your responses, ranks recommended career streams, and predicts success probabilities." />
                <ProcessStep number="3" title="Receive Your Roadmap" description="Get personalized career, college, and path recommendations with mapped steps to exams and higher studies." />
            </div>
        </section>
        
        {/* Parental & Mentorship Section */}
        <section className="opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-3xl font-bold text-center text-marg-primary mb-10">Fostering a Collaborative Ecosystem</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <FeatureHighlightCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" /></svg>} title="Real-Time Parent Portal">
                    The dashboard gives parents a window into their child's quiz results, AI recommendations, and mentorship application status.
                </FeatureHighlightCard>
                <FeatureHighlightCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M12 14.75L20.5 10 12 5.25 3.5 10 12 14.75z" /></svg>} title="Vetted Peer Mentorship">
                   2nd-year+ college students undergo aptitude and interview vetting to provide high-quality, verifiable peer guidance.
                </FeatureHighlightCard>
            </div>
        </section>

        {/* Tech Stack Section */}
        <section className="opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h2 className="text-3xl font-bold text-center text-marg-primary mb-10">Our Technology</h2>
            <div className="max-w-4xl mx-auto text-center">
                 <div className="mb-4">
                    <h3 className="font-semibold text-marg-primary mb-2">Frontend</h3>
                    <TechStackPill name="React.js" />
                    <TechStackPill name="TailwindCSS" />
                    <TechStackPill name="Redux" />
                </div>
                 <div className="mb-4">
                    <h3 className="font-semibold text-marg-primary mb-2">Backend</h3>
                    <TechStackPill name="Node.js" />
                    <TechStackPill name="Express.js" />
                     <TechStackPill name="JWT" />
                </div>
                <div>
                    <h3 className="font-semibold text-marg-primary mb-2">Databases & AI</h3>
                    <TechStackPill name="MongoDB" />
                    <TechStackPill name="PostgreSQL" />
                    <TechStackPill name="Redis" />
                    <TechStackPill name="MARG AI Engine" />
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
