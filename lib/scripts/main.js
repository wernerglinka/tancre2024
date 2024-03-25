/* global window, document, localStorage */
import modals from "./components/modals";
// end imports


function initPage() {
  // start inits

  if ( document.querySelector( '.modal-link' ) ) {
    modals.init();
  }
  // end inits
}

window.addEventListener( "load", function () {
  initPage();
} );