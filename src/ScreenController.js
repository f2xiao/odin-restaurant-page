import TabController from "./TabController";

export default function () {
  // init the tabs
  const tabs = TabController();

  const tabDiv = document.querySelector("div#content");

  // create and render a header
  const html = `<header><nav></nav></header>`
  tabDiv.insertAdjacentHTML("beforebegin", html);

  const navDiv = document.querySelector("nav");

   // get the newest version of tab
   const tabGroup = tabs.getTabs();

   // render tab buttons inside the header
   tabGroup.forEach((tab, index) => { 
     const tabButton = document.createElement("button");

     tabButton.dataset.column = index;
     tabButton.textContent = tab.getName();
     navDiv.appendChild(tabButton);
   })
  
  const updateScreen = () => { 
    // clear the tab
    tabDiv.textContent = '';
    
    // get the current tab
    const currentTab = tabs.getCurrentTab();

    // create an element
    const element = document.createElement('div');
    element.setAttribute("id",currentTab.getName())

    // add the content to the element
    element.innerHTML = currentTab.getTemplate();

    // append the element to the div#content
    tabDiv.appendChild(element);
  }

  const clickHandlerTab = (e) => { 
    const selectedTab = e.target.dataset.column;
     // set the current tab and update the screen
      tabs.setCurrentTab(selectedTab);
      updateScreen();
  }
  navDiv.addEventListener("click", clickHandlerTab);

}


     