let btn = document.querySelector('.module-button');

function toggleModule() {
	//module scripting
	let module = document.querySelector('#module');
	let moduleBarVisibility = module.firstElementChild.firstElementChild;	
	let moduleButton = module.firstElementChild.nextElementSibling;
	let moduleContent = module.lastElementChild;
	let moduleHeight = module.style.height;

	if(moduleContent.style.visibility === 'hidden') {
		moduleContent.style.visibility = 'visible';		
		moduleContent.style.opacity = 1;
		module.style.maxHeight = '3000px';

		moduleButton.innerText = 'hide';
		moduleBarVisibility.innerText = 'visible';
	}
	else {
		moduleContent.style.visibility = 'hidden';		
		moduleContent.style.opacity = 0;
		module.style.maxHeight = '60px';

		moduleButton.innerText = 'show';
		moduleBarVisibility.innerText = 'hidden';
	}

};
document.addEventListener("DOMContentLoaded", function() {

	btn.addEventListener('click', toggleModule);

});