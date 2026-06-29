'use strict';

/* ── PROJECTS DATA ── */
const PROJECTS = [
  {
    id: 'rhms',
    title: 'RHMS — Rental House Management System',
    desc: 'A full-stack rental house management platform designed for tenants to easily browse and pick houses of their choice, and for landlords to upload listings for display.',
    tags: ['React.js', 'Python', 'Full-Stack', 'Vercel'],
    liveUrl: 'https://rhms-app.vercel.app/',
    repoUrl: 'https://github.com/Arnold124286',
    screenshot: 'images/project-rhms.png',
    color: '#1A2F23',
    emoji: '🏠'
  },
  {
    id: 'brandconnect',
    title: 'Brand Connect Hub',
    desc: 'A dynamic brand discovery and connection platform that links businesses with designers, agencies, and creative professionals. Built with a modern React frontend and cloud-ready architecture.',
    tags: ['React.js', 'JavaScript', 'API Integration', 'Vercel'],
    liveUrl: 'https://brand-connect-hub-f9fm.vercel.app/',
    repoUrl: 'https://github.com/Arnold124286',
    screenshot: 'images/project-brandconnect.png',
    color: '#2C4A38',
    emoji: '🔗'
  },
  {
    id: 'plantcare',
    title: 'PlantCare AI — Plant Disease Detector',
    desc: 'An AI-powered plant disease detection system built with deep learning (CNN/Keras) and a Flutter mobile app. Users photograph crop leaves to receive instant disease diagnosis and treatment recommendations — addressing real agricultural challenges in Kenya.',
    tags: ['Python', 'TensorFlow/Keras', 'Flutter', 'Machine Learning', 'REST API'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Arnold124286',
    liveDemoNote: 'Details Available Upon Request',
    color: '#14532d',
    emoji: '🌿'
  }
];

/* ── INSIGHTS DATA ── */
const INSIGHTS = [
  {
    id: 'i1',
    topic: 'Machine Learning',
    emoji: '🤖',
    image: 'images/Artificial intelligence (AI).webp',
    title: 'Building a Plant Disease Detector with CNN in Kenya',
    desc: 'How I trained a convolutional neural network on crop leaf images to help Kenyan farmers identify diseases early and save harvests.',
    date: 'Apr 2025',
    readTime: '7 min read',
    body: `
      <h2>The Problem: Late Disease Detection Destroys Kenyan Harvests</h2>
      <p>Kenya's smallholder farmers — who produce over 75% of the country's food — lose an estimated 30–40% of their crops each season to plant diseases. The core challenge is simple: by the time a farmer can afford to consult an agronomist, the disease has already spread. I wanted to change that with a tool anyone with a smartphone could use instantly in the field.</p>

      <h2>Why a Convolutional Neural Network?</h2>
      <p>Plant disease manifests visually — discolouration, lesions, wilting patterns on leaves. CNNs are exceptionally well-suited to image classification tasks because they learn spatial hierarchies of features automatically, without hand-crafted rules. After reviewing several architectures, I settled on a fine-tuned <strong>MobileNetV2</strong> backbone — lightweight enough to run inference on a mid-range Android phone yet accurate enough for field conditions.</p>

      <blockquote>"Accuracy without accessibility is useless. I needed a model that could run offline in a rural area with no internet."</blockquote>

      <h2>Dataset: Building the Training Set</h2>
      <p>I used the <strong>PlantVillage dataset</strong> as the foundation — 54,000+ labelled leaf images across 14 crop species and 26 disease classes. I augmented the dataset heavily (rotation, horizontal flip, brightness jitter, zoom) to improve the model's robustness to real-world lighting conditions like harsh Kenyan midday sun or overcast shade.</p>
      <ul>
        <li>📸 <strong>54,306</strong> training images</li>
        <li>🌿 <strong>13 disease classes</strong> supported in v1</li>
        <li>🔄 Augmentation pipeline: RandomRotation, RandomBrightness, RandomTranslation</li>
      </ul>

      <h2>Training Pipeline</h2>
      <p>The model was trained on Google Colab Pro using TensorFlow/Keras with a custom training loop:</p>
      <ol>
        <li>Freeze the MobileNetV2 base and train the classification head for 10 epochs</li>
        <li>Unfreeze the top 20 layers and fine-tune end-to-end with a low learning rate (1e-5)</li>
        <li>Apply early stopping and model checkpointing to prevent overfitting</li>
      </ol>
      <p>Final validation accuracy reached <strong>93.2%</strong> — sufficient for a field diagnostic tool where the goal is "alert + recommend" rather than clinical certainty.</p>

      <h2>The Flutter Mobile App</h2>
      <p>The detection model was exported to <strong>TensorFlow Lite</strong> and embedded directly in a Flutter mobile app. Farmers can open the app, point their camera at a leaf, and get a disease label + recommended treatment within 2 seconds — no internet required.</p>
      <p>The backend REST API (built with Python/FastAPI) handles cloud sync, user history, and agronomist alerts for severe detections.</p>

      <h2>Lessons Learned</h2>
      <p>Building for African agricultural contexts taught me that <strong>domain constraints drive architecture decisions</strong>. Offline-first wasn't a nice-to-have; it was the non-negotiable core requirement. Model size mattered more than marginal accuracy gains. And building trust with farmers meant giving them a simple 1-tap experience, not a complex dashboard.</p>
      <p>This project is the most meaningful thing I've built — not because of the technology, but because of who it's for.</p>
    `
  },
  {
    id: 'i2',
    topic: 'Full-Stack Development',
    emoji: '🏗️',
    image: 'images/Full Stack Developer Roadmap.jpg',
    title: 'Designing a Rental Platform for African Real Estate',
    desc: 'Lessons from building RHMS — a full-stack rental management system tailored to the needs of Kenyan landlords and tenants.',
    date: 'Mar 2025',
    readTime: '5 min read',
    body: `
      <h2>Why Kenya Needs a Better Rental Platform</h2>
      <p>Finding rental housing in Nairobi is a painful, opaque process. Listings live in WhatsApp groups, on hand-written notices at gate entrances, or through brokers who charge a month's rent as commission. Landlords, meanwhile, manage payments and complaints over the phone with no paper trail. RHMS was my answer to both sides of this broken market.</p>

      <h2>Architecture Overview</h2>
      <p>RHMS is a full-stack web application built with a <strong>React.js</strong> frontend deployed on Vercel and a <strong>Python (FastAPI)</strong> backend hosted on Render. The data layer uses <strong>PostgreSQL</strong> via Supabase, giving me a managed, scalable database with built-in auth.</p>
      <ul>
        <li>🖥️ <strong>Frontend:</strong> React.js, React Router, TailwindCSS</li>
        <li>⚙️ <strong>Backend:</strong> Python, FastAPI, SQLAlchemy ORM</li>
        <li>🗄️ <strong>Database:</strong> PostgreSQL (Supabase)</li>
        <li>☁️ <strong>Deployment:</strong> Vercel (frontend) + Render (backend)</li>
      </ul>

      <h2>Two Portals, One Platform</h2>
      <p>The system has two distinct user roles, each with a tailored experience:</p>
      <p><strong>Tenants</strong> can browse property listings with photo galleries, filter by location, price, and bedroom count, and submit an inquiry directly to the landlord — all without a broker in the middle.</p>
      <p><strong>Landlords</strong> get a dashboard to upload listings, manage tenants, track payment status, and send maintenance notifications. Every interaction is logged, giving both parties a clear record.</p>

      <blockquote>"The most important design decision was making the listing upload flow work on a 3G connection with a low-end Android browser."</blockquote>

      <h2>Key Technical Challenges</h2>
      <p><strong>Image uploads:</strong> I used Supabase Storage with signed URLs, compressing images client-side with <code>browser-image-compression</code> before upload to keep storage costs low and load times fast on mobile data.</p>
      <p><strong>Auth:</strong> JWT-based authentication with refresh tokens. The tenant and landlord roles are enforced at both the React Router level (protected routes) and the FastAPI level (dependency injection guards).</p>

      <h2>What I'd Do Differently</h2>
      <p>If I were starting over, I'd invest earlier in a proper design system instead of styling ad-hoc. I'd also add an <strong>M-Pesa payment integration</strong> from day one — it's the single most requested feature from Kenyan users who want automated rent collection.</p>
    `
  },
  {
    id: 'i3',
    topic: 'Design Systems',
    emoji: '🎨',
    image: 'images/Sitios relacionados con herramientas digitales.jpg',
    title: 'Why African Brands Need Custom Visual Identities',
    desc: 'Generic templates hurt brand recognition. A deep dive into crafting authentic visual identities for political campaigns, events, and businesses in Kenya.',
    date: 'Feb 2025',
    readTime: '4 min read',
    body: `
      <h2>The Template Trap</h2>
      <p>Walk through any Kenyan town and look at the printed posters — funeral announcements, political rallies, church concerts — and you'll notice something: they all look the same. Stock fonts, the same Canva templates, the same colour gradients recycled endlessly. This visual sameness is a missed opportunity. Brand identity is competitive advantage, and African organisations are leaving it on the table.</p>

      <h2>What Makes a Visual Identity "African"?</h2>
      <p>I want to be careful here — "African design" isn't a monolith. What I mean is design that is <em>contextually authentic</em>: rooted in the cultural references, colour associations, and typographic traditions that resonate with a specific community.</p>
      <p>For the <strong>Bruno Otieno Cup</strong> campaign in Suna East, the client needed a poster that would read as serious and powerful from 5 metres away on a matatu stage. That meant high-contrast colours, bold Serif display type, and clear hierarchy — not a pastel Canva gradient with a cursive font.</p>

      <blockquote>"Great design for Kenyan audiences is bold, legible at distance, emotionally direct, and culturally legible — not aesthetically 'minimal'."</blockquote>

      <h2>My Design Process for Campaign Work</h2>
      <ol>
        <li><strong>Brief & Context:</strong> Who is the audience? Where will this be seen — printed large, shared on WhatsApp, or displayed on a screen?</li>
        <li><strong>Moodboard:</strong> I pull references from African design archives, newspaper layouts, traditional textile patterns, and international political design.</li>
        <li><strong>Typography first:</strong> The typeface is the personality. I choose before I touch colour.</li>
        <li><strong>Colour story:</strong> Colours carry cultural weight — green = growth/Islam, red = urgency/blood, white = peace. These aren't Western associations; they're local ones.</li>
        <li><strong>Production:</strong> Every file is delivered print-ready (300 DPI, CMYK) and as a digital version (RGB, compressed for WhatsApp sharing).</li>
      </ol>

      <h2>The Business Case for Good Design</h2>
      <p>A well-designed poster for a political candidate doesn't just look good — it signals competence. A cohesive brand identity for a small business communicates that you are serious, reliable, and worth paying more for. In markets where trust is hard-won, visual consistency is a credibility signal that pays dividends far beyond the design fee.</p>
    `
  },
  {
    id: 'i4',
    topic: 'React.js',
    emoji: '⚛️',
    title: 'Component Architecture Patterns for Scalable React Apps',
    desc: 'Practical patterns I use when building production React applications — from folder structure to state management and reusable components.',
    date: 'Jan 2025',
    readTime: '6 min read',
    body: `
      <h2>The Problem with "Just Start Coding"</h2>
      <p>Every React project I've seen go wrong started the same way: components grew without discipline, state lived in the wrong place, and by the time the app had 20 screens, adding a new feature meant touching 10 files and praying nothing broke. Good architecture isn't about following rules for their own sake — it's about making future you (and future teammates) faster.</p>

      <h2>Folder Structure: Feature-First, Not Type-First</h2>
      <p>I abandoned type-based structure (<code>components/</code>, <code>hooks/</code>, <code>utils/</code> at the root) in favour of <strong>feature-based colocation</strong>. Each feature folder owns its components, hooks, and local state:</p>
      <ul>
        <li><code>src/features/listings/</code> — ListingsPage, ListingCard, useListings, listingsSlice</li>
        <li><code>src/features/auth/</code> — LoginPage, AuthGuard, useAuth, authSlice</li>
        <li><code>src/shared/</code> — Button, Modal, Input (truly reusable atoms)</li>
      </ul>
      <p>This means when a feature changes, all its related files are in one place. Deleting a feature is a single folder delete.</p>

      <h2>The Three Layers of State</h2>
      <p>I think about state in three distinct layers, and each lives in a different place:</p>
      <ol>
        <li><strong>Server state</strong> — data fetched from an API. Managed with <strong>React Query</strong> (caching, background refetch, loading/error states handled automatically).</li>
        <li><strong>Global UI state</strong> — modal open/close, auth user, theme. Managed with <strong>Zustand</strong> (simpler than Redux for most apps).</li>
        <li><strong>Local component state</strong> — form inputs, hover states, toggles. <code>useState</code> / <code>useReducer</code> locally. Keep it close to where it's used.</li>
      </ol>

      <blockquote>"Lift state only as high as it needs to go. Most state doesn't need to be global — it just ends up there because nobody made a decision."</blockquote>

      <h2>Component Design Rules I Follow</h2>
      <p><strong>Single responsibility:</strong> A component does one thing. If I'm writing "and" in the component description, it should be two components.</p>
      <p><strong>Composition over configuration:</strong> Instead of a mega-component with 15 props, I use children and compound components to let the parent control structure.</p>
      <p><strong>Custom hooks for logic:</strong> Any <code>useEffect</code> or complex logic that isn't directly rendering JSX lives in a custom hook. Components stay thin and readable.</p>

      <h2>Performance: Don't Optimise Early</h2>
      <p>I use <code>React.memo</code>, <code>useMemo</code>, and <code>useCallback</code> only after profiling shows an actual bottleneck. Premature optimisation adds cognitive overhead without measurable benefit. Ship readable code first; optimise when users complain about sluggishness.</p>
    `
  },
  {
    id: 'i5',
    topic: 'AI in Africa',
    emoji: '🌍',
    image: 'images/🌍 The Future of Work in Africa 🌾.jpg',
    title: 'The Case for AI-Powered Agriculture in Sub-Saharan Africa',
    desc: 'Exploring how machine learning solutions can transform smallholder farming across Africa, from disease detection to yield prediction.',
    date: 'Dec 2024',
    readTime: '8 min read',
    body: `
      <h2>The Scale of the Opportunity</h2>
      <p>Sub-Saharan Africa is home to <strong>33 million smallholder farms</strong> that collectively feed over a billion people. Yet these farmers operate with the least access to information, credit, and agronomic expertise of any food producers on earth. AI won't fix every structural problem — land rights, climate, market access — but it can deliver a class of capabilities that were previously available only to industrial agribusinesses.</p>

      <h2>Where AI Adds Immediate Value</h2>
      <p>The applications with the clearest near-term impact are those that replace expensive human expertise with accessible, instant, mobile-first tools:</p>
      <ul>
        <li>🌱 <strong>Disease detection:</strong> CNN models that diagnose crop disease from a smartphone photo — cutting diagnosis time from weeks to seconds.</li>
        <li>🌦️ <strong>Micro-climate prediction:</strong> Hyperlocal weather models trained on satellite data to give village-level 7-day forecasts, improving planting decisions.</li>
        <li>💧 <strong>Soil health monitoring:</strong> Spectroscopy + ML to estimate soil NPK levels from sensor data, recommending fertiliser doses that cut input costs.</li>
        <li>📊 <strong>Yield prediction:</strong> Time-series models on historical yield + weather data to help farmers and credit providers forecast output and manage risk.</li>
      </ul>

      <h2>The Infrastructure Constraint</h2>
      <p>Any AI system for African smallholders must confront two hard constraints: <strong>intermittent connectivity</strong> and <strong>low-end devices</strong>. This isn't a technical footnote — it's the central design requirement. Models must run on-device via TensorFlow Lite or ONNX. Apps must work offline. Sync must be opportunistic, not required.</p>

      <blockquote>"The farmer with 2 acres in Migori County doesn't have 4G and doesn't need your SaaS dashboard. She needs an app that works when she's standing in the field with one bar of signal."</blockquote>

      <h2>Data: The Hardest Problem</h2>
      <p>Every AI system is only as good as its training data. African agricultural data is scarce, inconsistently labelled, and often collected in conditions very different from the deployment environment. The PlantVillage dataset, for example, uses controlled lab photography — very different from a dusty, sun-drenched field photo taken on a budget smartphone.</p>
      <p>The path forward requires <strong>community data collection programs</strong> — partnering with extension workers and NGOs to gather labelled field-condition data at scale. This is as much a logistics and trust-building challenge as a technical one.</p>

      <h2>My Commitment</h2>
      <p>PlantCare AI is my first serious contribution to this space — but it won't be the last. I'm actively exploring partnerships with agricultural NGOs in Kenya to expand the disease class library and run field validation studies. If you work in this space, I'd love to connect.</p>
    `
  },
  {
    id: 'i6',
    topic: 'Career & Growth',
    emoji: '🚀',
    image: 'images/career and growth.jpg.jpg',
    title: 'From Graphic Designer to Full-Stack Developer',
    desc: 'My journey learning to code while keeping creative design at the core — and why the two disciplines make you a stronger engineer.',
    date: 'Nov 2024',
    readTime: '5 min read',
    body: `
      <h2>Where It Started: Adobe Suite and Print Shops</h2>
      <p>My first professional tool wasn't a code editor — it was Adobe Photoshop. I spent hundreds of hours designing event posters, political flyers, CD albums, and wedding invitations for clients around Nairobi and Suna East. I loved the craft of visual communication: how a typeface choice, a colour, and a composition could make someone feel something before they read a single word.</p>
      <p>But I kept running into a ceiling. Clients wanted websites. They wanted apps. They wanted their brand to live online, not just on paper. And I had no idea how to build those things.</p>

      <h2>The Decision to Learn to Code</h2>
      <p>I didn't take a bootcamp or enrol in a traditional CS degree. I started with free resources — <strong>The Odin Project</strong>, <strong>freeCodeCamp</strong>, MDN docs, and an enormous amount of YouTube. The first six months were humbling. I wrote terrible JavaScript. My HTML was a mess of divs. But I kept going because I could already see how design thinking was giving me an advantage.</p>

      <blockquote>"Designers who code don't just build what was specified — they build what makes sense. They catch UX problems in code review that pure engineers miss because they've never thought about the user's eye path."</blockquote>

      <h2>How Design Thinking Shapes My Engineering</h2>
      <p><strong>Hierarchy and readability:</strong> I care about typography, spacing, and visual weight in my code's output the way most developers don't. A component library I build has consistent spacing tokens because I know what inconsistent rhythm does to a user's eye.</p>
      <p><strong>Prototype before you build:</strong> I sketch interfaces before writing a single line of code. This saves hours of refactoring because the structure is right before it's implemented.</p>
      <p><strong>Communication:</strong> Working with clients taught me to listen for what they mean, not just what they say. "Make it pop" means increase contrast and reduce visual noise — not add a drop shadow.</p>

      <h2>The Discipline Combination as a Career Advantage</h2>
      <p>In Kenya's tech market, developers who can design and designers who can develop are genuinely rare. I can take a client from brand identity brief → wireframe → production React app → deployed product without a handoff. That end-to-end capability commands a premium, shortens project timelines, and eliminates the translation errors that occur when design and engineering are separate teams.</p>
      <p>If you're a designer hesitating to learn to code — start today. The learning curve is real but the compound return on your existing skills is enormous.</p>
    `
  }
];


/* ── DESIGN WORK DATA ── */
const DESIGNS = [
  /* ── BRAND IDENTITY & LOGO ── */
  {
    id: 'd-logo1',
    file: 'images/photo_2026-06-29_17-09-17.jpg',
    name: 'Luxbrands Creatives — Primary Logo',
    cat: 'Brand Identity · Logo Design',
    filter: 'identity',
    desc: 'Official primary logo mark for Luxbrands Creatives — bold, timeless, minimal.'
  },
  {
    id: 'd-logo2',
    file: 'images/photo_2026-06-29_17-09-17 copy.jpg',
    name: 'Luxbrands Creatives — Logo Variant',
    cat: 'Brand Identity · Logo Design',
    filter: 'identity',
    desc: 'Secondary logo variant for digital and print applications.'
  },
  {
    id: 'd-logo3',
    file: 'images/photo_2026-06-29_17-09-13.jpg',
    name: 'Luxbrands Creatives — Identity System',
    cat: 'Brand Identity · Logo Design',
    filter: 'identity',
    desc: 'Full brand identity system — typography, colour palette and mark.'
  },

  /* ── MERCHANDISE MOCKUPS ── */
  {
    id: 'd-merch1',
    file: 'images/01 Free PSD Hoodie Mockup copy.jpg',
    name: 'Premium Hoodie Mockup — Dark Edition',
    cat: 'Merchandise · Brand Mockup',
    filter: 'mockup',
    desc: 'Photo-realistic hoodie mockup showcasing custom brand embroidery.'
  },
  {
    id: 'd-merch2',
    file: 'images/01 Free PSD Hoodie Mockup copycfcv.jpg',
    name: 'Premium Hoodie Mockup — Colour Way 2',
    cat: 'Merchandise · Brand Mockup',
    filter: 'mockup',
    desc: 'Alternative colourway hoodie presentation for client merchandise line.'
  },
  {
    id: 'd-merch3',
    file: 'images/01 Free PSD Hoodie Mockup copynj.jpg',
    name: 'Premium Hoodie Mockup — Clean Cut',
    cat: 'Merchandise · Brand Mockup',
    filter: 'mockup',
    desc: 'Clean, studio-style hoodie mockup for e-commerce and brand presentation.'
  },
  {
    id: 'd-merch4',
    file: 'images/01 Free PSD Hoodie Mockup copynj (2).jpg',
    name: 'Premium Hoodie Mockup — Lifestyle',
    cat: 'Merchandise · Brand Mockup',
    filter: 'mockup',
    desc: 'Lifestyle-oriented hoodie mockup designed for social media campaigns.'
  },

  /* ── BROCHURE & PRINT DESIGN ── */
  {
    id: 'd-broch1',
    file: 'images/A4_Brochure_Mockup_1 copy1.jpg',
    name: 'Corporate Brochure — Tri-Fold Vol.1',
    cat: 'Print Design · Brochure',
    filter: 'print',
    desc: 'Tri-fold A4 corporate brochure with structured layout and brand colours.'
  },
  {
    id: 'd-broch2',
    file: 'images/A4_Brochure_Mockup_2 copy.jpg',
    name: 'Corporate Brochure — Bi-Fold',
    cat: 'Print Design · Brochure',
    filter: 'print',
    desc: 'Elegant bi-fold brochure layout designed for professional service firms.'
  },
  {
    id: 'd-broch3',
    file: 'images/A4_Brochure_Mockup_2 copy1.jpg',
    name: 'Corporate Brochure — Bi-Fold Vol.2',
    cat: 'Print Design · Brochure',
    filter: 'print',
    desc: 'Second bi-fold variant featuring a bold imagery-driven cover layout.'
  },
  {
    id: 'd-broch4',
    file: 'images/A4_Brochure_Mockup_5 copy1.jpg',
    name: 'Company Profile — Multi-Page',
    cat: 'Print Design · Brochure',
    filter: 'print',
    desc: 'Multi-page company profile mockup — ideal for corporate presentations.'
  },
  {
    id: 'd-broch5',
    file: 'images/A4_Brochure_Mockup_7 copy.jpg',
    name: 'Services Brochure — Spread Layout',
    cat: 'Print Design · Brochure',
    filter: 'print',
    desc: 'Double-spread services brochure with clean grid and editorial feel.'
  },
  {
    id: 'd-broch6',
    file: 'images/A4_Brochure_Mockup_7 copy1.jpg',
    name: 'Services Brochure — Cover Focus',
    cat: 'Print Design · Brochure',
    filter: 'print',
    desc: 'Cover-focused brochure layout emphasising brand personality and tone.'
  },
  {
    id: 'd-broch7',
    file: 'images/A4_Brochure_Mockup_8 copy1.jpg',
    name: 'Portfolio / Lookbook — Print',
    cat: 'Print Design · Brochure',
    filter: 'print',
    desc: 'Lookbook-style print mockup for product catalogues and brand portfolios.'
  }
];

const FILTERS = [
  { id: 'all',      label: 'All Work' },
  { id: 'identity', label: 'Brand Identity' },
  { id: 'mockup',   label: 'Merchandise' },
  { id: 'print',    label: 'Print & Brochures' }
];


/* ── RENDER PROJECTS ── */
function renderProjects() {
  const el = document.getElementById('projects-grid');
  if (!el) return;
  el.innerHTML = PROJECTS.map(p => {
    const liveLink = p.liveDemoNote
      ? `<span class="project-link live" style="cursor:default;opacity:0.7" title="${p.liveDemoNote}">🔒 ${p.liveDemoNote}</span>`
      : `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="project-link live" id="btn-live-${p.id}">↗ Live Demo</a>`;

    const imgSection = p.screenshot
      ? `<img src="${p.screenshot}" alt="${p.title}" class="project-thumb"
           onerror="this.style.display='none'" />`
      : '';

    return `
    <div class="project-card reveal" id="project-${p.id}">
      <div class="project-preview" style="background:linear-gradient(135deg,${p.color},#1e4a30)">
        ${imgSection}
        <div class="project-badge">● Live</div>
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
        <div class="project-links">
          ${liveLink}
          <a href="${p.repoUrl}" target="_blank" rel="noopener" class="project-link repo" id="btn-repo-${p.id}">⌥ GitHub</a>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ── RENDER INSIGHTS ── */
function renderInsights() {
  const el = document.getElementById('insights-grid');
  if (!el) return;
  el.innerHTML = INSIGHTS.map(a => `
    <div class="insight-card reveal" id="insight-${a.id}" data-article-id="${a.id}">
      <div class="insight-card-img" style="${a.image ? 'padding:0;' : ''}">
        ${a.image
      ? `<img src="${a.image}" alt="${a.title}" style="width:100%;height:100%;object-fit:cover;">`
      : a.emoji}
      </div>
      <div class="insight-card-body">
        <div class="insight-topic">${a.topic}</div>
        <div class="insight-card-title">${a.title}</div>
        <p class="insight-card-desc">${a.desc}</p>
        <div class="insight-meta">
          <span>${a.date} · ${a.readTime}</span>
          <button class="insight-read-more" data-article-id="${a.id}">Read More →</button>
        </div>
      </div>
    </div>`).join('');

  // Attach Read More click handlers
  el.querySelectorAll('.insight-read-more').forEach(btn => {
    btn.addEventListener('click', () => openArticle(btn.dataset.articleId));
  });
}

/* ── RENDER DESIGN FILTERS ── */
function renderFilters() {
  const el = document.getElementById('design-filter');
  if (!el) return;
  el.innerHTML = FILTERS.map(f =>
    `<button class="filter-btn${f.id === 'all' ? ' active' : ''}" data-filter="${f.id}" id="filter-${f.id}">${f.label}</button>`
  ).join('');

  el.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      el.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.design-item').forEach(item => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.filter !== filter);
      });
    });
  });
}

/* ── RENDER DESIGN GRID ── */
function renderDesigns() {
  const el = document.getElementById('design-grid');
  if (!el) return;
  el.innerHTML = DESIGNS.map(d => `
    <div class="design-item reveal" data-filter="${d.filter}" data-src="${d.file}" data-caption="${d.cat} · ${d.desc}" id="design-${d.id}">
      <img src="${d.file}" alt="${d.name}" class="design-thumb"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
      <div class="design-placeholder" style="display:none">${d.name}</div>
      <div class="design-overlay">
        <div class="design-meta">
          <div class="design-cat">${d.cat}</div>
          <div class="design-name">${d.name}</div>
        </div>
      </div>
    </div>`).join('');

  el.querySelectorAll('.design-item').forEach(item => {
    item.addEventListener('click', () => {
      const lb = document.getElementById('lightbox');
      const lbImg = document.getElementById('lb-img');
      const lbCap = document.getElementById('lb-caption');
      if (lb && lbImg) {
        lbImg.src = item.dataset.src;
        lbImg.alt = item.dataset.caption;
        lbCap.textContent = item.dataset.caption;
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });
}

/* ── LIGHTBOX ── */
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const close = document.getElementById('lb-close');
  if (!lb || !close) return;
  const closeLb = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };
  close.addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeLb(); closeArticleModal(); } });
}

/* ── ARTICLE MODAL ── */
function openArticle(id) {
  const article = INSIGHTS.find(a => a.id === id);
  if (!article) return;
  const modal = document.getElementById('article-modal');
  const content = document.getElementById('article-content');
  if (!modal || !content) return;

  const heroContent = article.image
    ? `<img src="${article.image}" alt="${article.title}" style="width:100%;height:100%;object-fit:cover;">`
    : `<span class="article-hero-emoji">${article.emoji}</span>`;

  content.innerHTML = `
    <div class="article-hero" style="${article.image ? 'padding:0;background:transparent;' : 'background:linear-gradient(135deg,var(--brand-green),#2a6040)'}">
      ${heroContent}
    </div>
    <div class="article-body">
      <div class="article-meta-top">
        <span class="article-topic-tag">${article.topic}</span>
        <span class="article-date-tag">${article.date} · ${article.readTime}</span>
      </div>
      <h1 class="article-main-title" id="article-modal-title">${article.title}</h1>
      <p class="article-lead">${article.desc}</p>
      <div class="article-divider"></div>
      <div class="article-prose">${article.body}</div>
      <div class="article-footer">
        <span>Written by <strong>Haron Baraza</strong></span>
        <a href="#contact" class="btn-primary article-cta" onclick="closeArticleModal()">Work With Me →</a>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Scroll panel back to top each open
  const panel = document.getElementById('article-modal-panel');
  if (panel) panel.scrollTop = 0;
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function initArticleModal() {
  const closeBtn = document.getElementById('article-modal-close');
  const backdrop = document.getElementById('article-modal-backdrop');
  if (closeBtn) closeBtn.addEventListener('click', closeArticleModal);
  if (backdrop) backdrop.addEventListener('click', closeArticleModal);
}

/* ── NAVIGATION ── */
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('.mobile-nav-item').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  // Dropdown toggle
  const dropdown = document.getElementById('nav-dropdown');
  const dropToggle = document.getElementById('dropdown-toggle');
  if (dropdown && dropToggle) {
    dropToggle.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => dropdown.classList.remove('open'));
  }

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });
  sections.forEach(s => obs.observe(s));
}

