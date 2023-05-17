const readMoreBtn = document.querySelector('.read-more');
const postContent = document.querySelector('.featured-post p');

readMoreBtn.addEventListener('click', () => {
  postContent.classList.toggle('show');
});
