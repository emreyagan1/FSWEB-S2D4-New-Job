function bilgisayarinHazirMi() {
  const checklist = {
    // GitHub hesabınızın url'i: örn. "github: 'https://github.com/Workintech'"
    github: '',

    // İşletim sisteminiz ["mac", "windows", "linux"]'tan biri: örn. "computer: 'mac'"
    computer: '',

    // Vscode'unuzn versiyon numarası: örn. "vscode_version: '1.84.2'"
    vscode_version: '',

    // Node versiyon numarası: örn. "node_version: 'v16.13.0'"
    node_version: '',

    // Demo projesini forlayıp, clonelayıp çözdükten sonra commit atıp pushladıktan sonra repo url'ini girmek.
    demo_project_url: '',
  };

  return checklist;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = bilgisayarinHazirMi;