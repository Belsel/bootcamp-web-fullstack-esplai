const usuario = {
  nome: "Pepito",
  idade: 30,
  email: "a@a.com",
};

const json = JSON.stringify(usuario);
const usuarioConverso = JSON.parse(json);

console.log(usuario.email);
