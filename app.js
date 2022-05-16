window.onload = async () => {
    const transition = document.querySelector(".transition");
  
    transition.classList.remove("is-active");
  
    const links = document.querySelectorAll("a.transition");
    const logo = document.querySelector(".totsuki-logo");

    await setTimeout(() => {
      logo.classList.add("scale");
    }, 1000);

    await setTimeout(() => {
      window.location.href = "totsuki.html";
    }, 2500);
    /**for (let i = 0; i < links.length; i++) {
      const link = links[i];
  
      console.log(link);
  
      let target = e.target.href;
        console.log(target);
  
        transition.classList.add("is-active");
  
        setTimeout(() => {
          window.location.href = target;
        }, 500);

      link.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target.href;
        console.log(target);
  
        transition.classList.add("is-active");
  
        setTimeout(() => {
          window.location.href = target;
        }, 500);
      });
    } */
  };