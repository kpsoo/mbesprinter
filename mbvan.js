function openTab(event, tabName) {
    // Get all elements with class "tabcontent" and hide them
    const tabContents = document.querySelectorAll('.tabcontent');
    tabContents.forEach(tabContent => tabContent.style.display = 'none');

    // Get all elements with class "tablinks" and remove the "active" class
    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach(tabLink => tabLink.classList.remove('active'));

    // Show the content of the selected tab and mark the button as active
    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Initially, display the first tab by simulating a click
document.querySelector('.tablinks').click();
