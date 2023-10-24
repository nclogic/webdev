function showTooltip(element, tooltipId) {
  // Fetch content from an external JSON file
  fetch('tooltips.json')
    .then((response) => response.json())
    .then((data) => {
      const content = data[tooltipId];
      const tooltipContainer = document.getElementById('tooltip-container');
      tooltipContainer.innerHTML = content;

      // Get the position of the triggering element
      const elementRect = element.getBoundingClientRect();

      // Calculate the tooltip position relative to the viewport
      const tooltipX = elementRect.left + window.scrollX;
      const tooltipY = elementRect.bottom + window.scrollY;



      // Set the tooltip position
      tooltipContainer.style.left = tooltipX + 'px';
      tooltipContainer.style.top = tooltipY + 'px';

      tooltipContainer.style.display = 'block';
    });
}


function hideTooltip() {
  const tooltipContainer = document.getElementById('tooltip-container');
  tooltipContainer.style.display = 'none';
}
