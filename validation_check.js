// Portfolio Validation Script
console.log('Portfolio Validation Check Started...');

// Check for missing images
const images = document.querySelectorAll('img');
let brokenImages = 0;

images.forEach((img, index) => {
  if (!img.complete || img.naturalWidth === 0) {
    console.warn(`Potential broken image found: ${img.src}`);
    brokenImages++;
  }
});

// Check for accessibility issues
const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
let accessibilityIssues = 0;

interactiveElements.forEach((element, index) => {
  if (!element.hasAttribute('aria-label') && !element.textContent.trim()) {
    console.warn(`Interactive element without accessible label:`, element);
    accessibilityIssues++;
  }
});

// Check for performance issues
const heavyAnimations = document.querySelectorAll('[class*="animate"], [data-aos]');
console.log(`Found ${heavyAnimations.length} animated elements`);

// Check for SEO issues
const metaDescription = document.querySelector('meta[name="description"]');
const title = document.querySelector('title');

if (!metaDescription || metaDescription.content.length < 50) {
  console.warn('Meta description is missing or too short');
}

if (!title || title.textContent.length < 10) {
  console.warn('Title is missing or too short');
}

// Summary
console.log('\n=== VALIDATION SUMMARY ===');
console.log(`Total images: ${images.length}`);
console.log(`Potentially broken images: ${brokenImages}`);
console.log(`Interactive elements: ${interactiveElements.length}`);
console.log(`Accessibility issues: ${accessibilityIssues}`);
console.log(`Animated elements: ${heavyAnimations.length}`);
console.log('=== END VALIDATION ===');
