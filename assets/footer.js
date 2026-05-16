const footerHTML = `
<footer class="ur-footer">
  <p class="ur-footer-copy">&copy; ${new Date().getFullYear()} URBARA. All rights reserved.</p>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
