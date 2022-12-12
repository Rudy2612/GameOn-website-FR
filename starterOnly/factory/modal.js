export default function modalFactory() {

  const modalbg = document.querySelector(".bground");

  function launchModal() {
    modalbg.style.display = "block";
  }

  function closeModal() {
    modalbg.style.display = "none";
  }

  return { launchModal, closeModal };
}

