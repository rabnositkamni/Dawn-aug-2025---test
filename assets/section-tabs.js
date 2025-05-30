let tabsSections = document.querySelectorAll('[data-section-type="tabs"].js-waiting');

tabsSections.forEach(section => {
  section.classList.remove('js-waiting');

  const tabs = section.querySelectorAll('.tabs__tab');
  tabs.forEach(tab => {
    tab.addEventListener("click", ()=>{
      const dataGroup = tab.getAttribute('data-group');
      const suitableGroup = section.querySelector(`.tabs__group[data-group="${dataGroup}"]`);

      const activeTab = section.querySelector('.tabs__tab.active');
      const activeGroup = section.querySelector('.tabs__group.active');
      activeTab.classList.remove("active");
      activeGroup.classList.remove("active");

      tab.classList.add("active");
      suitableGroup.classList.add("active");
    })
  });
});