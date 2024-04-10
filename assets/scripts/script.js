document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.services__btn');
  
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          buttons.forEach(btn => btn.classList.remove('active', 'selected'));
          this.classList.add('active', 'selected');
          showDescription(this);
      });
  });
  
  const defaultSelectedButton = document.getElementById("Me");
  defaultSelectedButton.classList.add('selected');
  showDescription(defaultSelectedButton);
  
  function showDescription(button) {
      const buttonText = button.textContent.trim();
      const descriptionId = buttonText + "Description";
      const descriptions = document.querySelectorAll('.description');

      descriptions.forEach(desc => {
          desc.style.display = 'none';
      });
      
      const selectedDescription = document.getElementById(descriptionId);
      if (selectedDescription) {
          selectedDescription.style.display = 'block';
      }
  }
});
