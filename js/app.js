
const navSlider = () =>{

	const bur = document.querySelector('.burger');
	const nav = document.querySelector('.nav_links');
      console.log(bur);
      console.log(nav);
	  bur.addEventListener('click' ,function(){

        console.log('clicked')
	  	nav.classList.toggle('nav_active');

	  });
}



	navSlider();