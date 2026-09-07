document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  // Colores configurables
  if (business.colors) {
    root.style.setProperty("--primary", business.colors.primary);
    root.style.setProperty("--primary-dark", business.colors.primaryDark);
    root.style.setProperty("--accent", business.colors.accent);
    root.style.setProperty("--surface", business.colors.surface);
  }

  // Datos básicos
  document.querySelectorAll('[data-business="name"]').forEach(el => el.textContent = business.name);
  document.querySelectorAll('[data-business="headline"]').forEach(el => el.textContent = business.headline);
  document.querySelectorAll('[data-business="description"]').forEach(el => el.textContent = business.description);
  document.querySelectorAll('[data-business="phoneDisplay"]').forEach(el => el.textContent = business.phoneDisplay);
  document.querySelectorAll('[data-business="phoneSecondaryDisplay"]').forEach(el => el.textContent = business.phoneSecondaryDisplay);
  document.querySelectorAll('[data-business="address"]').forEach(el => el.textContent = business.address);
  document.querySelectorAll('[data-business="hours"]').forEach(el => el.textContent = business.hours);

  document.title = `${business.name} | ${business.headline}`;

  // WhatsApp
  const whatsappUrl = `https://wa.me/${business.phone}?text=${encodeURIComponent(business.whatsappMessage)}`;
  document.querySelectorAll("[data-whatsapp-link]").forEach(link => link.href = whatsappUrl);

  // Teléfono principal
  const phoneUrl = `tel:+${business.phone}`;
  document.querySelectorAll("[data-phone-link]").forEach(link => link.href = phoneUrl);

  // Teléfono secundario
  if (business.phoneSecondary) {
    const phoneSecUrl = `tel:+${business.phoneSecondary}`;
    document.querySelectorAll("[data-phone-secondary-link]").forEach(link => link.href = phoneSecUrl);
  }

  // Google Maps enlace directo
  if (business.mapsUrl) {
    document.querySelectorAll("[data-maps-link]").forEach(link => link.href = business.mapsUrl);
  }

  // Google Maps iframe embed
  const mapIframe = document.querySelector("#google-map-frame");
  if (mapIframe && business.mapsEmbed) {
    mapIframe.src = business.mapsEmbed;
  }

  // Servicios
  const servicesGrid = document.querySelector("#services-grid");
  if (servicesGrid && business.services) {
    servicesGrid.innerHTML = "";
    business.services.forEach((service, index) => {
      const card = document.createElement("article");
      card.className = "service-card reveal";
      const number = (index + 1).toString().padStart(2, "0");
      const serviceWhatsAppUrl = `https://wa.me/${business.phone}?text=${encodeURIComponent(`Hola Clínica Dental Bucareli, me interesa recibir información sobre el servicio de ${service.name}.`)}`;
      card.innerHTML = `
        <div class="service-icon">${service.icon}</div>
        <span class="service-number">${number}</span>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <a href="${serviceWhatsAppUrl}" target="_blank" rel="noopener">Solicitar información →</a>
      `;
      servicesGrid.appendChild(card);
    });
  }

  // Testimonios
  const testimonialsGrid = document.querySelector("#testimonials-grid");
  if (testimonialsGrid && business.testimonials) {
    testimonialsGrid.innerHTML = "";
    business.testimonials.forEach(item => {
      const card = document.createElement("article");
      card.className = "testimonial-card reveal";
      card.innerHTML = `
        <div class="stars">★★★★★</div>
        <blockquote>“${item.quote}”</blockquote>
        <div class="author">
          <span>${item.name.charAt(0)}</span>
          <div>
            <strong>${item.name}</strong>
            <small>${item.detail}</small>
          </div>
        </div>
      `;
      testimonialsGrid.appendChild(card);
    });
  }

  // Menú móvil
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const yearEl = document.querySelector("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
