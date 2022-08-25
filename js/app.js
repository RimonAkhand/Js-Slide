let togglerbtn = document.querySelector("nav .togglerbtn");

togglerbtn.addEventListener("click", sidebarOpen);


function sidebarOpen() {
   let sidebar = document.querySelector(".sidebar");
   sidebar.classList.toggle("activeSidebar");
}
