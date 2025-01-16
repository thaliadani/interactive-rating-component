function submitRating() {
  const ratings = document.querySelectorAll('input[name="rating"]');
  const selectedRatingElement = Array.from(ratings).find((rating) => rating.checked);

  if (selectedRatingElement) {
    const selectedRating = selectedRatingElement.nextElementSibling?.innerText;

    if (selectedRating) {
      const containerRating = document.querySelector(".container-rating");
      const containerThankYou = document.querySelector(".container-thank-you");
      const selectedRatingDisplay = document.querySelector(".selected-rating");

      if (containerRating && containerThankYou && selectedRatingDisplay) {
        containerRating.classList.add("hidden");
        containerThankYou.classList.remove("hidden");
        selectedRatingDisplay.innerText = selectedRating;
      }
    }
  } 
}
