function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(6)); // Résultat : 120


  module.exports = factorial

  ///////////// Explication ///////////////////
  ////La fonction vérifie si n est inférieur ou égal à 1, auquel cas elle retourne simplement 1.
  ///Sinon, elle utilise une approche récursive pour calculer le factoriel de n. 
  ///Elle multiplie n par le factoriel de n - 1, qui est calculé en appelant la fonction factoriel avec n - 1 
  //comme argument.
//Par exemple, si vous appelez la fonction factoriel(5), elle retournera la valeur 120 (qui est le produit de 1 x 2 x 3 x 4 x 5).