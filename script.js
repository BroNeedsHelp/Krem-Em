function exportSave() {
  const data = localStorage.getItem('saveState');
  if (!data) {
    alert("No save found.");
    return;
  }
  const blob = new Blob([data], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'save.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function importSaveFile() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.txt';
  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem('saveState', reader.result);
      alert("Save imported!");
    };
    reader.readAsText(file);
  };
  input.click();
}

function saveToBox() {
  const data = localStorage.getItem('saveState') || '';
  document.getElementById('saveBox').value = data;
}

function loadFromBox() {
  const data = document.getElementById('saveBox').value;
  if (data.trim() !== '') {
    localStorage.setItem('saveState', data);
    alert("Save loaded from box!");
  }
}
