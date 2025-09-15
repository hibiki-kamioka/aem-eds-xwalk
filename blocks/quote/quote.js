export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  // Get the classes value from the block's data attributes or metadata
  const classes = block.dataset.classes || block.getAttribute('data-classes');

  if (classes) {
    // Add the class to the block for CSS styling
    block.classList.add(classes);
  }
}
