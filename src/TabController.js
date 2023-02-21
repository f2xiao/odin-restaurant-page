import TabGroup from './TabGroup';
export default function () {
  const tabs = TabGroup();

  const tabsArr = tabs.getTabs();

  let currentTab = tabsArr[0];

  const getCurrentTab = () => currentTab;

  const setCurrentTab = (index) => { 
    currentTab = tabsArr[index];
  }
    
    return {
      getTabs: tabs.getTabs,
      setCurrentTab,
      getCurrentTab
    }
}
