const headerHTML = `
  <header class="ur-hdr-main">
    <nav class="ur-hdr-nav">
      <a href="index.html" class="ur-hdr-brand">
        <img src="assets/logo_transparant.png" alt="URBARA Logo" class="ur-hdr-icon">
        <div class="ur-hdr-text">
          <div class="ur-hdr-title">URBARA <span class="sep">|</span> <span class="lang">उर्वरा</span> <span class="sep">|</span> <span class="lang">উর্বরা</span></div>
          <div class="ur-hdr-tag">Rooted in Science · Backed by AI</div>
        </div>
      </a>
      <button class="ur-hdr-toggle" type="button" aria-label="Open menu">☰</button>
      <div class="ur-hdr-menu">
        <a href="index.html" class="ur-hdr-link" data-nav="home">Home</a>
        <a href="urbara_pitchdeck.html" class="ur-hdr-link" data-nav="pitchdeck">Pitch Deck</a>
        <div class="ur-hdr-dropdown">
          <a href="urbara_business_model.html" class="ur-hdr-link" data-nav="business">Business Model</a> 
           <button type="button" class="ur-hdr-submenu-toggle" aria-expanded="false" aria-label="Toggle Business Model submenu">▾</button> 
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

    // 2. Determine which page is currently active (supporting both .html and pretty URLs)
    const currentPath = window.location.pathname;
    let pageName = currentPath.split("/").pop();
    
    // Normalize pageName by removing the .html extension if present
    if (pageName && pageName.endsWith('.html')) {
        pageName = pageName.slice(0, -5);
    }
    
    // Default to index if no file is specified (e.g. root domain or index)
    if (!pageName || pageName === '' || pageName === 'index') {
        pageName = 'index';
    }

    // Map pages to their respective active navigation tab (without extensions)
    const activeMap = {
        'index': 'home',
        'urbara_pitchdeck': 'pitchdeck',
        'urbara_business_model': 'business',
        'urbara_channels': 'business',
        'urbara_cost_structure': 'business',
        'urbara_customer_relationships': 'business',
        'urbara_customer_segments': 'business',
        'urbara_key_activities': 'business',
        'urbara_key_partnerships': 'business',
        'urbara_key_resources': 'business',
        'urbara_revenue_streams': 'business',
        'urbara_value_propositions': 'business',
        'urbara_process_flow': 'process',
        'urbara_team': 'team',
        'urbara_contact': 'contact'
    };

    const activeSection = activeMap[pageName] || 'home';
    const activeLink = document.querySelector(`.ur-hdr-link[data-nav="${activeSection}"]`);
    
    if (activeLink) {
        activeLink.classList.add('active');
    }

    const headerToggle = document.querySelector('.ur-hdr-toggle');
    const headerMenu = document.querySelector('.ur-hdr-menu');

    const closeOpenSubmenus = () => {
        document.querySelectorAll('.ur-hdr-dropdown.open').forEach(dropdown => {
            dropdown.classList.remove('open');
            const toggleButton = dropdown.querySelector('.ur-hdr-submenu-toggle');
            if (toggleButton) {
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        });
    };

    if (headerToggle && headerMenu) {
        headerToggle.addEventListener('click', () => {
            const isOpen = headerMenu.classList.toggle('open');
            headerToggle.classList.toggle('open', isOpen);
            headerToggle.innerHTML = isOpen ? '✕' : '☰';
            if (!isOpen) {
                closeOpenSubmenus();
            }
        });

        document.addEventListener('click', (event) => {
            const target = event.target;
            if (!headerMenu.contains(target) && !headerToggle.contains(target)) {
                headerMenu.classList.remove('open');
                headerToggle.classList.remove('open');
                headerToggle.innerHTML = '☰';
                closeOpenSubmenus();
            }
        });

        document.querySelectorAll('.ur-hdr-submenu-toggle').forEach((button) => {
            const dropdown = button.closest('.ur-hdr-dropdown');
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                if (!dropdown) return;
                const isOpen = dropdown.classList.toggle('open');
                button.setAttribute('aria-expanded', String(isOpen));
            });
        });
    }
});
