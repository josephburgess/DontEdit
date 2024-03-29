(function() {
    'use strict';
    const blockClickEdit = () => {
        const targetElement = document.querySelector('.ak-renderer-document');
        if (targetElement) {
            targetElement.addEventListener('click', (event) => {
                event.stopPropagation();
            }, true);
            console.log("Blocked from entering edit mode - you're welcome :)");
        }
    }

    const observer = new MutationObserver(() => {
        blockClickEdit();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    blockClickEdit();
})();
