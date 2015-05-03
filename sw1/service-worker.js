if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', {scope: './'}).then(function(registration) {
        document.querySelector('#service-worker-registration').textContent = '✓ Success';
    }).catch(function(error) {
        document.querySelector('#service-worker-registration').textContent = '✘ Error:' + error;
    });
} else {
    document.querySelector('#service-worker-registration').textContent = '✘ Unavailable!'
}