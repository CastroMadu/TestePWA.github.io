if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker registrado!'))
        .catch(err => console.error('Erro no Service Worker:', err));
}

document.getElementById('notify').addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification('Olá! Esta é uma notificação do PWA.');
        }
    });
});

console.log('App carregado!');
