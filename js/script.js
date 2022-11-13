const tabsBtn = document.querySelectorAll(".step")
const tabsItem = document.querySelectorAll(".steps-content")


tabsBtn.forEach(function(item){
	item.addEventListener("mouseenter", function(){
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);


		tabsBtn.forEach(function(item){
			item.classList.remove('active');
		})

		tabsItem.forEach(function(item){
			item.classList.remove('active');
		})

		currentBtn.classList.add('active');
		currentTab.classList.add('active')
	});
});

const tabsBtnMd = document.querySelectorAll(".step-md")
const tabsItemMd = document.querySelectorAll(".steps-content-md")


tabsBtnMd.forEach(function(item){
	item.addEventListener("mouseenter", function(){
		let currentBtnMd = item;
		let tabIdMd = currentBtnMd.getAttribute("data-tab");
		let currentTabMd = document.querySelector(tabIdMd);


		tabsBtnMd.forEach(function(item){
			item.classList.remove('active');
		})

		tabsItemMd.forEach(function(item){
			item.classList.remove('active');
		})

		currentBtnMd.classList.add('active');
		currentTabMd.classList.add('active')
	});
});

const tabsBtnSm = document.querySelectorAll(".step-sm")
const tabsItemSm = document.querySelectorAll(".steps-content-sm")


tabsBtnSm.forEach(function(item){
	item.addEventListener("mouseenter", function(){
		let currentBtnSm = item;
		let tabIdSm = currentBtnSm.getAttribute("data-tab");
		let currentTabSm = document.querySelector(tabIdSm);


		tabsBtnSm.forEach(function(item){
			item.classList.remove('active');
		})

		tabsItemSm.forEach(function(item){
			item.classList.remove('active');
		})

		currentBtnSm.classList.add('active');
		currentTabSm.classList.add('active')
	});
});