/* ── SCROLL REVEAL ── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── CONTACT FORM ── */
async function handleFormSubmit(e) {
  e.preventDefault();
  const form   = e.target;
  const btn    = document.getElementById('btn-submit');
  const success = document.getElementById('form-success');

  btn.textContent = 'Sending…';
  btn.disabled    = true;

  try {
    const data = new FormData(form);
    // FormSubmit needs Accept: application/json to return JSON instead of redirecting
    const res = await fetch('https://formsubmit.co/ajax/luxbrandscreatives@gmail.com', {
      method:  'POST',
      headers: { 'Accept': 'application/json' },
      body:    data
    });

    const json = await res.json();

    if (json.success === 'true' || json.success === true) {
      if (success) {
        success.textContent = '✅ Message sent! We\'ll get back to you within 24 hours.';
        success.style.display = 'block';
      }
      form.reset();
      setTimeout(() => { if (success) success.style.display = 'none'; }, 6000);
    } else {
      throw new Error('FormSubmit returned failure');
    }
  } catch (err) {
    if (success) {
      success.textContent = '⚠️ Oops — something went wrong. Please email us directly at luxbrandscreatives@gmail.com';
      success.style.color  = '#c0392b';
      success.style.display = 'block';
    }
  } finally {
    btn.textContent = 'Send Message →';
    btn.disabled    = false;
  }
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderInsights();
  renderFilters();
  renderDesigns();
  initLightbox();
  initArticleModal();
  initNav();
  setTimeout(initScrollReveal, 100);
});
