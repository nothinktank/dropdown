let dropdownBtn = document.querySelector('.btn');
let dropdownList = document.querySelector('.dropdown-list');
let overlay = document.querySelector('.overlay');

//when user clicks on the button, toggle between hiding and showing the dropdown content
function showDropdown() {
  dropdownList.classList.toggle('show');
}

//close the dropdown when user click outside of it
function hideDropdown() {
  // console.log('window is clicked')
  if (dropdownList.classList.contains('show')){
    console.log('true')
    dropdownList.classList.remove('show');

  }
}