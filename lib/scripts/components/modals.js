/**
 * Manage modal boxes
 * @params {*} none
 * @return {function} initializes all modal boxes ,on the page
 */
const modals = ( function () {
  const init = () => {
    // get all modal links
    const modalLinks = document.querySelectorAll( '.modal-link' );

    // add event listeners to all modal links
    modalLinks.forEach( ( link ) => {
      link.addEventListener( 'click', ( e ) => {
        e.preventDefault();
        // get target from data attribute
        const modalTarget = link.dataset.target;
        // add class modal=active to target
        document.querySelector( "#" + modalTarget ).classList.add( 'modal-active' );
        // add modal-active class to body
        document.body.classList.add( 'modal-active' );

        // add event listener to close modal
        // Define the event handler function
        function closeModal( e ) {
          e.preventDefault();
          document.querySelector( "#" + modalTarget ).classList.remove( 'modal-active' );
          document.body.classList.remove( 'modal-active' );
        }

        // Get the modal close button
        var modalCloseButton = document.querySelector( "#" + modalTarget + " .modal-close" );

        // Remove the event listener before adding it again
        modalCloseButton.removeEventListener( 'click', closeModal );
        modalCloseButton.addEventListener( 'click', closeModal );
      } );

    } );
  };

  return { init };
} )();

export default modals;
