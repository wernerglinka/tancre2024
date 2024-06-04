/* global window, document, localStorage */
import modalVideo from "./components/modal-video";
// end imports


function initPage() {
  // start inits
  if ( document.querySelector( '.js-modal-video' ) ) {
    modalVideo.init();
  }
  // end inits
}

window.addEventListener( "load", function() {
  initPage();
} );