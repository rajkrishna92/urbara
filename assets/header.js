const headerHTML = `
  <header class="ur-hdr-main">
    <nav class="ur-hdr-nav">
      <a href="index.html" class="ur-hdr-brand">
        <img src="assets/logo_transparent.png" alt="URBARA Logo" class="ur-hdr-icon">
        <div class="ur-hdr-text">
          <div class="ur-hdr-title">URBARA <span class="sep">|</span> <span class="lang">उर्वरा</span> <span class="sep">|</span> <span class="lang">উর্বরা</span></div>
          <div class="ur-hdr-tag">Rooted in Science · Backed by AI</div>
        </div>
      </a>
      <div class="ur-hdr-menu">
        <a href="index.html" class="ur-hdr-link" data-nav="home">Home</a>
        
        <div class="ur-hdr-dropdown">
          <a href="urbara_business_model.html" class="ur-hdr-link" data-nav="business">Business Model <span class="caret">▼</span></a>
          <div class="ur-hdr-submenu">
            <a href="urbara_value_propositions.html">Value Propositions</a>
            <a href="urbara_customer_segments.html">Customer Segments</a>
            <a href="urbara_key_resources.html">Key Resources</a>
            <a href="urbara_key_activities.html">Key Activities</a>
            <a href="urbara_key_partnerships.html">Key Partnerships</a>
            <a href="urbara_cost_structure.html">Cost Structure</a>
            <a href="urbara_revenue_streams.html">Revenue Streams</a>
            <a href="urbara_customer_relationships.html">Customer Relationships</a>
            <a href="urbara_channels.html">Channels</a>
          </div>
        </div>

        <a href="urbara_process_flow.html" class="ur-hdr-link" data-nav="process">Process Flow</a>
        <a href="urbara_team.html" class="ur-hdr-link" data-nav="team">Team</a>
        <a href="urbara_contact.html" class="ur-hdr-link" data-nav="contact">Contact</a>
      </div>
    </nav>
    <div class="ur-hdr-ticker">
      <div class="ur-hdr-ticker-scroll">
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Tackling 40% yield loss via AI-powered precision agronomy</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Solving manual labour shortage with robotic paddy transplantation</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Reducing chemical overuse & input costs via drone-based precision spraying</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Eliminating middlemen exploitation by bridging Farm-to-Mandi via e-NAM APIs</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Curing blind soil management with bio-molecular microbiome sequencing</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Bypassing rural connectivity limits with IVR & WhatsApp-first advisory</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Eradicating arbitrary pricing through CV-based molecular quality grading</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Resolving logistics guesswork using fuzzy mathematical supply chain optimisation</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Transforming fragmented smallholder data into actionable AgriStack insights</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Securing traceable, export-ready raw material supply for FMCGs</div>
        <!-- Duplicated for seamless loop -->
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Tackling 40% yield loss via AI-powered precision agronomy</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Solving manual labour shortage with robotic paddy transplantation</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Reducing chemical overuse & input costs via drone-based precision spraying</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Eliminating middlemen exploitation by bridging Farm-to-Mandi via e-NAM APIs</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Curing blind soil management with bio-molecular microbiome sequencing</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Bypassing rural connectivity limits with IVR & WhatsApp-first advisory</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Eradicating arbitrary pricing through CV-based molecular quality grading</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Resolving logistics guesswork using fuzzy mathematical supply chain optimisation</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Transforming fragmented smallholder data into actionable AgriStack insights</div>
        <div class="ur-hdr-ticker-item"><span class="dot">◆</span>Securing traceable, export-ready raw material supply for FMCGs</div>
      </div>
    </div>
  </header>
`;

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject the header at the very top of the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // 2. Determine which page is currently active
    const currentPath = window.location.pathname;
    let pageName = currentPath.split("/").pop();
    
    // Default to index.html if no file is specified (e.g. root domain)
    if (!pageName || pageName === '') {
    }

    // Map pages to their respective active navigation tab
    const activeMap = {
        'index.html': 'home',
        'urbara_business_model.html': 'business',
        'urbara_channels.html': 'business',
        'urbara_cost_structure.html': 'business',
        'urbara_customer_relationships.html': 'business',
        'urbara_customer_segments.html': 'business',
        'urbara_key_activities.html': 'business',
        'urbara_key_partnerships.html': 'business',
        'urbara_key_resources.html': 'business',
        'urbara_revenue_streams.html': 'business',
        'urbara_value_propositions.html': 'business',
        'urbara_process_flow.html': 'process',
        'urbara_team.html': 'team',
        'urbara_contact.html': 'contact'
    };

    const activeSection = activeMap[pageName] || 'home';
    const activeLink = document.querySelector(`.ur-hdr-link[data-nav="${activeSection}"]`);
    
    if (activeLink) {
        activeLink.classList.add('active');
    }
});
