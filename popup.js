document.getElementById('save').addEventListener('click', function() {
    const color = document.getElementById('color').value;
    const nightLight = document.getElementById('night-light').checked;
  
    // Garantir que chrome.storage.sync está disponível
    if (chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set({ color, nightLight }, function() {
        console.log('Configurações salvas');
        chrome.runtime.sendMessage({ type: 'updateTheme', color, nightLight });
      });
    } else {
      console.error('chrome.storage.sync não está disponível.');
    }
  });
  