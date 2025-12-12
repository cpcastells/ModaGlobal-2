function afegirContacte(nom) {
  if (!nom) {
    console.log("No es pot afegir un contacte en blanc");
    return;
  }
  console.log("Contacte afegit:", nom);
}
