function showAlert(message, type = 'info') {
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type}`;
    
    alertContainer.innerHTML = `
      ${message}
      <button onclick="this.parentElement.remove()">×</button>
    `;
  
    document.body.appendChild(alertContainer);
  
    // Position the alert at the top center of the viewport
    alertContainer.style.position = 'fixed';
    alertContainer.style.top = '20px';
    alertContainer.style.left = '50%';
    alertContainer.style.transform = 'translateX(-50%)';
    alertContainer.style.zIndex = '9999';
  
    // Animate removal after a delay
    setTimeout(() => {
      alertContainer.style.transform = 'translate(-50%, -20px)';
      alertContainer.style.opacity = '0';
      setTimeout(() => alertContainer.remove(), 300);
    }, 3000);
  }
  
  export default showAlert;
  