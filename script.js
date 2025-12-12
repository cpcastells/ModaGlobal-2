function afegirContacte(nom) {
  if (!nom) {
    console.log("No es pot afegir un contacte en blanc");
    return;
  }
  console.log("Contacte afegit:", nom);
}

function validarContacte(nom) {
  if (!nom) {
    console.log("Contacte buit, no s'afegeix");
    return false;
  }
  return true;
}
