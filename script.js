/*document.getElementById('submit').addEventListener('click', function() {
        document.querySelector('.overlay').style.display = 'block';
    });*/

function myFunction(){
  document.getElementById('overlay').style.display = 'flex';
}

function closeLay(){
  document.getElementById('overlay').style.display = 'none';
}

function addCart(){
  document.getElementById('shopOverlay').style.display = 'flex';
}

function closeSLay(){
  document.getElementById('shopOverlay').style.display = 'none';
}